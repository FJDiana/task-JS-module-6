const trafficLightl = document.querySelector('#trafficLight1');

function makeGreen() {
    trafficLightl.style.background = ('green');
    trafficLightl.removeEventListener('click', makeGreen);
    trafficLightl.addEventListener('click', makeYellow);
}

trafficLight1.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLight1.style.background = ('yellow');
    trafficLight1.removeEventListener('click', makeYellow);
    trafficLight1.addEventListener('click', makeRed);
}

trafficLight1.addEventListener('click', makeYellow);

function makeRed() {
    trafficLight1.style.background = ('red');
    trafficLight1.removeEventListener('click', makeRed);
    trafficLight1.addEventListener('click', makeGreen);
}

trafficLight1.addEventListener('click', makeRed);

