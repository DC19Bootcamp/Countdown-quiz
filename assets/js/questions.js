var questions = [
    {
        prompt: "What color is the sky?\n(a) Red\n (b) Blue\n (c) Orange",
        choices: ["Red", "Blue", "Orange"],
        answer: "Blue"
    },
    {
        prompt: "What color is an orange?\n(a) Red\n (b) Blue\n (c) Orange",
        choices: ["Red", "Blue", "Orange"],
        answer: "Orange"
    },
];

var currentQuestion = 0;

// Starts the quiz when the start button is clicked
document.getElementById("start").addEventListener("click", startQuiz);

function startQuiz() {
    // Hide the start screen
    document.getElementById("start-screen").classList.add("hide");
    // Displays the first question and its choices
    displayQuestion();
}

function displayQuestion() {
    // Displays the question prompt
    document.getElementById("question-title").innerText = questions[currentQuestion].prompt;
    // Displays the choices
    var choices = document.getElementById("choices");
    choices.innerHTML = "";
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        var choice = document.createElement("button");
        choice.innerText = questions[currentQuestion].choices[i];
        choice.classList.add("choice-button");
        choices.appendChild(choice);
    }
}
