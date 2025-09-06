const result = document.getElementById('result');
const sliderTemp = document.getElementById('sliderTemp');


let mensaje = '';
let colorFondo = '';

function evaluarTemperatura() {    
    let temp = sliderTemp.value;
    if (temp < 0) {
        mensaje = 'Hace mucho frío';
        colorFondo = 'blue';
    } else if (temp >= 0 && temp < 15){
        mensaje = 'Hace frío';
        colorFondo = 'lightblue';
    } else if (temp>= 15 && temp < 25){
        mensaje = 'Hace una temperatura agradable';
        colorFondo = 'green';    
    } else if (temp>= 25 && temp< 35){
        mensaje = 'Hace calor';
        colorFondo = 'orange';
    } else {
        mensaje = 'Hace mucho calor';
        colorFondo = 'red';
    }
    
    result.innerText = mensaje;
    document.body.style.backgroundColor = colorFondo;

}

sliderTemp.addEventListener('input', evaluarTemperatura);

