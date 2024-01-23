import React, { useState, useEffect } from 'react';
// import generateWords from '../../utils/generateWords.js';
import API from '../../utils/wordsPickingAPI';
import Container from '../Container';
// var wordList = [];
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
  const [search, setSearch] = useState('Wikipedia');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  console.log("In startGame");

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
 
  // TODO: Fix the useEffect hook running after every state change.
  useEffect(() => {
    console.log("In useEffect", search, "|", !search);
    if (!search) {
      return;
    }

    // API.searchTerms(search)
    var query = "words=499" ;
    API.search(query)
      .then((res) => {
        console.log("Immediate after call", res);
        if (res.data.length === 0) {
          throw new Error('No results found.');
        }
        if (res.data.status === 'error') {
          throw new Error(res.data.message);
        }
        // TODO: Use the response data to set the title and url.
        console.log(" Triggered ", res.data);
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
        console.log("resultReturn", resultReturn);

        // setTitle(resultReturn[0]);
        setTitle(resultReturn[0]);
        wordList = resultReturn;
        localStorage.setItem("WordList", JSON.stringify(resultReturn) );
      })
      .catch((err) => setError(err));
      // 1 after every state change
  }, [search]);

  // TODO: Fix the handleInputChange function to display the Wikipedia URL
  const handleInputChange = (event) => {
    console.log("handle Input Change", event.target.value);
    setSearch(event.target.value);
    setUrl(event.target.vale);
  };


  return (
    
    <div className="profile" id="profile">
      <Container style={{ minHeight: '100vh' }}>
      <div className="scores"><a href="#">View Highscores</a></div>
      <div className="timer">Time: <span id="time">0</span></div>

      <div id="questions" className="show">
        <h2 id="question-title">{title}</h2>
        <div id="choices" className="choices"></div>
      </div>


      <div>
          <p>
            Enter text: <input type="text" id="initials" />
          </p>
      </div>
      </Container>
    </div>
  );
}

export default startGame;
