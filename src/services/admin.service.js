const config = require('../config')
const { setEnvDataSync } = require('../utils/env.util')
const { hashPasswordSync, comparePassword } = require('../utils/password.util')

const createAdminUser = (app_name, app_host, app_port, app_username, app_password, ws_port, ssh_host, ssh_username, ssh_password) => {
    const adminUser = {
        APP_NAME: app_name,
        APP_HOST: app_host,
        APP_PORT: app_port,
        APP_USERNAME: app_username,
        APP_PASSWORD: hashPasswordSync(app_password),
        WS_PORT: ws_port,
        SSH_HOST: ssh_host,
        SSH_USERNAME: ssh_username,
        SSH_PASSWORD: ssh_password,
    }
    setEnvDataSync(config.APP_DIR, adminUser)
}

const validateAdminUser = async (username, password) => {
    if(username !== config.APP_USERNAME){
        throw new Error('User does not exist')
    }
    const isPasswordCorrect = await comparePassword(password, config.APP_PASSWORD)
    if(!isPasswordCorrect){
        throw new Error('Password is incorrect')
    }
    return true
}

module.exports = {
    createAdminUser,
    validateAdminUser
}