const fs = require("fs");
const path = require('path');
const config = require('../config');

class Logger {
    constructor() {
        this.logFilePath = path.join(__dirname, '../../system-logs.log');
    }

    logToFile(message) {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-GB'); // dd/mm/yyyy
        const formattedTime = now.toLocaleTimeString('en-GB'); // hh:mm:ss
        const logMessage = `${formattedDate} -- ${formattedTime} --> ${message}\r\n`;

        fs.appendFile(this.logFilePath, logMessage, (err) => {
            if (err) {
                console.log('Error writing to log file:', err);
            }
        });
    }

    debug(text) {
        console.log(`\x1b[34m[` + config.APP_NAME + `]:\x1b[0m ${text}`);
        this.logToFile(`DEBUG: ${text}`);
    }

    success(text) {
        console.log(`\x1b[32m[` + config.APP_NAME + `]:\x1b[0m ${text}`);
        this.logToFile(`SUCCESS: ${text}`);
    }

    info(text) {
        console.log(`\x1b[36m[` + config.APP_NAME + `]:\x1b[0m ${text}`);
        this.logToFile(`INFO: ${text}`);
    }

    warn(text) {
        console.log(`\x1b[33m[` + config.APP_NAME + `]:\x1b[0m ${text}`);
        this.logToFile(`WARN: ${text}`);
    }

    error(text) {
        console.log(`\x1b[31m[` + config.APP_NAME + `]:\x1b[0m ${text}`);
        this.logToFile(`ERROR: ${text}`);
    }

    fatal(text) {
        console.log(`\x1b[91m[` + config.APP_NAME + `]: Process stopped as a result of an error:\x1b[0m`);
        console.log(`\x1b[31m[` + config.APP_NAME + `]: ${text}\x1b[0m`);
        this.logToFile(`FATAL: ${text}`);
    }

    print(text) {
        console.log(`[` + config.APP_NAME + `]: ${text}`);
        this.logToFile(`PRINT: ${text}`);
    }

    shell(text) {
        console.log(`\x1b[36m` + config.APP_USERNAME + `@` + config.APP_NAME + `:-$\x1b[0m ${text}`);
        this.logToFile(config.APP_USERNAME + `@` + config.APP_NAME + `:-$ ${text}`);
    }
}

module.exports = new Logger;