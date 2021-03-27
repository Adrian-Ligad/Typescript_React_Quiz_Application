import React from 'react';
import { useState } from 'react';
import { fetchQuizQuestions } from './API';
//components
import QuestionCard from './Components/QuestionCard'
//Types
import { QuestionState, Difficulty } from './API'

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correntAnswer: string;
}

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<QuestionState[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async() => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }



  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ?(
        <button className = "start" onClick = {startTrivia}> 
          Start
        </button>)
      : null}
      {!gameOver ? (
        <p className = "score">Score:</p>) :
        null
      }
      {loading ? (<p>Loading Questions...</p>) : null}
      {/* <QuestionCard
        questionNumber = {number + 1}
        totalQuestions = {TOTAL_QUESTIONS}
        question = {questions[number].question}
        answers = {questions[number].answers}
        userAnswer = {userAnswers ? userAnswers[number] : undefined}
        callback = {checkAnswer}
      /> */}
      <button className = "next" onClick = {nextQuestion}> 
        Next Question
      </button>
    </div>
  );
}

export default App;
