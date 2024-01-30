import { useState } from "react";
import IntroPage from "./introPage";
import './introPage.scss'

const questions = [
    {
        question: 
            "Select problem areas",
        choices: [
            "Loose skin on thighs and legs",
            "Thinning skin on arms",
            "Loose neck/jaw",
            "Saggy belly",
        ],
        type: "MCQs",
    },
    {
        question: 
            "What hydrating ingredients are you interested in?",
        choices: [
            "Niacinamide",
            "Lipid Compound",
            "Ribose",
            "Jojoba Leaf Extract",
            "Glycerin",
            "Unsure what my skin needs",
        ],
        type: "MCQs",
    },
    {
        question: 
            "How would you describe your skin?",
        choices: [
            "Normal Skin",
            "Crepey Skin",
        ],
        type: "MCQs",
    },
    {
        question: 
            "How much time do you spend on body care daily:",
        choices: [
            "10 Minutes",
            "30 Minutes",
            "1 Hour",
            "5 Minutes",
        ],
        type: "MCQs",
    },
    {
        question: 
            "Have you ever experienced any of these issues in your previous skincare attempts?",
        choices: [
            "Overwhelmed, too many products to keep track of",
            "Overcomplicated, hard to understand ingredients",
            "Hopelessness",
            "No Results",
            "None of the Above",
        ],
        type: "MCQs",
    },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerSelected, setAnswerSelected] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answerIndex, setAnswerIndex] = useState(null);

const startQuiz = () => {
    setQuizStarted(true);
 };

  const onClickContinue = () => {
    if (answerSelected.length > 0) {
        setCurrentQuestion(currentQuestion + 1);
        setAnswerSelected([]);
    }
  };

  const onClickSkip = () => {
    setCurrentQuestion(currentQuestion + 1);
    setAnswerSelected([]);
  };

  const onClickAnswer = (index) => {
    const updatedAnswers = [...answerSelected];
    const answerIndex = updatedAnswers.indexOf(index);
  

    if (answerIndex === -1) {
      updatedAnswers.push(index);
    } else {
      updatedAnswers.splice(answerIndex, 1);
    }

    setAnswerSelected(updatedAnswers);
  };

  function checkAnswer() {
    // Implement answer checking logic here
    const selectedAnswers = document.querySelectorAll('input[name="answer[]"]:checked');
    const selectedValues = Array.from(selectedAnswers).map(input => input.value);
    alert('Selected Answers: ' + selectedValues.join(', '));
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div>
        {!quizStarted ? (
            <IntroPage startQuiz={startQuiz} />
        ) : (
    <div className="quiz-container">
      <h1>City Beauty</h1>
      <div className="progress-container">
      <div className="progress-bar">
        <div style={{ 
            width: `${progress}%`,
            height: '10px',
            backgroundColor: '#e2c47c'}}/>
      </div>
      <h3>{currentQuestion + 1}/{questions.length}</h3>
      </div>
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].choices.map((answer, index) => (
              <li key={index}
                  onClick={() => onClickAnswer(index)}
                  className={answerSelected.includes(index) ? 'answerSelected' : null}
                >
                {answer}
              </li>
            ))}
          </ul>
            <button className="continue" onClick={onClickContinue} disabled={answerSelected.length === 0}>Continue</button>
            <button className="skip" onClick={onClickSkip}>Skip</button>
        </div>
      ) : (
        <div>
          <p>Thanks for sharing!</p>
        </div>
      )}
    </div>
    )}
    </div>
  );
}

export default Quiz;
