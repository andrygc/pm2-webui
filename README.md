<p align="center">
    <img src="https://pm2.io/assets/pm2-logo-1.png" height="130">
</p>

# PM2 WebUI
Alternativa opensource PM2 Plus


## CARACTERÍSTICAS
- Login seguro :white_check_mark:
- Administración de los procesos :white_check_mark:
- Vista de logs :white_check_mark:
- Interfaz responsiva :white_check_mark:
- Información sobre el repositorio :white_check_mark:
- Administración de variables de entorno :white_check_mark:


## DESPLIEGUE
1. Clonar el repositorio
```bash
git clone https://github.com/andrygc/pm2-webui.git
```
2. Acceder al repositorio descargado
```bash
cd pm2-webui
```
3. Instalar las dependencias
```bash
npm install
```
4. Crear el archivo `.env`
```bash
cp env.example .env
```
5. Configurar el usuario y contraseña
```bash
npm run setup-admin-user
```
6. Iniciar el proyecto
```bash
npm start
```


> [!NOTE]
> *Cambiar el FQDN/IP donde se esté ejecutando el proyecto, ubicado en la linea 4 del archivo `src/config/index.js`* :wink:


## PARA USO EN DESARROLLO
```bash
npm run start:dev
```


## SUGERENCIAS
- [ ] Agregar soporte para rutas relativas
- [ ] Utilice fs-extra para operaciones del sistema de archivos
- [ ] Utilice [jsonfile](https://www.npmjs.com/package/jsonfile) para la gestión de configuración
- [ ] Reemplace exec.util con [execa](https://www.npmjs.com/package/execa)
- [ ] Agregar gestión de entorno basada en formularios
- [ ] Agregar registros en tiempo real
- [ ] Agregar visor de registros para implementaciones
- [ ] Agregar funcionalidad para cancelar la implementación
- [ ] Agregar activadores de implementación
- [ ] Agregar terminal web
- [ ] Agregue estrategias de implementación con tiempo de inactividad cero: azul-verde, continua, etc.
- [ ] Agregar proveedor de Docker


## SCREENSHOTS
![PM2 Webui Login Dark](/screenshots/desktop-login-dark.png?raw=true "PM2 WebUI Login Dark")
![PM2 Webui Dashboard Dark](/screenshots/desktop-dashboard-dark.png?raw=true "PM2 WebUI Dashboard Dark")
![PM2 Webui App Dark](/screenshots/desktop-app-dark.png?raw=true "PM2 WebUI App Dark")
![PM2 Webui Login Light](/screenshots/desktop-login-light.png?raw=true "PM2 WebUI Login Light")
![PM2 Webui Dashboard Light](/screenshots/desktop-dashboard-light.png?raw=true "PM2 WebUI Dashboard Light")
![PM2 Webui App Light](/screenshots/desktop-app-light.png?raw=true "PM2 WebUI App Light")


## LICENCIA
[MIT Copyright (c) 2024 Andry Noilien Guzmán Cardoza](https://github.com/andrygc/agario-deluxe/blob/main/LICENSE)


## AUTOR
- [@andrygc](https://www.github.com/andrygc)


## 🔗 ENLACES DEL AUTOR
[![facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/andrynoilien)
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/andrycardoza)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andry-cardoza)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/@andrycardoza)
[![youtube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@andrycardoza)
[![telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/andry_cardoza)

