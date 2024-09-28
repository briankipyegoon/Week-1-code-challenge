//checks vehicles speed, calculating if it has passed the limit then assigns demerit points 
function speedDetector (speed){
const speedlimit = 70
const demeritpoint = 5

if (speed < speedlimit) {
    alert ("OK");

}else {
    const excessspeed = speed - speedlimit;
    const demerit = Math.floor(excessspeed + demeritpoint);
    alert (`Total demerit points; ${demerit}`);

}
}

//prompts the user for the speed, calculates and vslidates it 
function main(){
    const input = prompt( "Enter car speed (km/h)");
    const speed = parseFloat (input);
    
    if (!isNaN(speed) && speed >=0) {
        speedDetector(speed);

    }else {
        alert( "input valid speed");
    }
}

main();