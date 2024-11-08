#!/usr/bin/env node

const fs = require('fs');  // Requerir el módulo fs para el sistema de archivos
const config = require('./config');
const { setEnvDataSync } = require('./utils/env.util');
const { generateRandomString } = require('./utils/random.util');
const term = require('./providers/terminal/terminal');
const Logger = require('./utils/logger.util');
const path = require('path');
const serve = require('koa-static');
const render = require('koa-ejs');
const koaBody = require('koa-body');
const session = require('koa-session');
const Koa = require('koa');
const https = require('https');  // Requerir el módulo https
const http = require('http'); // Requerir el módulo http para el servidor sin SSL

Logger.info(`Welcome to ` + config.APP_NAME + `, an open-source control panel from web.`);
Logger.info(`Loading modules. Please wait .........................`);

// Crear instancia de la App
Logger.info(`Module System Instance is starting ...................`);
const app = new Koa();
const router = require("./routes");
Logger.success(`Module System Instance is started ....................`);

// Middlewares
Logger.info(`Module Middlewares is starting .......................`);
app.use(koaBody());
app.use(session(app));
app.use(serve(path.join(__dirname, 'public')));
app.use(router.routes());
app.proxy = true;
app.keys = [config.APP_SESSION_SECRET];
Logger.success(`Module Middlewares is started ........................`);

// Rendering
Logger.info(`Module Render Views is starting ......................`);
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'base',
    viewExt: 'html',
    cache: false,
    debug: false
});
Logger.success(`Module Render Views is started .......................`);

// Init WebSocket
if (!config.WS_PORT) {
    Logger.error("The WS_PORT variable is not defined, run command -> npm run setup-system");
    process.exit(2);
} else {
    term.startTerminalOverWebsocket();
}

// Init Admin User
if (!config.APP_USERNAME || !config.APP_PASSWORD) {
    Logger.info("You must first setup admin user. Run command -> npm run setup-system");
    process.exit(2);
} else {
    Logger.success(`Admin User is loaded .................................`);
}

// Init App Session Secret
if (!config.APP_SESSION_SECRET) {
    const randomString = generateRandomString();
    setEnvDataSync(config.APP_DIR, { APP_SESSION_SECRET: randomString });
    config.APP_SESSION_SECRET = randomString;
    Logger.success(`Session Secret is established .........................`);
} else {
    Logger.success(`Session Secret is loaded .............................`);
}

// Check SSL files and create server 
const sslKeyPath = path.join(__dirname, './providers/ssl/server.key');
const sslCertPath = path.join(__dirname, './providers/ssl/server.crt');
const sslExists = fs.existsSync(sslKeyPath) && fs.existsSync(sslCertPath);

if (sslExists) {
    const ssl = {
        key: fs.readFileSync(sslKeyPath),
        cert: fs.readFileSync(sslCertPath),
    };
    Logger.success(`Protocol HTTPS is enabled ............................`);

    // Crear un servidor HTTPS
    https.createServer(ssl, app.callback()).listen(config.APP_PORT, config.APP_HOST, () => {
        Logger.success(`${config.APP_NAME} has been started successfully, visit https://${config.APP_HOST}:${config.APP_PORT}/`);
    });
} else {
    // Crear un servidor HTTP si no existen los archivos SSL
    Logger.warn(`Protocol HTTPS is disabled ...........................`);

    http.createServer(app.callback()).listen(config.APP_PORT, config.APP_HOST, () => {
        Logger.success(`${config.APP_NAME} has been started successfully, visit http://${config.APP_HOST}:${config.APP_PORT}/`);
    });
}