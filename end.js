const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerHTML = mostRecentScore; //not workin! video7, 11.00


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value; //not workin! video7, 10.00
});

saveHighScore = e => {
e.preventDefault();
};