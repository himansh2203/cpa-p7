import React from "react";
import QuestionList from "./QuestionList";

const listOfQuestions = [
  {
    question: "What is React?",
    option1: "A JavaScript library for building user interfaces",
    option2: "A CSS framework",
    option3: "A database management system",
    option4: "A web server",
  },
];

const Questionaies = () => {
  return (
    <div className="questionaries">
      <div className="mcq">Multiple choice questions</div>
      <QuestionList
        question={listOfQuestions[0].question}
        option1={listOfQuestions[0].option1}
        option2={listOfQuestions[0].option2}
        option3={listOfQuestions[0].option3}
        option4={listOfQuestions[0].option4}
      />
    </div>
  );
};

export default Questionaies;
