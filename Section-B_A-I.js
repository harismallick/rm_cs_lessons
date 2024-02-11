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