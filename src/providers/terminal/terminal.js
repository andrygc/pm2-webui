// WebSocket & SSH
const config = require('../../config')
const Logger = require('../../utils/logger.util')
const WebSocket = require('ws');
const { Client } = require('ssh2');

function startTerminalOverWebsocket() {
	Logger.info(`Module Websocket is starting .........................`);

	const wss = new WebSocket.Server({ port: config.WS_PORT });

	wss.on('connection', (ws) => {
	    const conn = new Client();
	    conn.on('ready', () => {
	        ws.send('Connected successfully!!\r\n\n');
	        Logger.shell(`Terminal is connected to websocket on port ${config.WS_PORT}`);
	        conn.shell((err, stream) => {
	            if (err) {
	            	Logger.fatal(err.message);
	            	ws.send('Error: ' + err.message + '\r\n');
	            	return;
	            } 

	            stream.on('data', (data) => {
	                ws.send(data.toString());
	            });

	            stream.on('error', (err) => {
				    Logger.fatal(err.message);
				    conn.end();
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
	        port: config.SSH_PORT,
	        username: config.SSH_USERNAME,
	        password: config.SSH_PASSWORD
	    });    
	});

	Logger.success(`Module WebSocket started on port ${config.WS_PORT} ................`);
}

module.exports = {
    startTerminalOverWebsocket    
}