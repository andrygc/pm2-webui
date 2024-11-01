const fs = require("fs");
const config = require('../config');

class Logger {

    debug() {

    }

    success(text) {
        console.log(`\x1b[32m[` + config.APP_NAME + `]:\x1b[0m ${text}`);
    }

    info(text) {
        console.log(`\x1b[36m[` + config.APP_NAME + `]:\x1b[0m ${text}`);
    }

    warn(text) {
        console.log(`\x1b[33m[` + config.APP_NAME + `]:\x1b[0m ${text}`);
    }

    error(text) {
        console.log(`\x1b[31m[` + config.APP_NAME + `]:\x1b[0m ${text}`);
    }

    fatal(text) {
        console.log(`\x1b[91m[` + config.APP_NAME + `]: Process stopped as a result of an error:\x1b[0m`);
        console.log(`\x1b[31m[` + config.APP_NAME + `]: ${text}\x1b[0m`);
    }

    print(text) {
        console.log(`[` + config.APP_NAME + `]: ${text}`);
    }
}

module.exports = new Logger;