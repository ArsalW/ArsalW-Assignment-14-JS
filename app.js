// 1.
// var city = prompt("Enter your city name:");
// if (city === "Karachi") {
//     alert("Welcome to the city of lights");
// }


// 2.
// var gender = prompt("Enter your gender (male/female):");
// if (gender === "male") {
//     alert("Good Morning Sir");
// } else if (gender === "female") {
//     alert("Good Morning Ma'am");
// }


// 3.
// var signalColor = prompt("Enter the color of the road traffic signal:");
// if (signalColor === "red") {
//     alert("Must Stop");
// } else if (signalColor=== "yellow") {
//     alert("Ready to move");
// } else if (signalColor === "green") {
//     alert("Move now");
// }

// 4.
// var fuel = +prompt("Enter remaining fuel in car (in litres):");
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }


// 5.
// a
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// // b
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// // c
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// // e
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// // f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// 6.
// var subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
// var subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
// var subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
// var totalMarks = parseFloat(prompt("Enter total marks:"));

// var obtainedMarks = subject1 + subject2 + subject3;
// var percentage = (obtainedMarks / totalMarks) * 100;
// var grade = '';
// var remarks = '';

// if (percentage >= 80) {
//     grade = 'A-one';
//     remarks = 'Excellent';
// } else if (percentage >= 70) {
//     grade = 'A';
//     remarks = 'Good';
// } else if (percentage >= 60) {
//     grade = 'B';
//     remarks = 'You need to improve';
// } else {
//     grade = 'Fail';
//     remarks = 'Sorry';
// }
// alert("Total Marks: " + totalMarks + "\nMarks Obtained: " + obtainedMarks + "\nPercentage: " + percentage.toFixed(2) + "%\nGrade: " + grade + "\nRemarks: " + remarks);


// 7.
var secretNumber = 7; // Choose any number between 1 and 10
var guess = parseInt(prompt("Guess the secret number (1 to 10):"));

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess === secretNumber - 1 || guess === secretNumber + 1) {
    alert("Close enough to the correct answer");
}

// 8.
// var number = parseInt(prompt("Enter a number:"));
// if (number % 3 === 0) {
//     alert("The number is divisible by 3");
// } else {
//     alert("The number is not divisible by 3");
// }


// 9.
// var number = parseInt(prompt("Enter a number:"));
// if (number % 2 === 0) {
//     alert("The number is even");
// } else {
//     alert("The number is odd");
// }


// 10.
// var temperature = parseFloat(prompt("Enter the temperature:"));

// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// }


// 11.
var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else if (operation === "%") {
    result = num1 % num2;
}

alert("The result is: " + result);



