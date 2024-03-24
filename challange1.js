// challange 1 - student grade generator
function studentGradeCalc() {
    const studentMark = (prompt('enter student marks:')); // allows user to enter marks
    let studentGrade = '';  // declares studentGrade in a manner that allows it to change
    
    if (studentMark > 79 && studentMark <= 100) {
        studentGrade = 'A';
    }
    else if (studentMark >= 60 && studentMark <= 79) {
        studentGrade = 'B';
    }
    else if (studentMark >= 50 && studentMark <= 59) {
        studentGrade = 'C';
    }
    else if (studentMark >= 40 && studentMark <= 49) {
        studentGrade = 'B';
    }
    else {
        studentGrade = 'E';
    }
    console.log(`the grade for ${studentMark} marks is: ${studentGrade}`);
} // if..else if...else used to return the correct grade