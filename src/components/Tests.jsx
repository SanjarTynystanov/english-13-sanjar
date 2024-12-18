import React, { useState } from 'react';
import './Tests.css';

const questions = [
  { question: "What is the capital of England?", options: ["Paris", "London", "Berlin", "Rome"], answer: "London" },
  { question: "I ____ coffee every morning.", options: ["drink", "drinks", "drinking", "drank"], answer: "drink" },
  { question: "She has ____ her homework already.", options: ["do", "did", "done", "does"], answer: "done" },
  { question: "Choose the synonym for 'happy':", options: ["sad", "joyful", "angry", "tired"], answer: "joyful" },
  { question: "He ____ to the gym yesterday.", options: ["go", "goes", "went", "gone"], answer: "went" },
  { question: "I have been ____ English for two years.", options: ["learn", "learning", "learns", "learned"], answer: "learning" },
  { question: "This is the ____ book I've ever read.", options: ["interesting", "most interesting", "more interesting", "interested"], answer: "most interesting" },
  { question: "Choose the correct form: 'If I ____ rich, I would travel the world.'", options: ["am", "was", "were", "be"], answer: "were" },
  { question: "He drives ____ than his brother.", options: ["carefully", "more carefully", "most carefully", "careful"], answer: "more carefully" },
  { question: "What is the plural of 'child'?", options: ["childs", "childes", "children", "childrens"], answer: "children" },
  { question: "Identify the error: 'She don't like coffee.'", options: ["She", "don't", "like", "coffee"], answer: "don't" },
  { question: "They ____ dinner when I arrived.", options: ["have", "had", "were having", "has"], answer: "were having" },
  { question: "Choose the correct word: 'It is ____ hot today.'", options: ["much", "very", "many", "more"], answer: "very" },
  { question: "He ____ his keys last week.", options: ["lose", "loses", "lost", "losing"], answer: "lost" },
  { question: "The car was ____ by a mechanic.", options: ["repair", "repairing", "repaired", "repairs"], answer: "repaired" },
  { question: "She speaks English ____ than me.", options: ["good", "well", "better", "best"], answer: "better" },
  { question: "What is the opposite of 'buy'?", options: ["sell", "give", "take", "borrow"], answer: "sell" },
  { question: "Choose the correct sentence:", options: ["He can speaks English.", "He can speak English.", "He can speaking English.", "He speaks can English."], answer: "He can speak English." },
  { question: "Which article is correct: '____ apple a day keeps the doctor away.'", options: ["A", "An", "The", "No article"], answer: "An" },
  { question: "Identify the tense: 'They have been working for hours.'", options: ["Present Simple", "Present Continuous", "Present Perfect", "Present Perfect Continuous"], answer: "Present Perfect Continuous" },
];

const Test = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setUserAnswers([...userAnswers, selectedOption]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="test">
      <h1>English Level Test</h1>
      {!isFinished ? (
        <div className="question-card">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result">
          <h2>Your Score: {score} / {questions.length}</h2>
          <p>
            Level:{" "}
            {score < 8
              ? "A1 - Beginner"
              : score < 12
              ? "A2 - Elementary"
              : score < 15
              ? "B1 - Intermediate"
              : score < 18
              ? "B2 - Upper Intermediate"
              : score < 20
              ? "C1 - Advanced"
              : "C2 - Proficiency"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Test;

