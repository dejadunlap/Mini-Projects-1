/**
 * it calculates how many minutes and hours has past since midnight based on the seconds that have passed since midnight
 * Precondition: choice == 1
 * Postcondition: hours, minutes
 */
function secondsPastMidnight(){
  var seconds = prompt("How many seconds has it been past midnight?");
  
  var hours = parseInt(seconds) / 3600;
  var minutes = parseInt(seconds) / 60; 

  console.log("It has been " + hours + " hours, and " + minutes + " minutes since midnight.");
  if (hours > 1 && hours < 7){
    console.log("You should be asleep");
  } else if (hours > 7 && hours < 21) {
    console.log("Oh, I hope you are having a good day!");
  } else if (hours > 21 && hours <= 24) {
    console.log("I hope you had a good day! You should be going to bed soon");
  }
}

/**
 * it calculates how many minutes and hours has past since midnight based on the degrees it moved since 12
 * Precondition: choice == 2
 * Postcondition: hours, remaindder, minutes, degree
 */
function analogClock(){
  var degree = prompt("How many degrees has the hour hand moved since 12?");

  var hour = Math.round(parseInt(degree) / 30);
  var remainder = Math.round(parseInt(degree) % 30);

  var minutes = ((remainder/30) * 60) * 6;

  console.log("It has been " + hour + " and " + minutes + " since 12");
}

/**
 * it calculates how desks a school will need based on the number of students it has
 * Precondition: choice == 3
 * Postcondition: isEven, totalStudents, totalDesk
 */
function studentDesk(){
  var studentA = prompt("How many students are in class A");
  var studentB = prompt("How many students are in class B");
  var studentC = prompt("How many students are in class C");

  var isEven = totalStudents % 2;
  var totalStudents = classA + classB + classC; 

  if (isEven == 1){
    totalDesk = (totalStudents / 2) + 1;
  } else {
    totalDesk = totalStudents / 2;
  }

  console.log("You need at least " + totalDesk);
}

/**
 * works through the program until the user decides to leave and gives the user the choice between three programs to run through
 * Precondition: none
 * Postcondition: none
 */
var continuePlaying = prompt("Would you like to continue? (Y/N)");
while (continuePlaying == "Y"){
  var choice = prompt("Which one would you like to choose? \n 1. Seconds Past Midngiht \n 2. Analog Clock \n 3. Student Desk");
  if (choice == 1){
    secondsPastMidnight();
  } else if (choice == 2){
    analogClock();
  } else if (choice == 3){
    studentDesk();
  } else {
    console.log("You need to put in a valid choice.")
  }

  continuePlaying = prompt("Would you like to continue playing? (Y/N)");
}

console.log("Ok, goodbye!");