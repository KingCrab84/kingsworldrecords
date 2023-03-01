const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = window.localStorage["mostRecentScore"];
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;


finalScore.innerText = `Score: ${mostRecentScore}`; //not workin! video7, 11.00

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value; //not workin! video7, 10.00
});

saveScoreBtn.addEventListener("click", e => {
    e.preventDefault();

    const score = { //video 8
        score: Math.floor(Math.random() * 100),
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");
});
