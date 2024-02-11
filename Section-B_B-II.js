// Section B - Question B-II

var firstString = prompt("Please enter your word:");

var promptOutput = prompt("What would you like to do to this string? Options:\nuppercase\nlowercase\nconcat strings\nget substring");

if (promptOutput === "uppercase") {
    document.write(firstString.toUpperCase());
} else if (promptOutput === "lowercase") {
    document.write(firstString.toLowerCase());
} else if (promptOutput === "concat strings") {
    var secondString = prompt("Enter word to concatenate:");
    var newString = firstString.concat(" ", secondString);
    document.write(newString);
} else if (promptOutput === "get substring") {
    var startIndex = prompt("Please enter start value for substring.");
    var endIndex = prompt("Please enter end value of substring.");
    if (parseInt(endIndex) > firstString.length) {
        document.write("Given end index larger than the string.");
    } else {
        document.write("The substring is: "+ firstString.substring(parseInt(startIndex), parseInt(endIndex)));
    }
} else {
    document.write("Invalid string manipulation given. Please match your string to the given options.");
}