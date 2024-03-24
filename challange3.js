// challange 3 - net salary calc
function netSal() {
    let basicSal = parseFloat(document.getElementById('basicSal').value);
    let benefits = parseFloat(document.getElementById('banefits').value);
    // allows user to input both basic salary and benefits
    //  parseFloat converts a string to a floating-point number

    let tax = (basicSal + benefits) * .15; // tax rate is 15%
    let NHIFDeductions = (basicSal + benefits) * .0275; // nhif rate is 2.75%
    let NSSFDeductions = (basicSal + benefits) * .06; // nssf rate is 6%
    let grossSal = basicSal + benefits;
    let netSal = grossSal - (tax + NHIFDeductions +  NSSFDeductions);
// tax, nhif, nssf, grosssal, netsal calculated
    console.log(`net salary: ${netSal}`);
}