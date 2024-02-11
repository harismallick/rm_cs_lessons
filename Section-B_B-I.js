// var string = prompt("Enter your statement here:");

// var vowelCount = 0;
// var spaceCount = 0;

// for (var i = 0; i < string.length; i++) {
//     switch(string[i]) {
//         case string[i] == "a":
//             vowelCount += 1;
//             break
//         case string[i] == "e":
//             vowelCount += 1;
//             break    
//         case string[i] == "i":
//             vowelCount += 1;
//             break
//         case string[i] == "o":
//             vowelCount += 1;
//             break   
//         case string[i] == "u":
//             vowelCount += 1;
//             break   
//         case string[i] == " ":
//             spaceCount += 1;
//             break   
//     }
// }
// if (spaceCount >= 4) {
//     document.write(spaceCount, vowelCount);
// } else {
//     document.write("Not enough words in the string.");
// }


var s = prompt("Enter a sentence");
var l = s.length;
var vowelCount = 0;  
var spaceCount = 0;  
var otherCharacters = 0; 

for (var i = 0; i < l; i++) {
    var char = s.charAt(i);
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        vowelCount++;
    } else if (char === " ") {
        spaceCount++;
    } else {
        otherCharacters++;
    }
}
if (spaceCount >= 4) {
    document.write("Number of Vowels = " + vowelCount + "<br>");
    document.write("Number of Spaces = " + spaceCount + "<br>");
} else {
    document.write("The given sentence needs to have 5 words or more.");
}
// My name is Rayyan Mallick

