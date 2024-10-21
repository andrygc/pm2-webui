const fs = require("fs");

class Logger {

    debug() {

    }

    success(text) {
        console.log(`\x1b[32m[Success]:\x1b[0m ${text}`);
    }

    info(text) {
        console.log(`\x1b[36m[Info]:\x1b[0m ${text}`);
    }

    warn(text) {
        console.log(`\x1b[33m[Warning]:\x1b[0m ${text}`);
    }

    error(text) {
        console.log(`\x1b[31m[Error]:\x1b[0m ${text}`);
    }

    fatal(text) {
        console.log(`\x1b[91mProcess stopped as a result of an error:\x1b[0m`);
        console.log(`\x1b[31m${text}\x1b[0m`);
    }

    print(text) {
        console.log(`${text}`);
    }
    
    // TODO: error writing
    write(text) {
        var date = new Date(),
        hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;
        var min = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;
        hour += ":" + min;
        
        fs.writeFileSync('./logs/server-log.log', '[' + hour + '] ' + text + '\r' + '\n');

        //fs.writeFileSync('./logs/logs.txt', text);
    }

    start(text) {

    }

    shutdown(text) {

    }
}

module.exports = new Logger;