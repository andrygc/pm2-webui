require('dotenv').config()

const config = {
    APP_DIR: process.cwd(),
    APP_NAME: process.env.APP_NAME || null,
    APP_HOST: process.env.APP_HOST || null,
    APP_PORT: process.env.APP_PORT || null,
    APP_USERNAME: process.env.APP_USERNAME || null,
    APP_PASSWORD: process.env.APP_PASSWORD || null,
    APP_SESSION_SECRET: process.env.APP_SESSION_SECRET || null,
    WS_PORT: process.env.WS_PORT || null,
    SSH_HOST: process.env.SSH_HOST || null,
    SSH_PORT: process.env.SSH_PORT || 22,
    SSH_USERNAME: process.env.SSH_USERNAME || null,
    SSH_PASSWORD: process.env.SSH_PASSWORD || null,
    SHOW_GIT_INFO: process.env.SHOW_GIT_INFO || false,
    SHOW_ENV_FILE: process.env.SHOW_ENV_FILE || false,
    DEFAULTS: {
        LINES_PER_REQUEST: 50,
        BCRYPT_HASH_ROUNDS: 10,
    }
}

module.exports = config;