// challange 1 - student grade generator
function studentGradeCalc() {
    const studentMark = parseInt(document.getElementById('studentMark').value);  // the value given is assigned an id of studentMark via document.getElementById
    // parseInt takes user input and converts it into an integer for computer to read
    let studentGrade = ''  // declares studentGrade in a manner that allows it to change
    if (studentMark > 79 && studentMark <= 100) {
        studentGrade == 'A'
    }
    else if (studentMark >= 60 && studentMark <= 79) {
        studentGrade == 'B'
    }
    else if (studentMark >= 50 && studentMark <= 59) {
        studentGrade == 'C'
    }
    else if (studentMark >= 40 && studentMark <= 49) {
        studentGrade == 'B'
    }
    else {
        studentGrade == 'E'
    }
    document.getElementById('studentGrade').textContent = `students grade is: ${studentGrade}`; // .textContent returns the studentGrade 
    // text content is set to 'students grade is ...'
} // if..else if...else used to return the correct grade