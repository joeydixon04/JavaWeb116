const startBtn = document.getElementById("startBtn");
const questionArea = document.getElementById("questionArea");
const result = document.getElementById("result");

const questions = [
  {
    question: "What is the result of 10 * 100 ?",
    choices: ["10000", "2000", "1500", "1000"],
    answer: "1000"
  },
  {
    question: "What does the M stand for in HTML?",
    choices: ["Max", "Mark", "Markup", "Make"],
    answer: "Markup"
  },
  {
    question: "Who invented JavaScript?",
    choices: ["Brendan Eich", "Tim-Berners-Lee", "James Gosling", "Guido van Rossum"],
    answer: "Brendan Eich"
  }
];

let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", startGame);

function startGame() {
  score = 0;
  currentQuestion = 0;
  result.innerHTML = "";
  startBtn.style.display = "none";
  showQuestion();
}

function showQuestion() {
  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    questionArea.innerHTML = `<h3>${q.question}</h3>`;
    q.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.onclick = () => checkAnswer(choice);
      questionArea.appendChild(btn);
    });
  } else {
    playDoomsFinalTrial();
  }
}

function checkAnswer(choice) {
  if (choice === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  showQuestion();
}

function playDoomsFinalTrial() {
  questionArea.innerHTML = `
    <h3> Guess Doom's secret code (1-10) to be freed from prison!</h3>
    <input type="number" id="guessInput" min="1" max="10" />
    <button onclick="checkGuess()">Reveal My Verdict</button>
  `;
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const secret = Math.floor(Math.random() * 10) + 1;
  if (guess === secret) {
    result.innerHTML = `<h2>Very well prisoner, you are free to go with your knowledge of the JavaScript arts ${score}/3!</h2>`;
  } else {
    result.innerHTML = `<h2>You have dissapointed me prisoner. Secret code was ${secret}. Try again if you dare.</h2>`;
  }
  startBtn.textContent = "Give the trial another shot";
  startBtn.style.display = "inline-block";
  questionArea.innerHTML = "";
}
