(function (){
    "use strict";

    let convertType = 'miles';
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answer = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', (event) => {
        const key = event.code;

        if (key === 'KeyK') {
            convertType = 'kilometers';
            heading.innerHTML = 'Kilometers to Miles Converter';
            intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles';
        }
        else if (key === 'KeyM') {
            convertType = 'miles';
            heading.innerHTML = 'Miles to Kilometers Converter';
            intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);
        
        if (distance) {
            if (convertType == 'kilometers') {
            const conversion = (distance * 1.609344).toFixed(3);
            const answer = document.getElementById('answer');
            answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
            }
            else if (convertType == 'miles') {
            const conversion = (distance * 0.621371192).toFixed(3);
            const answer = document.getElementById('answer');
            answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
            }
        }
        else {
            answer.innerHTML = '<h2>Please provide a number!</h2>';
        }
    }); 
})();

