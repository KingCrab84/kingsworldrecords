const highScoreList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("HighScores")) || [];

highScoreList.innerHTML = highScores //funkar ej. video 9
    .map(score => {
        return '<li class="high-score">${score.name} - ${score.score}</li>';
    })
    .join(**); //fel tecken???