<p align="center">
    <img src="https://github.com/andrygc/pm2-webui/src/public/dist/images/app/logo.png" height="130">
</p>


# PM2 WebUI
Opensource Alternative to PM2 Plus


## FEATURES
- Secure Login :white_check_mark:
- App Management :white_check_mark:
- Log Viewer :white_check_mark:
- Responsive UI :white_check_mark:
- Manual and Auto(Github webhooks) Deployment
- Environment Management


## USAGE
```bash
git clone https://github.com/andrygc/pm2-webui.git
cd pm2-webui
npm install
cp env.example .env
npm run setup-admin-user (Required for login)
npm start
```


> [!NOTE]
> *Cambiar el FQDN/IP donde se esté ejecutando el proyecto, ubicado en la linea 4 del archivo `src/config/index.js`* :wink:


## FOR DEVELOPMENT USE
```bash
npm run start:dev
```


## TODO
- [ ] support for relative paths
- [ ] use fs-extra for filesystem operations
- [ ] use [jsonfile](https://www.npmjs.com/package/jsonfile) for config management
- [ ] replace exec.util with [execa](https://www.npmjs.com/package/execa)
- [ ] add form based env management
- [ ] add realtime logs
- [ ] add log viewer for deployments
- [ ] add deployment abort functionality
- [ ] add deployment triggers
- [ ] add web terminal
- [ ] add zero downtime deployment strategies - blue-green, rolling etc
- [ ] add docker provider*


## SCREENSHOTS
![PM2 Webui Login Dark](/screenshots/desktop-login-dark.png?raw=true "PM2 WebUI Login Dark")
![PM2 Webui Dashboard Dark](/screenshots/desktop-dashboard-dark.png?raw=true "PM2 WebUI Dashboard Dark")
![PM2 Webui App Dark](/screenshots/desktop-app-dark.png?raw=true "PM2 WebUI App Dark")
![PM2 Webui Login Light](/screenshots/desktop-login-light.png?raw=true "PM2 WebUI Login Light")
![PM2 Webui Dashboard Light](/screenshots/desktop-dashboard-light.png?raw=true "PM2 WebUI Dashboard Light")
![PM2 Webui App Light](/screenshots/desktop-app-light.png?raw=true "PM2 WebUI App Light")


## Licencia
[MIT Copyright (c) 2024 Andry Noilien Guzmán Cardoza](https://github.com/andrygc/agario-deluxe/blob/main/LICENSE)


## Autor
- [@andrygc](https://www.github.com/andrygc)


## 🔗 Enlaces del autor
[![facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/andrynolien)
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/andrycardoza)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andry-cardoza)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/@andrycardoza)
[![youtube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@andrycardoza)
[![telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/andry_cardoza)

