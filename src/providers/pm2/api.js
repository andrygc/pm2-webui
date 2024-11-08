const pm2 = require('pm2');
const { bytesToSize, timeSince } = require('./ux.helper')
const Logger = require ('../../utils/logger.util')

function listApps(){
    return new Promise((resolve, reject) => {
        pm2.connect((err) => {
            if (err) {
                reject(err)
            }
            pm2.list((err, apps) => {
                if (apps.length > 0) {
                    Logger.shell(apps.length + ` apps has been found`)
                } else {
                    Logger.shell(`Apps not found`)
                }
                
                pm2.disconnect()
                if (err) {
                    Logger.error(err.message)
                    reject(err)
                }
                apps = apps.map((app) => {
                    return {
                        name: app.name,
                        status: app.pm2_env.status,
                        cpu: app.monit.cpu,
                        memory: bytesToSize(app.monit.memory),
                        uptime: timeSince(app.pm2_env.pm_uptime),
                        pm_id: app.pm_id,
                    }
                })
                resolve(apps)
            })
        })
    })
}

function describeApp(appName){
    return new Promise((resolve, reject) => {
        pm2.connect((err) => {
            if (err) {
                reject(err)
            }
            pm2.describe(appName, (err, apps) => {
                Logger.shell(`App ` + appName + ` details has been loaded`)
                pm2.disconnect()
                if (err) {
                    Logger.error(err.message)
                    reject(err)
                }
                if(Array.isArray(apps) && apps.length > 0){
                    const app = {
                        name: apps[0].name,
                        status: apps[0].pm2_env.status,
                        cpu: apps[0].monit.cpu,
                        memory: bytesToSize(apps[0].monit.memory),
                        uptime: timeSince(apps[0].pm2_env.pm_uptime),
                        pm_id: apps[0].pm_id, 
                        pm_out_log_path: apps[0].pm2_env.pm_out_log_path,
                        pm_err_log_path: apps[0].pm2_env.pm_err_log_path,
                        pm2_env_cwd: apps[0].pm2_env.pm_cwd,
                        // new
                        pid: apps[0].pid, 
                        version: apps[0].pm2_env.version,  
                        namespace: apps[0].pm2_env.namespace,
                        restarts: apps[0].pm2_env.restart_time,
                        exec_mode: apps[0].pm2_env.exec_mode,
                        unstable_restarts: apps[0].pm2_env.unstabe_restarts,
                        exec_interpreter: apps[0].pm2_env.exec_interpreter,
                        pm_exec_path: apps[0].pm2_env.pm_exec_path,
                        // new new
                        instances: apps[0].pm2_env.instances,
                        created_at: timeSince(apps[0].pm2_env.created_at),
                        watch: apps[0].pm2_env.watch
                    }
                    resolve(app)
                }
                else{
                    resolve(null)
                }
            })
        })
    })
}

function reloadApp(process){
    return new Promise((resolve, reject) => {
        pm2.connect((err) => {
            if (err) {
                reject(err)
            }
            pm2.reload(process, (err, proc) => {
                Logger.shell(`App ` + process + ` has been reloaded`)
                pm2.disconnect()
                if (err) {
                    Logger.error(err.message)
                    reject(err)
                }
                resolve(proc)
            })
        })
    })
}

function restartApp(process){
    return new Promise((resolve, reject) => {
        pm2.connect((err) => {
            if (err) {
                reject(err)
            }
            pm2.restart(process, (err, proc) => {
                Logger.shell(`App ` + process + ` has been restarted`)
                pm2.disconnect()
                if (err) {
                    Logger.error(err.message)
                    reject(err)
                }
                resolve(proc)
            })
        })
    })
}

function stopApp(process){
    return new Promise((resolve, reject) => {
        pm2.connect((err) => {
            if (err) {
                reject(err)
            }
            pm2.stop(process, (err, proc) => {
                Logger.shell(`App ` + process + ` has been stopped`)
                pm2.disconnect()
                if (err) {
                    Logger.error(err.message)
                    reject(err)
                }
                resolve(proc)
            })
        })
    })
}

function startApp(process){
    return new Promise((resolve, reject) => {
        pm2.connect((err) => {
            if (err) {
                reject(err)
            }
            pm2.start(process, (err, proc) => {
                Logger.shell(`App ` + process + ` has been started`)
                pm2.disconnect()
                if (err) {
                    Logger.error(err.message)
                    reject(err)
                }
                resolve(proc)
            })
        })
    })
}

function deleteApp(process){
    return new Promise((resolve, reject) => {
        pm2.connect((err) => {
            if (err) {
                reject(err)
            }
            pm2.delete(process, (err, proc) => {
                Logger.shell(`App ` + process + ` has been deleted`)
                pm2.disconnect()
                if (err) {
                    Logger.error(err.message)
                    reject(err)
                }
                resolve(proc)
            })
        })
    })
}

function deployApp(process) {
    return new Promise((resolve, reject) => {
        pm2.connect(err => {
            if (err) {
                return reject(err);
            }

            pm2.start(process, (err, proc) => {
                Logger.shell(`App ` + process + ` has been deployed`)
                pm2.disconnect();
                if (err) {
                    Logger.error(err.message)
                    return reject(err);
                }
                resolve(proc);
            });
        });
    });
}

module.exports = {
    listApps,
    describeApp,
    reloadApp,
    restartApp,
    stopApp,
    startApp,
    deleteApp,
    deployApp    
}

