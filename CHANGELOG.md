<p align="center">
    <img src="./src/public/dist/images/app/logo-pm2-webui.png">
</p>

# CHANGELOG

### **v2.0.7** - November 07, 2024
- Add news `constructor`, `logToFile` and `shell` functions in `Logger` class.
- Add new support for `SSL` connections.
- Update `server.js` file for SSL support.
- Add new error manager for WebSocket client and server.
- Add new `startApp` function in PM2 API.
- Add custom logs for the PM2 API functions.
- Add custom logs for new app deployed.
- Update buttons actions for apps.
- Update regex for the questions in setup system.
- Update changelog details.

---

### **v2.0.6** - October 31, 2024
- Add new independent module `terminal.js` at provider.
- Add `startTerminalOverWebsocket` function in the `server.js` file.
- Add `server.js` custom logs with `Logger` class.
- Update `Logger` class with the `APP_NAME` .env variable.
- Update `server.js` order line codes.
- Update `terminal` view.
- Remove websocket configuration from `server.js` file.
- Update changelog details.

---

### **v2.0.5** - October 27, 2024
- Fix: terminal rows scale.
- Add `getCurrentGitComment` function.
- Add `deployApp` function in pm2 API file.
- Add `/deploy` static route.
- Add new `button` for open deploy modal in the dashboard.
- Add modal with form for the new apps deploy.
- Add alerts for deploy success or error exit.
- Add modal with changelog details.
- Update user menu with `Changelog` and `License` options.
- Update the distribution of user menu options.
- Update `us.json` and `es.json` translations files.
- Remove `button` License from the navbar.
- Update changelog details.

---

### **v2.0.4** - October 22, 2024
- Add dependencies `ssh2` and `websocket`.
- Update `server.js` with the `ssh-client` function using `websocket`.
- Add `Logger` module for show custom logs.
- Change `setup-admin-user` to `setup-system` command.
- Update `createAdminUser` function with new params.
- Update `setup-admin-user` to `setup-system` script in `package.json` file.
- Add new questions for the command `npm run setup-system`.
- Update `.env` variables.

---

### **v2.0.3** - October 20, 2024
- Add `terminal` option to manage server console.
- Add `/terminal` static route.
- Add `terminal.html` file.
- Update user menu with `terminal` option.
- Add `xterm.js` library.
- Add new `button` in navbar for show modal of License.
- Add modal for show License.
- Add language dropdown selector in the Login.
- Add new language translations files: `fr.json`, `it.json`, `pt.json` and `ru.json`.
- Remove `button` language dropdown selector from the navbar.
- Add language dropdown selector in the footer.

---

### **v2.0.2** - October 16, 2024
- Add multilanguage options.
- Add `button` with dropdown for language items.
- Add flags for the language options.
- Add `translations` folder with `us.json` and `es.json` files.
- Add `byteToSizes` and `timeSince` function for pretty show datatime and datasize.
- Add new data of the pm2 API for the apps.
- Add support for Git data.
- Add `getCurrentGitBranch`, `getCurrentGitCommit`, `getCurrentGitUrl`, `getCurrentGitUsername`, `getCurrentGitUserEmail` functions.

---

### **v2.0.1** - October 12, 2024
- Add independent cards for the details of he apps.
- Add option show/hide pass on Login.
- Add `handlePreloader` function with `setTimeout` on 3 seconds.
- Add `deleteApp` function in pm2 API file.
- Add `/delete` static route.
- Update view of logs registers for apps.

---

### **v2.0.0** - October 09, 2024
**Initial changes release of PM2 WebUI v1.0.0! 😁**
- Change logo app.
- Change Apps details interface design.
- Change Dashboard interface design.
- Change Login interface design.
- Update Tabler library to 1.0.0-beta20.
