import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import history from "./assets/history.jpg";


function App() {




  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState("");
const [quizFinished, setQuizFinished] = useState(false);
const [startQuiz, setStartQuiz] = useState(false);


  useEffect(() => {

    axios
    .get("https://bharat-quest-backend.onrender.com/api/questions")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });


  }, []);
  
const current = questions[currentQuestion];
const handleNext = () => {

  if (selectedAnswer === current.answer) {
    setScore(score + 1);
  }

  setSelectedAnswer("");

  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
} else {
    setQuizFinished(true);
}


};
if (!startQuiz) {
  return (
  <div
  className="app"
  style={{
    backgroundImage: `linear-gradient(rgba(5,10,25,0.82), rgba(8,17,32,0.82)), url(${history})`,
  }}
>
<h1>🧭 BHARAT QUEST</h1>


      <p className="tagline">
        Journey Through India's Glorious Past
      </p>
     <p className="description">
Test your knowledge of Ancient, Medieval and Modern Indian History through an engaging interactive quiz.
</p>


<button
        className="start-btn"
        onClick={() => setStartQuiz(true)}
      >
        Start Quiz →
      </button>

    </div>
  );

}
if (quizFinished) {
  return (
    <div className = "app"

style={{
  backgroundImage: `linear-gradient(rgba(5,10,25,0.82), rgba(8,17,32,0.82)), url(${history})`,
}}>


      <h1>🏆 Quiz Completed!</h1>

      <h2 className="score">
  Your Score: {score} / {questions.length}
</h2>


      <button onClick={() => window.location.reload()}>
        Play Again
      </button>
    </div>
  );
  
}
return(
    <div className = "app"
      style={{
    backgroundImage: `linear-gradient(rgba(5,10,25,0.82), rgba(8,17,32,0.82)), url(${history})`,
  }}>
    
<h1>🧭 BHARAT QUEST</h1>

  {current && (
  <div className ="quiz-card">

    <h2>Question {currentQuestion + 1}</h2>

    <h3>{current.question}</h3>

    <ul>
      {current.options.map((option, index) => (
        <li key={index}>
          <button
  className={selectedAnswer === option ? "selected" : ""}
  onClick={() => setSelectedAnswer(option)}
>
  {option}
</button>

        </li>
      ))}
    </ul>
<p>
  Selected Answer: {selectedAnswer || "None"}
</p>
<button onClick={handleNext}
disabled = {selectedAnswer===""}>
  Next
</button>



  </div>
)}

    </div>
  );
}

export default App;


