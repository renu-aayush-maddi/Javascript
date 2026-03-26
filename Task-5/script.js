let quizData = [
{question: "What is the Professor’s real name?", options: ["Sergio", "Rio", "Denver", "Berlin"], answer: "Sergio"},
{question: "First heist location?", options: ["Bank of Spain", "Royal Mint", "Paris Bank", "London Vault"], answer: "Royal Mint"},
{question: "Famous song in the series?", options: ["Bella Ciao", "Despacito", "Senorita", "Shape of You"], answer: "Bella Ciao"}
];

let index = 0;
let score = 0;

let question = document.getElementById("question");
let buttons = document.querySelectorAll(".opt");
let result = document.getElementById("result");

function loadQuestion() {

let q = quizData[index];
question.textContent = q.question;

buttons.forEach((btn, i) => {
btn.textContent = q.options[i];

btn.onclick = function () {
    if (btn.textContent === q.answer) {
        score++;
    }
    nextQuestion();
        }
    })
}

function nextQuestion() {
    index++;
    if (index < 3) {
        loadQuestion();
    } else {
        document.getElementById("quiz").style.display = "none"
        result.style.display = "block"
        result.innerHTML = `Score: ${score}/3`
    }
}

loadQuestion();