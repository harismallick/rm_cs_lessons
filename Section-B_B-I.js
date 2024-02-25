// Switch Case implementation of answer:
var s = prompt("Enter your statement here:");

var vowelCount = 0;
var spaceCount = 0;

for (var i = 0; i < s.length; i++) {
    var char = s.charAt(i).toLowerCase();

    switch(char) {
        case "a":
            vowelCount += 1;
            break
        case "e":
            vowelCount += 1;
            break    
        case "i":
            vowelCount += 1;
            break
        case "o":
            vowelCount += 1;
            break   
        case "u":
            vowelCount += 1;
            break   
        case " ":
            spaceCount += 1;
            break   
    }
}
if (spaceCount >= 4) {
    document.write("Number of spaces in the sentence: " + spaceCount + "<br>");
    document.write("Number of vowels in the sentence: " + vowelCount + "<br>");
} else {
    document.write("Not enough words in the string.");
}

// If-Else implementation of answer:
// var s = prompt("Enter a sentence");
// var l = s.length;
// var vowelCount = 0;  
// var spaceCount = 0;  
// var otherCharacters = 0; 

// for (var i = 0; i < l; i++) {
//     var char = s.charAt(i).toLowerCase();
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         vowelCount++;
//     } else if (char === " ") {
//         spaceCount++;
//     } else {
//         otherCharacters++;
//     }
// }
// if (spaceCount >= 4) {
//     document.write("Number of Vowels = " + vowelCount + "<br>");
//     document.write("Number of Spaces = " + spaceCount + "<br>");
// } else {
//     document.write("The given sentence needs to have 5 words or more.");
// }
// My name is Rayyan Mallick
/*
Output for this case:
Number of vowels = 7
Number of spaces = 4
*/
// I am called Rayyan Mallick
/*
Number of vowels = 8
Number of spaces = 4
*/
