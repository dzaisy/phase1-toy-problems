// challange 3 - net salary calc
function netSal() {
    let basicSal = parseFloat(document.getElementById('basicSal').value);
    let benefits = parseFloat(document.getElementById('banefits').value);
    // allows user to input both basic salary and benefits
    //  parseFloat converts a string to a floating-point number

    let tax = Math.round((basicSal + benefits) * .15);
    let NHIFDeductions = Math.round((basicSal + benefits) * .0275);
    let NSSFDeductions = Math.round((basicSal + benefits) * .06);
    let grossSal = Math.round((basicSal + benefits));
    let netSal = grossSal - tax - NHIFDeductions -  NSSFDeductions;
// tax, nhif, nssf, grosssal, netsal calculated
// Math.round used to round numbers to whole numbers
    document.getElementById('netSal').textContent = `net salary is: ${netSal}`; // .textContent returns the netsal
}