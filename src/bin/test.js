const prompts = require('prompts');
const bcrypt = require('bcryptjs'); // Importamos bcryptjs

const app_name_regex = /^.{4,}$/; 
const app_host_regex = /^(?=.{7,})(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|(?:\d{1,3}\.){3}\d{1,3})$/;
const app_port_regex = /^(?:[1-5][0-9]{0,4}|6[0-4][0-9]{4}|65[0-5][0-9]{3}|655[0-2][0-9]{2}|6553[0-5])$/;
const app_username_regex = /^(?=.{4,})[a-z0-9_]+$/;
const app_password_regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const ws_port_regex = /^(?:[1-5][0-9]{0,4}|6[0-4][0-9]{4}|65[0-5][0-9]{3}|655[0-2][0-9]{2}|6553[0-5])$/;
const ssh_host_regex = /^(?=.{7,})(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|(?:\d{1,3}\.){3}\d{1,3})$/;
const ssh_port_regex = /^(?:[1-5][0-9]{0,4}|6[0-4][0-9]{4}|65[0-5][0-9]{3}|655[0-2][0-9]{2}|6553[0-5])$/;
const ssh_username_regex = /^(?=.{6,})[a-zA-Z0-9_]+$/;
const ssh_password_regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

console.log(`Welcome!! This is a test from setup system.`);

const questions = [
  {
    type: 'text',
    name: 'app_name',
    message: 'App Name',
    validate: value => {
      if(!value){
        return 'App Name is required'
      }
      else if(value.length < 4){
        return 'App Name must have mininum 4 characters'
      }
      else if(!app_name_regex.test(value)){
        return 'App Name must contain letters and numbers'
      }
      return true
    }
  },
  {
    type: 'text',
    name: 'app_host',
    message: 'App Host',
    validate: value => {
      if(!value){
        return 'App Host is required'
      }
      else if(value.length < 7){
        return 'App Host must have mininum 7 characters'
      }
      else if(!app_host_regex.test(value)){
        return 'App Host must contain letters and numbers'
      }
      return true
    }
  },
  {
    type: 'number',
    name: 'app_port',
    message: 'App Port',
    validate: value => {
      if(!value){
        return 'App Port is required'
      }
      else if(value.length < 2){
        return 'App Port must have mininum 2 characters'
      }
      else if(!app_port_regex.test(value)){
        return 'App Port must contain numbers'
      }
      return true
    }
  },
  {
    type: 'text',
    name: 'app_username',
    message: 'App Username',
    validate: value => {
      value  = value.trim()
      if(!value){
        return 'App username is required'
      }
      else if(value.length < 4){
        return 'App username must have atleast 4 characters'
      }
      else if(!app_username_regex.test(value)){
        return 'App username can only contain Lowercase letters (a-z), Numbers (0-9) and Underscores (_)'
      }
      return true
    }
  },
  {
    type: 'password',
    name: 'app_password',
    message: 'App Password',
    validate: value => {
      if(!value){
        return 'App password is required'
      }
      else if(value.length < 4){
        return 'App username must have mininum 4 characters'
      }
      else if(!app_password_regex.test(value)){
        return 'App username must contain at least a symbol, upper and lower case letters and a number'
      }
      return true
    }
  },
  {
    type: 'number',
    name: 'ws_port',
    message: 'WebSocket Port',
    validate: value => {
      if(!value){
        return 'WebSocker Port is required'
      }
      else if(value.length < 2){
        return 'WebSocker Port must have mininum 2 characters'
      }
      else if(!ws_port_regex.test(value)){
        return 'WebSocket Port must contain numbers'
      }
      return true
    }
  },
  {
    type: 'text',
    name: 'ssh_host',
    message: 'SSH Host',
    validate: value => {
      if(!value){
        return 'SSH Host is required'
      }
      else if(value.length < 8){
        return 'SSH Host must have mininum 8 characters'
      }
      else if(!ssh_host_regex.test(value)){
        return 'SSH Host must contain letters and numbers'
      }
      return true
    }
  },
  {
    type: 'number',
    name: 'ssh_port',
    message: 'SSH Port',
    validate: value => {
      if(!value){
        return 'SSH Port is required'
      }
      else if(value.length < 2){
        return 'SSH Port must have mininum 2 characters'
      }
      else if(!ssh_port_regex.test(value)){
        return 'SSH Port must contain numbers'
      }
      return true
    }
  },
  {
    type: 'text',
    name: 'ssh_username',
    message: 'SSH Username',
    validate: value => {
      if(!value){
        return 'SSH Username is required'
      }
      else if(value.length < 6){
        return 'SSH Username must have mininum 6 characters'
      }
      else if(!ssh_username_regex.test(value)){
        return 'SSH Username must contain letters, uppercase letters and numbers'
      }
      return true
    }
  },
  {
    type: 'password',
    name: 'ssh_password',
    message: 'SSH Password',
    validate: value => {
      if(!value){
        return 'SSH Password is required'
      }
      else if(value.length < 4){
        return 'SSH Password must have mininum 4 characters'
      }
      else if(!ssh_password_regex.test(value)){
        return 'SSH Password must contain letters, uppercase letters and numbers'
      }
      return true
    }
  },
  {
    type: 'confirm',
    name: 'agreed',
    message: 'Confirm to create/update setup system params ?',
  }
];

const onCancel = prompt => {
  console.log('Test canceled!');
}

(async () => {
  const response = await prompts(questions, { onCancel });
  if(response.agreed){
    console.log('APP_NAME=' + response.app_name);
    console.log('APP_HOST=' + response.app_host);
    console.log('APP_PORT=' + response.app_port);
    console.log('APP_USERNAME=' + response.app_username);
    console.log('APP_PASSWORD=' + response.app_password);
    console.log('WS_PORT=' + response.ws_port);
    console.log('SSH_HOST=' + response.ssh_host);
    console.log('SSH_PORT=' + response.ssh_port);
    console.log('SSH_USERNAME=' + response.ssh_username);
    console.log('SSH_PASSWORD=' + response.ssh_password);
  }
})();