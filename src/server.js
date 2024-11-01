#!/usr/bin/env node

const config = require('./config');
const { setEnvDataSync } = require('./utils/env.util');
const { generateRandomString } = require('./utils/random.util');
const term = require('./providers/terminal/terminal');
const Logger = require('./utils/logger.util');
const path = require('path');
const serve = require('koa-static');
const render = require('koa-ejs');
const koaBody = require('koa-body');
const session = require('koa-session');
const Koa = require('koa');

Logger.info(`Welcome to ` + config.APP_NAME + `, a open source control panel from web.`);
Logger.info(`Loading modules. Please wait .........................`);

// Create App Instance
Logger.warn(`Module System Instance is starting ...................`);
const app = new Koa();
Logger.success(`Module System Instance is started ....................`);

// Middlewares
Logger.warn(`Module Middlewares is starting .......................`);
app.use(session(app));
app.use(koaBody());
app.use(serve(path.join(__dirname, 'public')));
app.proxy = true;
app.keys = [config.APP_SESSION_SECRET];
Logger.success(`Module Middlewares is started ........................`);

// Router
Logger.warn(`Module Routes is starting ............................`);
const router = require("./routes");
app.use(router.routes());
Logger.success(`Module Routes is started .............................`);

// Rendering
Logger.warn(`Module Render Views is starting ......................`);
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'base',
    viewExt: 'html',
    cache: false,
    debug: false
});
Logger.success(`Module Render Views is started .......................`);

// Init WebSocket
if(!config.WS_PORT) {
    Logger.error("Check the WS_PORT variable in the .env file, if not run the command -> npm run setup-system")
    process.exit(2)
}else {
    Logger.warn(`Module Websocket is starting .........................`);
    term.startTerminalOverWebsocket();
    Logger.success(`Module Websocket is started, listening on ws://${config.APP_HOST}:${config.WS_PORT}`);
}

// Init Admin User
if(!config.APP_USERNAME || !config.APP_PASSWORD) {
    Logger.info("You must first setup admin user. Run command -> npm run setup-system")
    process.exit(2)
} else {
    Logger.success(`Admin User is loaded .................................`);
}

// Init App Session Secret
if(!config.APP_SESSION_SECRET){
    const randomString = generateRandomString()
    setEnvDataSync(config.APP_DIR, { APP_SESSION_SECRET: randomString})
    config.APP_SESSION_SECRET = randomString;
    Logger.success(`Session Secret is stablished ..................`);
} else {
    Logger.success(`Session Secret is loaded .............................`);
}

app.listen(config.APP_PORT, config.APP_HOST, () => {
    Logger.success(`${config.APP_NAME} has been started successfully, visit http://${config.APP_HOST}:${config.APP_PORT}/`);
})