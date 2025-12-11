import { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      text: "Which keyword declares a constant in JavaScript?",
      options: ["var", "let", "const", "static"],
      correctIndex: 2,
    },
    {
      text: "Which method is used to log to the console?",
      options: ["print()", "log()", "console()", "console.log()"],
      correctIndex: 3,
    },
    {
      text: "Which of these is NOT a JavaScript data type?",
      options: ["number", "string", "boolean", "character"],
      correctIndex: 3,
    },
  ];

  const handleAnswer = (index) => {
    setSelected(index);

    if (index === questions[currentQuestion].correctIndex) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800">
      <div className="quiz-box bg-slate-600 w-[380px] p-8 rounded-2xl text-white">

        {!showResult ? (
          <>
            <h2 className="text-xl font-semibold">Simple JS Quiz</h2>

            <p className="text-sm text-gray-300 mb-6">
              Question {currentQuestion + 1} of {questions.length}
            </p>

            <p className="font-medium mb-4">
              {questions[currentQuestion].text}
            </p>

            <div className="flex flex-col gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  disabled={selected !== null}
                  onClick={() => handleAnswer(index)}
                  className={`w-full rounded-xl py-2 px-4 text-left transition cursor-pointer
                    ${
                      selected === null
                        ? "bg-slate-500 hover:bg-slate-400"
                        : index === questions[currentQuestion].correctIndex
                        ? "bg-green-600"
                        : index === selected
                        ? "bg-red-600"
                        : "bg-slate-500"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={nextQuestion}
                className="bg-teal-500 hover:bg-teal-400 px-6 py-2 rounded-xl text-white"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">Quiz Finished!</h2>

            <p className="text-lg mb-3">
              Your Score: <span className="font-bold">{score}</span> / {questions.length}
            </p>

            <button
              onClick={restartQuiz}
              className="bg-teal-500 hover:bg-teal-400 px-6 py-2 rounded-xl text-white mt-4"
            >
              Restart Quiz
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default Quiz;
