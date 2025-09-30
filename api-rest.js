

const claveApi ='d8a299ca3a3e4b2cabe145258253009';
const idioma = 'es';
const ciudad = 'Huancayo';


const apiClimaActual = `https://api.weatherapi.com/v1/current.json?
q=${ciudad}&lang=${idioma}&key=${claveApi}`;


const response = await fetch(apiClimaActual);
let data = await response.json();



console.log(data);