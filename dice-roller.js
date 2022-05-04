//get value from the command line
//generate a random number between 1 and 6
//repeat as many times as value entered
//send those values to an array
//join array
//print output

const args = process.argv.slice(2);
let numOfDice = parseInt(args); //number of dice rolled
let rolled = []; //array of rolled numbers
let counter = 0; //loop counter

while (counter < numOfDice) {
  rolled.push(parseInt(Math.random() * 5) + 1) //generate rolled number and add to rolled array
  counter++; 
}

let rolledString = rolled.join(', ');

console.log(`Rolled ${numOfDice} dice: ${rolledString}`);
