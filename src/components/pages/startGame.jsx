import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Wrapper from '../Wrapper';
import generateWords from '../../utils/generateWords.js';
// var wordList = [];
import '../../../css/styles.css';
const allowTimePerQuestion = 1.2;
const lifes = 5;

function start(wordToType){
  // Define total seconds for the game
  let secondsLeft = wordToType.length * allowTimePerQuestion;
  let timerObj = document.getElementById("#time")

  var timerInterval = setInterval(function() {
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
  const menuItem = document.getElementById('menuItem');
  if (menuItem != null){
    menuItem.setAttribute("Class", "hide");
  }
  const titleItem = document.getElementById('headTitle');
  if (titleItem != null){
    titleItem.setAttribute("Class", "hide");
  }
  const desc1Item = document.getElementById('desc1');
  if (desc1Item != null){
    desc1Item.setAttribute("Class", "hide");
  }
  const desc2Item = document.getElementById('desc2');
  if (desc2Item != null){
    desc2Item.setAttribute("Class", "hide");
  }
 

  generateWords(499, 12)
  // .then((res)=> {
  //   //the promise is resolved here
  //   console.log(".then logic ", res);
  // }).catch(console.error.bind(console))
 
  wordList = JSON.parse(localStorage.getItem("WordList"));
  // console.log("Using localstorage ", wordList);

  return (
    <div className="profile" id="profile">
      <div className="scores"><a href="#">View Highscores</a></div>
      <div className="timer">Time: <span id="time">0</span></div>

      <div id="questions" className="show">
        <h2 id="question-title">{wordList[1]}</h2>
        <div id="choices" className="choices"></div>
      </div>


      <div>
          <p>
            Enter text: <input type="text" id="initials" />
          </p>
      </div>
    </div>
  );
}

export default startGame;
