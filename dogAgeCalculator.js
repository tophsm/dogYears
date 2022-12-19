//prompts user for their age
let age = prompt('What is your age? ' );

//computes first two years
let firstTwo = 2;
firstTwo *= 10.5;

//computes later years
let laterYears = (age - 2) * 4;

//computes total age
let dogAge = firstTwo + laterYears;

//prompts user for name
let name = prompt('What is your name? ');

console.log(`My name is ${name}. I am ${age} years old, which is ${dogAge} years old in dog years!`);
