// highscore logic
// ==========================================================
// ==========================================================

// variables
var highscore = document.querySelector("#highscore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");
// append highscores to page
highscore.addEventListener("click", function () {
    window.location.replace("./highscore.html");
});
