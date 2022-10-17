import { useState } from "react";
import Question from "./components/Question";
import data from "./data/data";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="App">
      <div className="container">
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </div>
    </div>
  );
}

export default App;
