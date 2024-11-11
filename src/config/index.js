require('dotenv').config()

const config = {
    APP_DIR: process.cwd(),
    APP_NAME: process.env.APP_NAME || '',
    APP_HOST: process.env.APP_HOST || '',
    APP_PORT: process.env.APP_PORT || '',
    APP_USERNAME: process.env.APP_USERNAME || '',
    APP_PASSWORD: process.env.APP_PASSWORD || '',
    APP_SESSION_SECRET: process.env.APP_SESSION_SECRET || '',
    WS_PORT: process.env.WS_PORT || '',
    SSH_HOST: process.env.SSH_HOST || '',
    SSH_PORT: process.env.SSH_PORT || 22,
    SSH_USERNAME: process.env.SSH_USERNAME || '',
    SSH_PASSWORD: process.env.SSH_PASSWORD || '',
    SHOW_GIT_INFO: process.env.SHOW_GIT_INFO || false,
    SHOW_ENV_FILE: process.env.SHOW_ENV_FILE || false,
    DEFAULTS: {
        LINES_PER_REQUEST: 50,
        BCRYPT_HASH_ROUNDS: 10,
    }
}

module.exports = config;