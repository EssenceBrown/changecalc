// Write your JavaScript here
//input: given two numbers representing the amount of a sale and the amount paid by customer
//declare variables to represent amount due and amount received
//declare variable (change) to represent (the amount tendered - the amount of sale)
//declare variables for different currency types
//ensure our given values are in the proper format, with 2 decimal places
//take change variable and divide by 20 to find number of 20dollar bills
//return$20bill quotient in one variable and redeclare change == remainder
//repeat lines 7&&8 for each change type in descending order(1, .25, .10, .05, .01)
//animate images and answer
//animate increase in values
//output: return 5 numbers representing amount of change due in dollars(20, 10, 5, 2, 1), quarters, dimes, nickels, and pennies

function handleClickEvent(e) {


var amountDue = document.getElementById("amount-due").value;
var amountReceived = document.getElementById("amount-received").value;
var change  = amountReceived - amountDue;

dollars = Math.floor (change);
change -= dollars;
//console.log("change", change);
document.getElementById("dollars-output").innerHTML = dollars;


    var quarter = Math.floor(change/0.25);
    change = (change % 0.25).toFixed(2);
    //change -= (quarter*0.25).toFixed(2);
    document.getElementById("quarters-output").innerHTML = quarter;

    var dimes = Math.floor(change/0.10);
    change = (change % 0.10).toFixed(2);
    //change -= (dimes*0.10).toFixed(2);
    document.getElementById("dimes-output").innerHTML = dimes;

    var nickels = Math.floor(change/0.05);
    change = (change % 0.05).toFixed(2);
    //change -= (nickels*0.05).toFixed(2);
    document.getElementById("nickels-output").innerHTML = nickels;

    var pennies = Math.floor(change/0.01);
    change = (change % 0.01).toFixed(2);
    //change -= (pennies*0.01).toFixed(2);
    document.getElementById("pennies-output").innerHTML = pennies;


    
document.getElementById("change-msg").innerHTML=`your change is $${amountReceived - amountDue}`;
}


