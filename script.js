let currentQuestion = 0;
const questionText = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next");

const questions = [
    {
        text: "Which keyword declares a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        correctIndex: 2
    },
    {
        text: "Which method is used to log to the console?",
        options: ["print()", "log()", "console()", "console.log()"],
        correctIndex: 3
    },
    {
        text: "Which of these is NOT a JavaScript data type?",
        options: ["number", "string", "boolean", "character"],
        correctIndex: 3
    }
];
showQuestion();

function showQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.text;
    optionsBox.innerHTML = "";
    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.className =
            "w-full bg-slate-500 hover:bg-slate-400 rounded-xl py-2 px-4 text-left";
        btn.addEventListener("click", () => {
            checkAnswer(index);
        });

        optionsBox.appendChild(btn);
    });
}
function checkAnswer(i) {
    const correct = questions[currentQuestion].correctIndex;
    if (i === correct) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}
nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        alert("Quiz Finished!");
    }
});
