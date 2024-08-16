const questions = [
    { question: "What is my favorite color?", answer: "blue" },
    { question: "What is my favorite food?", answer: "pizza" },
    // Add more questions here
];

let currentQuestion = 0;

function displayQuestion() {
    const questionElement = document.querySelector('.question');
    questionElement.textContent = questions[currentQuestion].question;
}

function checkAnswer() {
    const answerInput = document.getElementById('answer');
    const resultElement = document.querySelector('.result');

    if (answerInput.value.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
        resultElement.textContent = "Happy Birthday!";
    } else {
        resultElement.textContent = "Try again!";
    }

    currentQuestion++;
    if (currentQuestion >= questions.length) {
        // Add code for final message or redirect here
    } else {
        displayQuestion();
    }
}

displayQuestion();
