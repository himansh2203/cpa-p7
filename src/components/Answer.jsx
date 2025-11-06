import React from "react";

const Answer = () => {
  return (
    <div className="answer">
      Vite is a build tool that aims to provide a faster and leaner development
      experience for modern web projects. In the context of React, Vite offers
      several advantages:
      <ul className="answer-list">
        <li className="list-odd">
          Vite is a modern, lightning-fast build tool for React.js.
        </li>
        <li className="list-even">
          It starts the development server instantly using native ES modules.
        </li>
        <li className="list-odd">
          Vite provides fast hot module replacement (HMR) for a smooth
          development experience.
        </li>
        <li className="list-even">
          Uses Rollup for optimized production builds.
        </li>
        <li className="list-odd">Easier configuration than Webpack.</li>
        <li className="list-even">
          Offers better performance, faster builds, and smoother developer
          experience compared to Create React App (CRA).
        </li>
        <li className="list-odd">
          Supports modern features like TypeScript, JSX, CSS modules, and
          environment variables out of the box.
        </li>
      </ul>
    </div>
  );
};

export default Answer;
