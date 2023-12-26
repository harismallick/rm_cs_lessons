// Section B question A-I

var n = prompt("Pick a number.");
var integer = parseInt(n); // Converts string to an integer

// This is an example of an AND logic gate:
if (integer >= 10 && integer <= 20) {
        // alert("Number is within the desired range.");
        for (var multiplier = 1; multiplier <= 6; multiplier++) {
            var result = integer * multiplier;
            // document.write(result + " ");
            document.write(integer + " x " + multiplier + " = " + result);
            document.write("<br><br>");
            // console.log(result);
        }
} else {
    alert("Number is outside of range. Please select a number between 10 and 20.");
    location.reload();
}

// if (integer >= 10) {
//     if (integer <= 20) {
//         alert("Number is within the desired range.");
//     } else {
//         alert("NUmber is greater than 20.");
//     }
// } else {
//     alert("Number is less than 10.");
// }

// // This is an example of an OR logic gate:
// if (integer >= 10 || integer <= 20) {
//     console.log("One of the conditions is met.");
// } else {
// console.log("Number is outside of range. Please select a number between 10 and 20.");
// // location.reload();
// }

// Homework //
// Check is the number entered by user is between 100 and 120. If the number is within this range, use alert() or console.log() to output the user-entered number multiplied by 5. Use appriopriate else statement to warn user if incorrect number entered.

// for loops

// n = 12
// provide first 6 multiples of the number input by the user.

// var givenNumber = 12;
// // var maxMultiple = 6;

// for (var multiplier = 1; multiplier <= 6; multiplier++) {
//     var result = givenNumber * multiplier;
//     console.log(result);
// }

// for (var multiplier = maxMultiple; multiplier > 0; multiplier--) {
//     result = multiplier * givenNumber;
//     console.log(result);
// }

// 