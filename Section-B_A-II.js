// Section B - Qustion A-II

// First implementation: using nested for loops:

// var s = prompt("Enter a Word").toUpperCase();

// if(s.length >= 3) {
//     for(var i=1; i<=s.length; i++) {
//         var temp_string = s.substring(0,i);
//         for(var j=0; j < temp_string.length; j++) {
//             document.write(temp_string[j] + " ");
//         }
//         document.write("<br>");
//     }
// }

// else {
//     document.write("Minimum length of the input word must be 3 characters.");
// }

// Second implementation: Using string methods join() and split()

var s = prompt("Enter a Word").toUpperCase();

if(s.length >= 3) {
    for (var i=1; i <= s.length; i++) {
        var tempString = s.substring(0, i);
        var tempStringSplit = tempString.split("");
        var output = tempStringSplit.join(" ");
        document.write(output + "<br>");
    }
}
else {
    document.write("Minimum length of the input word must be 3 characters.");
}

// var num = 5.0;
// num = num + 0.1;
// console.log(num);
// integer and float datatypes in programming languages are mutable. This means they can be chaged.

var test_string = "modern";
// test_string[3] = "t";
// console.log(test_string);
// Javascript did not change the letter in the string. This is because strings are "immutable" data types.
// var test_string = test_string.slice(0, test_string.length-1);
// console.log(test_string);
// var stringWithSpaces = "";
// for (i=0; i < test_string.length; i++) {
//     stringWithSpaces = stringWithSpaces + test_string[i] + " ";
// }
// console.log(stringWithSpaces);
// var spacesRemoved = stringWithSpaces.trim().split(" ");
// console.log(spacesRemoved.join(""));
var splitString = test_string.split("");
var newString = splitString.join(" ");
console.log(test_string);
console.log(splitString);
console.log(newString);
