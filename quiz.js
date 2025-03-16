const questions = [
    {
        question: "What does HTML stand for?",
        answer: "hypertext markup language"
    },
    {
        question: "Which HTML tag is used to define a CSS style?",
        answer: "style"
    },
    {
        question: "What is the correct HTML tag for inserting a line break?",
        answer: "br"
    },
    {
        question: "Which property is used to change the background color in CSS?",
        answer: "background-color"
    },
    {
        question: "What is the correct syntax to link an external CSS file?",
        answer: "link"
    }
];

let currentQuestion = 0;

function startQuiz() {
    showQuestion(currentQuestion);
}

function showQuestion(index) {
    document.getElementById('quiz').innerHTML = `
        <p>${questions[index].question}</p>
        <input type="text" id="quizAnswer">
        <button onclick="checkAnswer(${index})">Submit</button>
    `;
}

function checkAnswer(index) {
    const answer = document.getElementById('quizAnswer').value.trim().toLowerCase();
    if (answer === questions[index].answer) {
        alert("Correct! Moving to the next question.");
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion(currentQuestion);
        } else {
            alert("Quiz Completed! Great job!");
            currentQuestion = 0; // Reset the quiz
        }
    } else {
        alert("Incorrect. Try again.");
    }
}
