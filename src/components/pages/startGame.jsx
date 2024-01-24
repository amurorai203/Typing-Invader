import React, { useState, useEffect } from 'react';
// import generateWords from '../../utils/generateWords.js';
import API from '../../utils/wordsPickingAPI';
import Container from '../Container';
// var wordList = [];
const allowTimePerQuestion = 0.7;
const lifes = 5;
let wordList = [];
let currentInputCount = 0;
let secondsLeft = 0;
let completeWord = false;


function startTimer(wordToType) {
  // Define total seconds for the game
  
  secondsLeft = Math.floor(wordToType.length * allowTimePerQuestion);
  let timerObj = document.getElementById("time");
  timerObj.textContent = secondsLeft + " seconds left";

  let timerInterval = setInterval(function () {
    // Print time left for the game
    timerObj.textContent = secondsLeft + " seconds left";
    // Define criteria for loading next question(Current question timeout, total time runs out, question being answered)

    if (secondsLeft > 0)
      secondsLeft--;

      if (completeWord){
        clearInterval(timerInterval);
      }

    if (secondsLeft <= 0 && !completeWord){
      clearInterval(timerInterval);
      timerObj.textContent = "0 seconds left";
      endGame();
    } 
  }, 1000);
}

function inputCorrect(){
  // Print correct sound
  var audio = new Audio("../../../sfx/correct.wav");
  audio.play();
  // Set value and display result
}

function inputIncorrect(){
  // Print incorrect sound
  var audio = new Audio("../../../sfx/incorrect.wav");
  audio.play();
}

function endGame(){
// Write score
// Please sound
// Stop input
console.log("In EndGame");
  inputIncorrect();
  inputIncorrect();
  inputIncorrect();
  const scoreText = "Your score is: " + currentInputCount;
  document.getElementById("question-title").textContent = scoreText;

}

// Define the home profile showing basic information and education background
function startGame() {
  const [search, setSearch] = useState('Wikipedia');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

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


  // function to display the array, starting with [1]
  const [wordIndex, setWordIndex] = useState(1);
  const [userInput, setUserInput] = useState("");


  // TODO: Fix the useEffect hook running after every state change.
  useEffect(() => {
    // console.log("In useEffect", search, "|", !search);
    if (!search) {
      return;
    }

    // API.searchTerms(search)
    var query = "words=499" ;
    API.search(query)
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error('No results found.');
        }
        if (res.data.status === 'error') {
          throw new Error(res.data.message);
        }
        // TODO: Use the response data to set the title and url.
        // 2 res is the return data

        let currentRow = 0;
        let resultReturn = [];
        let randomMax = 12;
      
        // console.log(res.data);
        for (let i=1;i<res.data.length;i++){
            let currentMax = Math.floor(Math.random() * randomMax) + 1
            for (let j=0;j<currentMax;j++){
                if (currentMax < res.data.length){
                    if (res.data[i] != null){
                        if (j > 0){
                            resultReturn[currentRow] = resultReturn[currentRow] + " " + res.data[i];
                        } else{
                            resultReturn[currentRow] = res.data[i];
                        }
                    }
                    i++;
                }
            }   
            currentRow++;                   
        }

        // setTitle(resultReturn[0]);
        setTitle(resultReturn[0]);
        wordList = resultReturn;
        localStorage.setItem("WordList", JSON.stringify(resultReturn) );
      })
      .catch((err) => setError(err));
      // 1 after every state change
  }, [search]);

  // TODO: Fix the handleInputChange function to display the Wikipedia URL
  const handleInputChange = (inputvalue) => {
    if (inputvalue.length == 1){
      let currentWord = document.getElementById("question-title").textContent;
      startTimer(currentWord);
    }

    if (wordList[wordIndex].substring(0, inputvalue.length) === inputvalue){
     currentInputCount++;
     completeWord = false;
      // console.log("Typed: ", inputvalue, " No. of KeyStroke: " + currentInputCount );
      setUserInput(inputvalue);
      if (inputvalue == wordList[wordIndex]){
        inputCorrect();
        completeWord = true;
        secondsLeft = 0;
        setWordIndex(wordIndex + 1);
        setUserInput("");
        // console.log(wordList[wordIndex + 1], " ", wordList[wordIndex + 1].length);
        // secondsLeft = Math.floor(wordList[wordIndex + 1].length * allowTimePerQuestion);
      } 
    } else {
      inputIncorrect();
    }
  };


  function displayString() {
    return (
      <div id="questions" className="show">
        <h2 id="question-title">{wordList[wordIndex]}</h2>
        <div id="choices" className="choices"></div>
      </div>
    );
  }

  function displayScoreInput() {
    return (
      <div id="inputScore">
        <p id="Score-title">Enter your name: 
        <input
            type="text"
            id="user-name"
            value="" />
        </p>
      </div>
    );
  }

  function matchUserInput() {
    let userInput = document.getElementById("user-input").value;
    if (userInput === wordList[wordIndex]) {
      setWordIndex(wordIndex + 1);
      console.log("match");
      userInput.value = "";
    }
  }

 // split up string into individual characters and match them with the user input

 function splitString() {
  let all = document.querySelectorAll(".input_Text");

  all.forEach((element) =>
    element.addEventListener("input", (e) => {
      let data = element.getAttribute("data-verb").toString();
      let value = e.target.value;
      console.log(data, value)
      if (e.target.value == "") {
        element.style.border = "none";
      } else if (data.startsWith(value)) {
        element.style.border = "5px solid green";
      } else {
        element.style.border = "5px solid red";
      }
    })
  );
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
    {splitString()}
    <div>
      <p>
        Enter text:{" "}
        <input
          type="text"
          id="user-input"
          value={userInput}
          onChange={(e) => handleInputChange(e.target.value)}
          data-verb={wordList[wordIndex]}
          className="input_Text"
        />
      </p>
    </div>
  </div>
);
  }
export default startGame;