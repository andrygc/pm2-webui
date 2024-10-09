const bytesToSize = function(bytes, precision) {
    var kilobyte = 1024
    var megabyte = kilobyte * 1024
    var gigabyte = megabyte * 1024
    var terabyte = gigabyte * 1024
  
    if ((bytes >= 0) && (bytes < kilobyte)) {
      return bytes + ' B'
    } else if ((bytes >= kilobyte) && (bytes < megabyte)) {
      return (bytes / kilobyte).toFixed(precision) + ' KB'
    } else if ((bytes >= megabyte) && (bytes < gigabyte)) {
      return (bytes / megabyte).toFixed(precision) + ' MB'
    } else if ((bytes >= gigabyte) && (bytes < terabyte)) {
      return (bytes / gigabyte).toFixed(precision) + ' GB'
    } else if (bytes >= terabyte) {
      return (bytes / terabyte).toFixed(precision) + ' TB'
    } else {
      return bytes + ' B'
    }
}

const timeSince = function(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);
  var years = interval;
  seconds %= 31536000;

  interval = Math.floor(seconds / 2592000);
  var months = interval;
  seconds %= 2592000;

  interval = Math.floor(seconds / 604800);
  var weeks = interval;
  seconds %= 604800;

  interval = Math.floor(seconds / 86400);
  var days = interval;
  seconds %= 86400;

  interval = Math.floor(seconds / 3600);
  var hours = interval;
  seconds %= 3600;

  interval = Math.floor(seconds / 60);
  var minutes = interval;
  seconds %= 60;

  let result = [];
  if (years > 0) result.push(`${years} años`);
  if (months > 0) result.push(`${months} meses`);
  if (weeks > 0) result.push(`${weeks} semanas`);
  if (days > 0) result.push(`${days} días`);
  if (hours > 0) result.push(`${hours} horas`);
  if (minutes > 0) result.push(`${minutes} minutos`);
  if (seconds > 0) result.push(`${seconds} segundos`);

  return result.join(", ");
}

module.exports = {
    bytesToSize,
    timeSince
}