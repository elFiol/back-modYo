
//   // Supongamos que obtienes la fecha actual
//   const fecha = new Date();
//   const datoHoy = fecha.toString(); // Asegúrate de que es una cadena

//   // Remueve "GMT-300" y "(hora estándar argentina)" de la cadena
//   let textoLimpio = datoHoy.replace(/GMT[+-]\d{4}/, '').replace(/\s*\(hora estándar de Argentina\)/, '').trim();
//   // para comparar los dos datos (por que vamos a hacer otro date de la fecha actual) a ver cual es pasado y cual no
//   const texto = "Tue Jun 04 2024 16:50:25";

//   // Separar la parte de la fecha y la parte de la hora
//   const partes = texto.split(' ');
//   console.log(partes)
//   // Separar la parte de la hora en horas, minutos y segundos
//   const hora = partes[4].split(':');

//   // Combinar las partes de la fecha con las partes de la hora
//   const resultado = [...partes.slice(0, 4), ...hora];

//   console.log(resultado); // ["Tue", "Jun", "04", "2024", "16", "50", "25"]
