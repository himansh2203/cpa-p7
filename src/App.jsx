import React from "react";
import "./App.css";
import Why from "./components/Why.jsx";
import Answer from "./components/Answer.jsx";
import Card from "./components/Card.jsx";
import Assigment from "./components/Assigment.jsx";

function App() {
  return (
    <>
      <Why />
      <Answer />
      <div className="card">
        <Card name="RAM" src="vite.svg" />
        <Card name="SHYAM" src="vite.svg" />
        <Card name="SATRUGHAN" src="vite.svg" />
        <Card name="BHARAT" src="vite.svg" />
      </div>
      <Assigment />
    </>
  );
}

export default App;
