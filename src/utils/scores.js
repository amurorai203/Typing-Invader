import dayjs from 'dayjs';

var scoreList = [];
const scoreClass = {
    name: "",
    gameMode: "",
    DateTime: "",
    score: 0
}

function retrieveScore(){
    scoreList = JSON.parse(localStorage.getItem("GameScoreList"));
    if (scoreList === null){
        scoreList = [];
    }

}

function saveScore(thisResult){
    scoreList.push(thisResult);
    localStorage.setItem("GameScoreList", JSON.stringify(scoreList) );
}


var objItem = Object.create(scoreClass);
objItem.name = "Igor";
objItem.gameMode = "RandomWords";
objItem.DateTime = dayjs()
objItem.score = 49;

retrieveScore();
saveScore(objItem);
retrieveScore();
console.log("Outside Pick up ", scoreList);