//Purpose: A function that will give us athe highest number in a pair.
//Signature: Input 2 intergers and give us the highest interger.
//Examples: (5,2) -> 5
//          (6,4) -> 6
//          (9,3) -> 9

function greaterNum (num1, num2) {
  if (num1 > num2) {
    alert (num1)
  }
  else {
    alert (num2)
  }
}
//Purpose: Change "Hello, World" to 3 different languages.
//Signature Input "Hello, World" and return 3 different languages.
//Examples ("es"), -> ("Hola")
//         ("cn"), -> ("Nei Ho")
//         ("fr"), -> ("Bonjour")
//         ("en"), -> ("Hello, World")

var es = ("Hola")
var cn = ("Nei Ho")
var fr = ("Bonjour")
var en = ("Hello, World")

function helloWorld(lang){
  if (lang === es) {
    alert ("Hola");
  }
  if (lang === cn) {
    alert ("Nei Ho");
  }
  if (lang === fr) {
    alert ("Bonjour");
  }
  if (lang === en) {
    alert ("Hello, World");
  }
}

//Purpose: assigns a letter grade to a number
//Signature: takes a number grade, returns a letter grade
//Examples: (90) --> A
//          (87) --> B
//          (75) --> C

function assignGrade (num){
  if (num >= 90){
    alert("A");
  }
  else if (num >= 80 && num < 90){
    alert("B");
  }
  else if (num >= 70 && num < 80){
    alert("C")
  }
  else if (num >= 60 && num < 70){
    alert("D")
  }
  else if (num < 60){
    alert("F")
  }
}


//Purpose: Write a function that pluralizes a noun and a number.
//Signature: Takes a noun and a number and returns the pluralized.
//Examples (5, "Cat") --> 5 Cats
//         (3, "Bird") --> 3 Birds
//         (6, Lion) ---> 6 Lions
//         (2, Sheep) ---> 2 Sheep

function pluralize(num, noun) {
  if (num > 1 && noun !== "sheep" && noun !== "geese"){
    alert(num + " " + noun + "s");
  }
  else{
    alert(num + " " + noun);
  }
}

//Purpose: Write a function that will reiterate from 0 to 15
//Signature:a number to check it ifs odd or even adn display a message on the screen
//Examples:

var count = 0
  while (count <= 15) {

  if (count % 2 === 0){
    alert(count + " An even Number!")
  }
  else {
    alert(count + " An odd Number!")
  }
    count = count + 1;
}

function fizzBuzz() {
  var count = 0;
  while (count <= 100) {
    count = count + 1;
    if (count % 15 === 0) {
      console.log("fizzbuzz")
    }
    else if (count % 3 === 0 ) {
      console.log(count + "fizz")
    }
    else if (count % 5 === 0 ) {
      console.log(count + "buzz")
    }
    else {
      console.log(count)
    }
  }
}
