const questions = [
    {
        question: "What is 2 + 2?",
        options: ["2", "3", "4", "5"],
        answer: "4"
    },
    {
        question: "What is the capital of India?",
        options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer: "Delhi"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Python", "Java", "C++", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "HTML stands for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Markup Language", "None of these"],
        answer: "Hyper Text Markup Language"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");
const finalMessageEl = document.getElementById("final-message");

// Load first question
function loadQuestion() {
    questionEl.textContent = questions[currentQuestion].question;
    optionButtons.forEach((button, index) => {
        button.textContent = questions[currentQuestion].options[index];
    });
}

optionButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.textContent === questions[currentQuestion].answer){
            score++;
        }
        currentQuestion++;

        if(currentQuestion < questions.length){
            loadQuestion();
        } else {
            // Quiz finished
            document.getElementById("quiz").style.display = "none";
            scoreEl.style.display = "none";

            // Show final message
            finalMessageEl.style.display = "block";
            finalMessageEl.innerHTML = `
                <p>🎉 Quiz Completed! 🎉</p>
                <p>🏆 Final Score: ${score}</p>
            `;

            // Add restart button
            const restartBtn = document.createElement("button");
            restartBtn.textContent = "Restart Quiz";
            restartBtn.addEventListener("click", () => location.reload());
            finalMessageEl.appendChild(restartBtn);
        }
    });
});

// Initialize quiz
loadQuestion();
