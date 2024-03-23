// challange 2 - speed detector
function speedCalc() {
    const speed = parseInt(document.getElementById('speed').value); // parseInt takes user input and converts it into an integer for computer to read
    // the value given is assigned an id of speed via document.getElementById
    if (speed < 70) {
        document.getElementById('result').textContent = 'ok';
    }
    else {
        points = Math.floor((speed - 70) / 5); // driver gets a demerit for every 5 km/h they go over
        if (points > 12) {
            document.getElementById('result').textContent = 'your license is SUSPENDED';
        }
        else {
            document.getElementById('result').textContent = `points: ${points}`;
        }
    }
}