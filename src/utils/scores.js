import dayjs from 'dayjs';

var scoreList = [];
const scoreClass = {
    id: 0,
    name: "",
    gameMode: "",
    dateTime: "",
    score: 0
}

function retrieveScore(){
    scoreList = JSON.parse(localStorage.getItem("GameScoreList"));
    if (scoreList === null){
        scoreList = [];
    }
    return scoreList;
console.log("Inside retrieveScore ", scoreList);
}

function saveScore(thisResult){
    scoreList.push(thisResult);
    localStorage.setItem("GameScoreList", JSON.stringify(scoreList) );
}


function setTestData(){
    var objItem = Object.create(scoreClass);
    objItem.name = "Igor";
    objItem.gameMode = "RandomWords";
    objItem.dateTime = dayjs().format("DD MMM, YYYY h:mmA");
    objItem.score = 23;

    retrieveScore();
    objItem.id = scoreList.length + 1;
    saveScore(objItem);
    retrieveScore();
    console.log("Outside Pick up ", scoreList);
}

// setTestData();
export default retrieveScore;