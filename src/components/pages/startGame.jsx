import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Wrapper from "../Wrapper";
import generateWords from "../../utils/generateWords.js";
// var wordList = [];
import "../../../css/styles.css";
const allowTimePerQuestion = 1.2;
const lifes = 5;

function start(wordToType) {
  // Define total seconds for the game
  let secondsLeft = wordToType.length * allowTimePerQuestion;
  let timerObj = document.getElementById("#time");

  var timerInterval = setInterval(function () {
    // Print time left for the game
    timerObj.textContent = secondsLeft + " seconds left";
    // Define criteria for loading next question(Current question timeout, total time runs out, question being answered)

    secondsLeft--;
    currentQuestionTimeLeft--;
  }, 1000);
}

// Define the home profile showing basic information and education background
function startGame() {
  let wordList = [];
  // const menuItem = document.getElementById('mainMenu');
  const menuItem = document.getElementById("menuItem");
  if (menuItem != null) {
    menuItem.setAttribute("Class", "hide");
  }
  const titleItem = document.getElementById("headTitle");
  if (titleItem != null) {
    titleItem.setAttribute("Class", "hide");
  }
  const desc1Item = document.getElementById("desc1");
  if (desc1Item != null) {
    desc1Item.setAttribute("Class", "hide");
  }
  const desc2Item = document.getElementById("desc2");
  if (desc2Item != null) {
    desc2Item.setAttribute("Class", "hide");
  }

  generateWords(499, 12);
  // .then((res)=> {
  //   //the promise is resolved here
  //   console.log(".then logic ", res);
  // }).catch(console.error.bind(console))

  wordList = JSON.parse(localStorage.getItem("WordList"));
  // console.log("Using localstorage ", wordList);

  // remove the first character of each array
  for (let i = 1; i < wordList.length; i++) {
    wordList[i] = wordList[i].substring(1);
    // console.log(wordList[i]);
  }

  // function to display the array, starting with [1]
  const [wordIndex, setWordIndex] = useState(1);
  const [userInput, setUserInput] = useState("");

  function displayString() {
    return (
      <div id="questions" className="show">
        <h2 id="question-title">{wordList[wordIndex]}</h2>
        <div id="choices" className="choices"></div>
      </div>
    );
  }

  // if user input matches entire string, display next array

  function matchUserInput() {
    let userInput = document.getElementById("user-input").value;
    if (userInput === wordList[wordIndex]) {
      setWordIndex(wordIndex + 1);
      console.log("match");
      userInput.value = "";
    }
  }

  return (
    <div className="profile" id="profile">
      <div className="scores">
        <a href="#">View Highscores</a>
      </div>
      <div className="timer">
        Time: <span id="time">0</span>
      </div>
      {displayString()}
      <div>
        <p>
          Enter text:{" "}
          <input
            type="text"
            id="user-input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </p>
      </div>
    </div>
  );
}

export default startGame;
