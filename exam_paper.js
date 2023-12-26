var a;
var b = 4;
for (a=6; a <=4; a+=6) {
    if (a%b == 0) {
        document.write(b);
        document.write("<br>");
    }
}
document.write(a);

var p = "Where their is a 1234will their is a way.";
// their replace with there
// var n = p.replace(/their/g, "there");
// console.log(n);
// // var test = p.replace(/[\D]+/g, "00000");
// // console.log(test);
let string = "Time and tide";
// var b = a.substring(2, 7);
// console.log(a.length);
// console.log(a.substring(10,13));

for (let i=0; i < string.length; i++) {
    console.log(i, string[i]);
}

// question 4-b

var m = "When at modern";
// alert("The length of the string is " + m.length);
// alert("The character at the third position is e");

var input = prompt("Enter a number");
var integer = parseInt(input);
for (let i = 1; i <= integer; i++) {
    document.write(i + "<br>");
}