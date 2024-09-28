//calculate gross salary by adding benefits and basic salary
//calculates PAYE and defines nhif and nssf deductions
//calculates the total deductions and the net salary

function netsalarycalculator( basicsalary, benefits){
    //constants for deduction and tax rates
    const NHIFdeductions= 850;
    const NSSFdeductionsrate = 0.06;
    const NSSFdeductions = basicsalary * NSSFdeductionsrate;

    //calculate gross pay
    const grosspay = basicsalary + benefits;

    //calculate PAYE
    let PAYE = 0;
    if (grosspay <= 30000){
        PAYE = grosspay * 0.25;

    }else if (grosspay<= 40000){
        PAYE = 7500 + (grosspay - 30000)* 0.30;

    }else{
        PAYE = 7500 + 10500 + (grosspay - 40000) * 0.325;

    }

    //calculate total deductions
    const totalDeductions = PAYE + NHIFdeductions + NSSFdeductions;

    // calculate net salary
    const netSalary = grosspay - totalDeductions;
    

return {
    grosspay,
    PAYE,
    NHIFdeductions,
    NSSFdeductions,
    netSalary
};

}


// prompts user for basic salary and benefits and validates the input
// calls the function calculatenetsalary and displays the result by use of alert.
function main() {
    const basicsalaryInput = prompt( "Enter your Basic salary");
    const benefitsInput = prompt ( "Enter your benefits:");
    
    const basicsalary = parseFloat(basicsalaryInput);
    const benefits = parseFloat(benefitsInput);

    if(!isNaN(basicsalary) && basicsalary >= 0 && !isNaN(benefits) && benefits >=0){
        const salaryDetails = netsalarycalculator(basicsalary, benefits);
        alert (`Gross Pay: Kshs. ${salaryDetails.grosspay.toFixed(2)}\n` +
    `PAYE(Tax): Kshs. ${salaryDetails.PAYE.toFixed(2)}\n` +
    `NHIF Deduction : Kshs. ${salaryDetails.NHIFdeductions.toFixed(2)}\n` +
    `NSSF Deduction : Kshs. ${salaryDetails.NSSFdeductions.toFixed(2)}\n` +
    `Net Salary: Kshs. ${salaryDetails.netSalary.toFixed(2)}`);
    }else{
    alert( "Please enter a valid numeric value for Basic salary and benefits");
    }



}
main();