let score = 0;
document.getElementById("score").innerHTML = "Your current score is: " + score;

function addScore() {
    let inputValue = document.getElementById("input-value").value;
    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }
    score += parseInt(inputValue);
    document.getElementById("score").innerHTML = "Your current score is: " + score;
}
