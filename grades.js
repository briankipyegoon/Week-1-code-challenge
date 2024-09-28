//checking if th
function studentgrading(Marks) {
    if (Marks> 79 && Marks <=100) {
        return 'A';

    }else if (Marks >= 60 && Marks <=79) {
        return 'B';

    }else if (Marks >= 49 && Marks <= 59) {
        return 'C';

    }else if (Marks>= 40 && Marks <= 48) {
        return 'D';

    }else if (Marks < 40) {
        return 'E'

    }else {
        return null
    }

    }
//prompts the user to Input and validates whether it is between 0-100 and calls studentGrading to establish the grade 
// use prompt for Input and alert for Output
//parse (converts Input to number)
function main () {
    const input = prompt ("Enter your Marks");

    const Marks = parseFloat(input);

    if (!isNaN(Marks) && Marks >=0 && Marks <=100) {
        const grade = studentgrading(Marks);
        alert (`The grade is ${grade}`)

    } else {
        alert ("Enter a value between 0 and 100")
    }
}
// call out the main function to run the program
main(); 
