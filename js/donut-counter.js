//JS Donut Counter Lab
var guests;
var donuts;
//declare 2 variables one for guests and one for donuts
var guests = prompt("Insert the number of guests");
var donuts = prompt("Insert the number of donuts");
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
guests = parseInt(guests)
donuts = parseInt(donuts)
//use parseInt to convert the users answer from a string to an integer.


if(guests > donuts){
  alert("You have " + guests + " guests and " + donuts + ". You do not have enough")
} else {
  alert("You have enough donuts " + donuts + ", for your " + guests + " guests.")
}
//write a conditional to check if there are enough donuts

  //alert the user a message telling them the numbers of donuts and guests and if there are enough or not.