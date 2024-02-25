var anotherName = "Haris";
console.log("My cousin's name is: " + anotherName);

// length method returns the number of characters in a string:
console.log("The number of letters: " + anotherName.length) 

// slice() takes to index values and returns all the characters in between them. The start index is inclusive, the end index is exclusive.
var slicedName = anotherName.slice(1, 4);
console.log("Get the middle 3 letters: " + slicedName);

// toUpperCase() method converts all the letters in a string to upper case.
var upperCaseName = anotherName.toUpperCase();
console.log("My name in Upper case: " + upperCaseName);

// toLowerCase() method converts all the letters in a string to lower case.
var lowerCaseName = anotherName.toLowerCase();
console.log("My name in lower case: " + lowerCaseName);

// concat() method joins two or more strings together
var text1 = "Hello";
var text2 = "world";
var text3 = text1.concat(",", text2);
var text4 = text1.concat(" ", text2);
var text5 = text1.concat("     ", text2);
var text6 = text1.concat("", text2);
console.log(text3);
console.log(text4);
console.log(text5);
console.log(text6);

// replace() method replaces a specified value with another value in a string. The first argument is the word to be replaced. The second argument is the new word/sentence.:

var sentence = "This is my first coding lesson.";
var replaceWord = "Rayyan's";
var newSentence = sentence.replace("my", replaceWord);
console.log("Sentence with word replaced:\n" + newSentence);
// alert("Sentence with word replaced:\n" + newSentence);

// replaceAll() method is similar to replace. But it replaces all occurrences of the letter/word we are trying to replace.

var sentence2 = "I have a pet cat. The cat has grey fur. The cat loves fish.";
var replacePet = "dog";
var newSentence2 = sentence2.replaceAll("cat", "dog");
console.log("Sentence with words replaced:\n" + newSentence2);

var replaceWord = "dog";
var newSentence3 = sentence2.replace(/cat/g, replaceWord);
console.log("New sentence after using global replace() funciton:\n" + newSentence3);

var sentence4 = "I have a pet cat. The CAT has grey fur. The cAt loves fish.";
var newSentence5 = sentence4.replace(/cat/gi, replaceWord);
console.log("New sentence after using \'gi\' replace() funciton:\n" + newSentence5);



// trim() method removes whitespace from both sides of a string.
// trimStart() method removes whitespace from the start of a string only.
// trimEnd() method removes whitespace from the end of a string only.

var wsSentence = "    Hello World    ";
console.log("This is what trim() does:\n" + wsSentence.trim() + "!");
console.log("This is what trimStart() does:\n" + wsSentence.trimStart() + "!");
console.log("This is what trimEnd() does:\n" + wsSentence.trimEnd() + "!");

// charAt() method returns the character at a specified index (position) in a string.

var charText = "Rayyan Mallick";
var index = 5;
var findChar = charText.charAt(index);
console.log("The letter at index position " + index + " is: " + findChar);

// substring() method in javascript

var bigString = "Apple, Banana, Kiwi";
var substring = bigString.substring(7, 13);
var substring2 = bigString.substring(-12, -6);
// This example shows us that substring() does not work with negative numbers for the index values.

var slice = bigString.slice(7, 13);
var slice2 = bigString.slice(-12, -6);
// This example shows us that slice() does work with negative numbers for the index values.


console.log("The substring fruit is: " + substring);
console.log("The substring fruit is: " + substring2);

console.log("The sliced fruit is: " + slice);
console.log("The sliced fruit is: " + slice2);



