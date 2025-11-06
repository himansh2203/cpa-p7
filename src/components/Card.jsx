// src/components/ProfileCard.jsx
import React from "react";

function Card({ name, src }) {
  return (
    <div className="cardStyle">
      <div>
        <img src={src}></img>
        <h2>{name}</h2>
        <h3>this is {name} card</h3>
      </div>
    </div>
  );
}

export default Card;
