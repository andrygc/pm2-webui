const config = require('../config')
const RateLimit = require('koa2-ratelimit').RateLimit;
const router = require('@koa/router')();
const Logger = require('../utils/logger.util');
const { listApps, describeApp, reloadApp, restartApp, stopApp, startApp, deleteApp, deployApp } = require('../providers/pm2/api')
const { validateAdminUser } = require('../services/admin.service')
const { readLogsReverse } = require('../utils/read-logs.util')
const { getCurrentGitBranch, getCurrentGitCommit, getCurrentGitComment, getCurrentGitUrl, getCurrentGitUsername, getCurrentGitUserEmail } = require('../utils/git.util')
const { getEnvFileContent } = require('../utils/env.util')
const { isAuthenticated, checkAuthentication }= require('../middlewares/auth')
const AnsiConverter = require('ansi-to-html');
const ansiConvert = new AnsiConverter();

const loginRateLimiter = RateLimit.middleware({
    interval: 2*60*1000, // 2 minutes
    max: 100,
    prefixKey: '/login' // to allow the bdd to Differentiate the endpoint 
  });

router.get('/', async (ctx) => {
    return ctx.redirect('/login')
})

router.get('/login', loginRateLimiter, checkAuthentication, async (ctx) => {
    return await ctx.render('auth/login', {layout : false, login: { username: '', password:'', error: null }})
})

router.post('/login', loginRateLimiter, checkAuthentication, async (ctx) => {
    const { username, password } = ctx.request.body;
    try {
        await validateAdminUser(username, password)
        ctx.session.isAuthenticated = true;
        Logger.shell(`Admin user login`);
        return ctx.redirect('/apps')
    }
    catch(err){
        Logger.error(err.message);
        return await ctx.render('auth/login', {layout : false, login: { username, password, error: err.message }})
    }
})

router.get('/apps', isAuthenticated, async (ctx) => {
    const apps =  await listApps();
    return await ctx.render('apps/dashboard', {
      apps
    });
});

router.get('/terminal', isAuthenticated, async (ctx) => {
    return await ctx.render('apps/terminal');
});

router.get('/logout', (ctx)=>{
    ctx.session = null;
    Logger.shell(`Admin user logout`);
    return ctx.redirect('/login')
})

router.get('/apps/:appName', isAuthenticated, async (ctx) => {
    const { appName } = ctx.params
    let app =  await describeApp(appName)
    if(app){
        app.git_branch = await getCurrentGitBranch(app.pm2_env_cwd)
        app.git_commit = await getCurrentGitCommit(app.pm2_env_cwd)
        app.git_comment = await getCurrentGitComment(app.pm2_env_cwd)
        app.git_url = await getCurrentGitUrl(app.pm2_env_cwd)
        app.git_username = await getCurrentGitUsername(app.pm2_env_cwd)
        app.git_useremail = await getCurrentGitUserEmail(app.pm2_env_cwd)
        app.env_file = await getEnvFileContent(app.pm2_env_cwd)
        const stdout = await readLogsReverse({filePath: app.pm_out_log_path})
        const stderr = await readLogsReverse({filePath: app.pm_err_log_path})
        stdout.lines = stdout.lines.map(log => {
            return  ansiConvert.toHtml(log)
        }).join('<br/>')
        stderr.lines = stderr.lines.map(log => {
            return  ansiConvert.toHtml(log)
        }).join('<br/>')
        return await ctx.render('apps/app', {
            app,
            logs: {
                stdout,
                stderr
            }
        });
    }
    return ctx.redirect('/apps')
});

router.get('/api/apps/:appName/logs/:logType', isAuthenticated, async (ctx) => {
    const { appName, logType } = ctx.params
    const { linePerRequest, nextKey } = ctx.query
    if(logType !== 'stdout' && logType !== 'stderr'){
        return ctx.body = {
            'error': 'Log Type must be stdout or stderr'
        }
    }
    const app =  await describeApp(appName)
    const filePath = logType === 'stdout' ? app.pm_out_log_path: app.pm_err_log_path
    let logs = await readLogsReverse({filePath, nextKey})
    logs.lines = logs.lines.map(log => {
        return  ansiConvert.toHtml(log)
    }).join('<br/>')
    return ctx.body = {
        logs
    };
});

router.post('/api/apps/:appName/reload', isAuthenticated, async (ctx) => {
    try{
        let { appName } = ctx.params
        let apps =  await reloadApp(appName)
        if(Array.isArray(apps) && apps.length > 0){
            return ctx.body = {
                success: true
            }
        }
        return ctx.body = {
            success: false
        }
    }
    catch(err){
        return ctx.body = {
            'error':  err
        }
    }
});

router.post('/api/apps/:appName/restart', isAuthenticated,  async (ctx) => {
    try{
        let { appName } = ctx.params
        let apps =  await restartApp(appName)
        if(Array.isArray(apps) && apps.length > 0){
            return ctx.body = {
                success: true
            }
        }
        return ctx.body = {
            success: false
        }
    }
    catch(err){
        return ctx.body = {
            'error':  err
        }
    }
});

router.post('/api/apps/:appName/stop', isAuthenticated, async (ctx) => {
    try{
        let { appName } = ctx.params
        let apps =  await stopApp(appName)
        if(Array.isArray(apps) && apps.length > 0){
            return ctx.body = {
                success: true
            }
        }
        return ctx.body = {
            success: false
        }
    }
    catch(err){
        Logger.error(err.message);
        return ctx.body = {
            'error':  err
        }
    }
});

router.post('/api/apps/:appName/start', isAuthenticated, async (ctx) => {
    try{
        let { appName } = ctx.params
        let apps =  await startApp(appName)
        if(Array.isArray(apps) && apps.length > 0){
            return ctx.body = {
                success: true
            }
        }
        return ctx.body = {
            success: false
        }
    }
    catch(err){
        Logger.error(err.message);
        return ctx.body = {
            'error':  err
        }
    }
});

router.post('/api/apps/:appName/delete', isAuthenticated, async (ctx) => {
    try{
        let { appName } = ctx.params
        let apps =  await deleteApp(appName)
        if(Array.isArray(apps) && apps.length > 0){
            return ctx.body = {
                success: true
            }
        }
        return ctx.body = {
            success: false
        }
    }
    catch(err){
        return ctx.body = {
            'error':  err
        }
    }
});

router.post('/api/deploy', isAuthenticated, async (ctx) => {
    try {
        // Capturamos los datos enviados en el cuerpo de la solicitud
        const { name, script, namespace, watch, modeType } = ctx.request.body;
        
        // Creamos la configuración de la aplicación
        const appConfig = {
            name, 
            script,
            watch: watch ? true : false, // Convertir a booleano
            mode: modeType === "1" ? "fork" : "cluster", // Definimos el modo basado en el valor seleccionado
            namespace: namespace || '',
        }

        // Llamamos a la función deployApp para desplegar la aplicación
        const apps = await deployApp(appConfig);

        console.log(appConfig);

        // Verificamos si se obtuvo algún resultado
        if (Array.isArray(apps) && apps.length > 0) {
            return ctx.body = {
                success: true,
                apps: apps // Puedes incluir información sobre las aplicaciones desplegadas
            };
        }

        return ctx.body = {
            success: false // Si no se desplegó ninguna aplicación
        };
    } catch (err) {
        return ctx.body = {
            success: false,
            error: err.message // Devuelve solo el mensaje de error, no el objeto completo
        };
    }
});

module.exports = router;
