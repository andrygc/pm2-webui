require('dotenv').config()

const config = {
    HOST: process.env.HOST || 'webhosting.cu',
    PORT: process.env.PORT || 4343,
    APP_DIR: process.cwd(),
    APP_NAME: process.env.APP_NAME || 'PM2 Web UI',
    APP_SESSION_SECRET: process.env.APP_SESSION_SECRET || null,
    APP_USERNAME: process.env.APP_USERNAME || null,
    APP_PASSWORD: process.env.APP_PASSWORD || null,
    SHOW_GIT_INFO: process.env.SHOW_GIT_INFO || false,
    SHOW_ENV_FILE: process.env.SHOW_ENV_FILE || false,
    DEFAULTS: {
        LINES_PER_REQUEST: 50,
        BCRYPT_HASH_ROUNDS: 10,
    }
}

module.exports = config;