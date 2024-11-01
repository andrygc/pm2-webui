// WebSocket & SSH
const config = require('../../config')
const Logger = require('../../utils/logger.util')
const WebSocket = require('ws');
const { Client } = require('ssh2');

function startTerminalOverWebsocket() {
	const wss = new WebSocket.Server({ port: config.WS_PORT });

	wss.on('connection', (ws) => {
	    const conn = new Client();
	    conn.on('ready', () => {
	        ws.send('Connected successfully!!\r\n\n');
	        Logger.info(`Terminal is connected to ws://${config.APP_HOST}:${config.WS_PORT}`);
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
	        port: config.SSH_PORT,
	        username: config.SSH_USERNAME,
	        password: config.SSH_PASSWORD
	    });    
	});
}

module.exports = {
    startTerminalOverWebsocket    
}