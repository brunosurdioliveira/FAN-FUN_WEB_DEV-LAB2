/*
    Name: Bruno Surdi Oliveira
    Date: Jan 2020
    Purpose: Lab 2 - IWD Airlines
*/

// Greetings 
var greeting = "Welcome to The IWD Airline!";
alert(greeting);

//Prompt the user information
var waitlistNumber = parseInt(prompt("Enter the number os passengers on waitlist: ", 343));
var numberOfSeats = parseInt(prompt("Enter the number of seats on each flight: ", 117));
var slogan = prompt("Enter de Slogan of the airline: ", "Unlocking Potential");

// calculate the number of flights required and rounding 
var flights = Math.round(waitlistNumber / numberOfSeats);

// Seats available 
var seatsAvailable = (flights * numberOfSeats);

// Output number of passengers on waitlist, number of available seats and number of flights required
document.write("Number of passengers on the waiting list = " + waitlistNumber + "<br>Number of available seats = " + seatsAvailable + "<br>Number of flights = " + flights + "<br>");

// condition 
if (waitlistNumber > seatsAvailable) {
    var waitlistRemain = (waitlistNumber - seatsAvailable);
    var message = ("<br>" + seatsAvailable + " passengers will fly. <br>" + waitlistRemain + " passengers will remain on the waiting list for the next available flight.<br>");
    document.write(message);
}
else {
    var messageTwo = ("<br>All " + waitlistNumber + " passengers will fly today!<br>");
    document.write(messageTwo);
}

// Output the acknowledgment with slogan
document.write("<br>Thank you for flying with IWD Airlines: " + slogan);