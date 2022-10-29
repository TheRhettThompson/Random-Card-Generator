/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  const numbers = ["A", "2", "3", "4", "5", "6"];
  //create array for suits same as with numbers

  let newNumber = document.querySelector(".number");
  //create new variable for top-suit
  //create new variable for bottom-suit

  function randomCard(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function card() {
    let number = numbers[randomCard(numbers)];
    //create variable that uses the random function to get a new suit (similar to line 15)

    newNumber.innerHTML = number;
    //assign the new suit to the top and bottom variables using innerHTML (lines 12 and 13)
  }

  //create if statement to control the color of the top and bottom variables (lines 12 and 13) == ||

  card();
};
