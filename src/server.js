#!/usr/bin/env node

const config = require('./config')
const { setEnvDataSync } = require('./utils/env.util')
const { generateRandomString } = require('./utils/random.util')
const Logger = require('./utils/logger.util')
const path = require('path');
const serve = require('koa-static');
const render = require('koa-ejs');
const koaBody = require('koa-body');
const session = require('koa-session');
const Koa = require('koa');

// WebSocket & SSH
const WebSocket = require('ws');
const { Client } = require('ssh2');

// Init WebSocket
if(!config.WS_PORT) {
    Logger.error("Check the WS_PORT variable in the .env file, if not run the command -> npm run setup-system")
    process.exit(2)
}

const wss = new WebSocket.Server({ port: config.WS_PORT });

wss.on('connection', (ws) => {
    const conn = new Client();
    conn.on('ready', () => {
        ws.send('Connected successfully!!\r\n\n');
        conn.shell((err, stream) => {
            if (err) return ws.send('Error: ' + err.message + '\r\n');

            stream.on('data', (data) => {
                ws.send(data.toString());
            });

            stream.on('close', () => {
                conn.end();
                ws.close();
            });

            ws.on('message', (message) => {
                stream.write(message);
            });

            ws.on('close', () => {
                stream.end();
            });
        });
    }).connect({
        host: config.SSH_HOST,
        port: 22,
        username: config.SSH_USERNAME,
        password: config.SSH_PASSWORD
    });    
});

// Init Application
if(!config.APP_USERNAME || !config.APP_PASSWORD) {
    Logger.info("You must first setup admin user. Run command -> npm run setup-system")
    process.exit(2)
}

if(!config.APP_SESSION_SECRET){
    const randomString = generateRandomString()
    setEnvDataSync(config.APP_DIR, { APP_SESSION_SECRET: randomString})
    config.APP_SESSION_SECRET = randomString
}

// Create App Instance
const app = new Koa();

// App Settings
app.proxy = true;
app.keys = [config.APP_SESSION_SECRET];

// Middlewares
app.use(session(app));

app.use(koaBody());

app.use(serve(path.join(__dirname, 'public')));

const router = require("./routes");

app.use(router.routes());

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'base',
    viewExt: 'html',
    cache: false,
    debug: false
});

app.listen(config.APP_PORT, config.APP_HOST, () => {
    Logger.success(`${config.APP_NAME} started on http://${config.APP_HOST}:${config.APP_PORT}/`);
    Logger.success(`Client SSH listening on ws://${config.APP_HOST}:${config.WS_PORT}`);
})