const config = require('../config')
const { setEnvDataSync } = require('../utils/env.util')
const { hashPasswordSync } = require('../utils/password.util')

const setSystemParams = (app_name, app_host, app_port, app_username, app_password, ws_port, ssh_host, ssh_port, ssh_username, ssh_password) => {
    const systemParams = {
        APP_NAME: app_name,
        APP_HOST: app_host,
        APP_PORT: app_port,
        APP_USERNAME: app_username,
        APP_PASSWORD: hashPasswordSync(app_password),
        WS_PORT: ws_port,
        SSH_HOST: ssh_host,
        SSH_PORT: ssh_port,
        SSH_USERNAME: ssh_username,
        SSH_PASSWORD: hashPasswordSync(ssh_password),
    }
    setEnvDataSync(config.APP_DIR, systemParams)
}

module.exports = {
    setSystemParams
}