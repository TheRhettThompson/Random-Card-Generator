/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q"
  ];
  //create array for suits same as with numbers
  const suits = ["♠", "♣", "♥", "♦"];

  let newNumber = document.querySelector(".number");
  //create new variable for top-suit
  let topSuit = document.querySelector(".top-suit");
  //create new variable for bottom-suit
  let bottomSuit = document.querySelector(".bottom-suit");

  function randomCard(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function iconCard(suits) {
    return Math.floor(Math.random() * suits.length);
  }

  function card() {
    let number = numbers[randomCard(numbers)];
    let icons = suits[iconCard(suits)];

    if (icons == suits[2] || icons == suits[3]) {
      document.getElementsByClassName("top-suit")[0].style.color = "red";
      document.getElementsByClassName("bottom-suit")[0].style.color = "red";
    } //create variable that uses the random function to get a new suit (similar to line 15)

    newNumber.innerHTML = number;
    topSuit.innerHTML = icons;
    bottomSuit.innerHTML = icons;

    //assign the new suit to the top and bottom variables using innerHTML (lines 12 and 13)
  }

  //create if statement to control the color of the top and bottom variables (lines 12 and 13) == ||

  card();
};
