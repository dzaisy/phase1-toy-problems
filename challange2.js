// challange 2 - speed detector
const speed = parseInt(prompt('input speed of car:'))
function speedCalc() {
    // the value given is assigned an id of speed via document.getElementById
    if (speed < 70) {
        console.log('ok')
    }
    else {
        const points = Math.floor((speed - 70) / 5); // driver gets a demerit for every 5 km/h they go over
        // Math.floor rounds speed down and returns the largest num > or =
        if (points > 12) { // checks to see if the points given are more than 12, responds apropriately
            console.log('license SUSPENDED');
        }
        else {
            console.log(`points: ${points}`);
        } 
    }
}