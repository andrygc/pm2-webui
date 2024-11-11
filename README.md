<p align="center">
    <img src="./src/public/dist/images/app/logo-pm2-webui.png" height="130">
</p>

<p align="center">
    <img src="https://badgen.net/badge/release-version/v2.0.7/blue">
    <img src="https://badgen.net/badge/license/MIT/blue">
    <img src="https://badgen.net/badge/starred/3/yellow">
</p>

# PM2 WebUI
Panel de Control Web Open Source

---

### TABLA DE CONTENIDOS
1. [Información General](#informacion-general)
2. [Características](#caracteristicas)
3. [Tecnologías](#tecnologias)
4. [Despliegue](#despliegue)
5. [Instalación](#instalacion)
6. [Sugerencias](#sugerencias)
7. [Screenshots](#screenshots)
8. [Licencia](#licencia)
9. [Autor](#autor)
10. [Enlaces del Autor](#enlaces-del-autor)

---

### INFORMACION GENERAL
**PM2 WebUI** es un panel de control open source desde la web para monitorear y administrar procesos haciendo uso de la API javascript de PM2.  En el caso de la administración tiene la posibilidad de interactuar _(iniciar, reiniciar, recargar, detener y eliminar)_ con cada uno de los procesos, así como la opción de desplegar nuevos procesos. En el caso del monitoreo al acceder a los procesos muestra los detalles específicos _(id, pid, version, modo , nombre de espacio, uso de cpu, uso de memoria, reinicios, tiempo de actividad, directorio del proceso, directorio del script, intérpreter, git url, git branch, git commit, git comment)_, así como el registro de salida y errores de dicho proceso. Además cuenta con una terminal web integrada para realizar tareas administrativas directamente el servidor.

---

### CARACTERISTICAS
**1. Backend:**
- Soporte para HTTPS :white_check_mark:
- Login seguro :white_check_mark:
- Administración de los procesos :white_check_mark:
- Descripción detallada de los procesos :white_check_mark:
- Vista de logs de cada proceso :white_check_mark:
- Información sobre repositorio GitHub _(si es un proyecto clonado)_ :white_check_mark:
- Despliegue de nuevos procesos :white_check_mark:
- Cliente SSH sobre WebSocket :white_check_mark:

**2. Frontend:**
- Interfaz moderna y responsiva _(librería **Tabler**)_ :white_check_mark:
- Modo Claro/Oscuro :white_check_mark:
- Múltiples idiomas :white_check_mark:
- Xterm _(para la terminal integrada)_ :white_check_mark:

---

### TECNOLOGIAS
![nodejs](https://badgen.net/badge/node-js/18.19.0/green) ![npm](https://badgen.net/badge/npm/10.2.4/green) ![pm2](https://badgen.net/badge/pm2/5.4.2/green) ![koa](https://badgen.net/badge/koa/2.13.1/green) ![websocket](https://badgen.net/badge/websocket/8.18.0/green) ![tabler](https://badgen.net/badge/tabler/1.0.0-beta20/green) ![xterm](https://badgen.net/badge/xterm/4.8.0/green)

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

### INSTALACION
1. Crear el archivo `.env`
```bash
cp env.example .env
```
2. Instalar las dependencias
```bash
npm install
```
3. Configurar parámetros del sistema
```bash
npm run setup-system
```
4. Iniciar el proyecto
```bash
# Iniciar servidor directamente
npm start

# Iniciar servidor directamente con pm2
npm run start:pm2
```
5. Para uso en desarollo
```bash
# Iniciar en modo desarrollo
npm run start:dev
```

> [!NOTE]
> _Para el uso de la terminal se ejecuta un websocket con un cliente ssh, en el archivo **terminal.html** debe establecer la constante **wsUrl** con la url del websocket_ :wink:

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
![PM2 Webui Login Dark](./screenshots/desktop-login-dark.png?raw=true "PM2 WebUI Login Dark")
![PM2 Webui Dashboard Dark](./screenshots/desktop-dashboard-dark.png?raw=true "PM2 WebUI Dashboard Dark")
![PM2 Webui App Dark](./screenshots/desktop-app-dark.png?raw=true "PM2 WebUI App Dark")
![PM2 Webui Login Light](./screenshots/desktop-login-light.png?raw=true "PM2 WebUI Login Light")
![PM2 Webui Dashboard Light](./screenshots/desktop-dashboard-light.png?raw=true "PM2 WebUI Dashboard Light")
![PM2 Webui App Light](./screenshots/desktop-app-light.png?raw=true "PM2 WebUI App Light")

---

### LICENCIA
[MIT Copyright (c) 2024 Andry Noilien Guzmán Cardoza](https://github.com/andrygc/pm2-webui/blob/main/LICENSE)

---

### AUTOR
- [@andrygc](https://www.github.com/andrygc)

---

### ENLACES DEL AUTOR
[![facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/andrynoilien)
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/andrycardoza)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andry-cardoza)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/@andrycardoza)
[![youtube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@andrycardoza)
[![telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/andry_cardoza)
