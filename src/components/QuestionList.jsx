// src/components/ProfileCard.jsx
import React from "react";

function QuestionList({ question, option1, option2, option3, option4 }) {
  return (
    <div className="questionCard">
      <h3>{question}</h3>
      <ul>
        <li>{option1}</li>
        <li>{option2}</li>
        <li>{option3}</li>
        <li>{option4}</li>
      </ul>
    </div>
  );
}

export default QuestionList;
