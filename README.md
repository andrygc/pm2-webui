<p align="center">
    <img src="https://pm2.io/assets/pm2-logo-1.png" height="130">
    <br>
    <img src="https://badgen.net/badge/release-version/v2.0.7">
    <img src="https://badgen.net/badge/release-version/v2.0.7/green">
    <img src="https://badgen.net/badge/license/MIT/green">
    <img src="https://badgen.net/badge/starred/3/yellow">
</p>


# PM2 WebUI
Panel de Control Web PM2

---

### TABLA DE CONTENIDOS
1. [Información general](#informacion-general)
2. [Características](#caracteristicas)
3. [Tecnologías](#tecnologias)
4. [Despliegue](#despliegue)
5. [Installation](#installation)
6. [Sugerencias](#sugerencias)
7. [Screenshots](#screenshots)
8. [Licencia](#licencia)
9. [Autor](#autor)
10. [Enlaces del autor](#enlaces-del-autor)

---

### INFORMACIÓN GENERAL
PM2 WebUI es un panel de control en la web que monitorea y administra los procesos que se ejecuten con el administrador de procesos PM2 de NodeJS, tiene la posibilidad de interactuar _(iniciar, recargar, reiniciar, detener, eliminar y desplegar)_, cuenta con una terminal integrada para realizar tareas administrativas directamente en el servidor usando una conexión SSH, además muestra los detalles de cada uno de los procesos al entrar en él. A nivel de interfaz de usuario cuenta con un diseño **responsive**, modos **Claro/Oscuro**, la opción **multilenguaje* para seleccionar el idioma que sea d su preferencia.

---

### CARACTERÍSTICAS
- Soporte para HTTPS :white_check_mark:
- Login seguro :white_check_mark:
- Administración de los procesos :white_check_mark:
- Despliegue de nuevos procesos :white_check_mark:
- Vista de logs :white_check_mark:
- Terminal web (cliente ssh) :white_check_mark:
- Interfaz responsiva :white_check_mark:
- Múltiple idiomas :white_check_mark:
- Información sobre el repositorio :white_check_mark:
- Administración de variables de entorno :white_check_mark:

---

### TECNOLOGÍAS
- ![nodejs](https://badgen.net/badge/node-js/18.19.0/green)
- ![npm](https://badgen.net/badge/npm/10.2.4/green)
- ![pm2](https://badgen.net/badge/pm2/5.4.2/green)
- ![tabler](https://badgen.net/badge/tabler/1.0.0-beta20/green)

---

### DESPLIEGUE
1. Clonar el repositorio
```bash
git clone https://github.com/andrygc/pm2-webui.git
```
2. Acceder al repositorio descargado
```bash
cd pm2-webui
```

---

### INSTALACIÓN
1. Instalar las dependencias
```bash
npm install
```
2. Crear el archivo `.env`
```bash
cp env.example .env
```
3. Configurar variables del sistema
```bash
npm run setup-system
```
4. Iniciar el proyecto
```bash
npm start
```
5. Para uso en desarrollo
```bash
npm run start:dev
```

---

> [!NOTE]
> *Para el uso de la terminal se ejecuta un websocket con un cliente ssh, todos los parametros se configuran ejecutando el comando `npm run setup-system`* :wink:

---

### SUGERENCIAS
- [ ] Agregar soporte para rutas relativas
- [ ] Utilice fs-extra para operaciones del sistema de archivos
- [ ] Utilice [jsonfile](https://www.npmjs.com/package/jsonfile) para la gestión de configuración
- [ ] Reemplace exec.util con [execa](https://www.npmjs.com/package/execa)
- [ ] Agregar gestión de entorno basada en formularios
- [ ] Agregar registros en tiempo real
- [ ] Agregar proveedor de Docker

---

### SCREENSHOTS
![PM2 Webui Login Dark](/screenshots/desktop-login-dark.png?raw=true "PM2 WebUI Login Dark")
![PM2 Webui Dashboard Dark](/screenshots/desktop-dashboard-dark.png?raw=true "PM2 WebUI Dashboard Dark")
![PM2 Webui App Dark](/screenshots/desktop-app-dark.png?raw=true "PM2 WebUI App Dark")
![PM2 Webui Login Light](/screenshots/desktop-login-light.png?raw=true "PM2 WebUI Login Light")
![PM2 Webui Dashboard Light](/screenshots/desktop-dashboard-light.png?raw=true "PM2 WebUI Dashboard Light")
![PM2 Webui App Light](/screenshots/desktop-app-light.png?raw=true "PM2 WebUI App Light")

---

### LICENCIA
[MIT Copyright (c) 2024 Andry Noilien Guzmán Cardoza](https://github.com/andrygc/pm2-webui/blob/main/LICENSE)

---

### AUTOR
- [@andrygc](https://www.github.com/andrygc)

---

### 🔗 ENLACES DEL AUTOR
[![facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/andrynoilien)
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/andrycardoza)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andry-cardoza)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/@andrycardoza)
[![youtube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@andrycardoza)
[![telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/andry_cardoza)
