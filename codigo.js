

const claveApi ='d8a299ca3a3e4b2cabe145258253009';
const idioma = 'es';
const inpCiudad = document.getElementById('input-ciudad');


async function obtenerClima() {
    
    const ciudad = inpCiudad.value;
    if(!ciudad){
        alert('Por favor, Ingrese una ciudad')
        return;
    }


    const apiClimaActual = `https://api.weatherapi.com/v1/current.json?
q=${ciudad}&lang=${idioma}&key=${claveApi}`;

const response = await fetch(apiClimaActual);
const data = await response.json();

mostrarClima(data);

}
3

function mostrarClima(data){
    Document.querySelector('.clima-icono').src = data.current.condition.icon;
}