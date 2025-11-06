import React from "react";

const Assigment = () => {
  return (
    <div>
      <p>
        <strong>
          <center>Answers</center>
        </strong>
      </p>
      <ol>
        <li className="list-odd">Building user interfaces</li>
        <li className="list-even">Write HTML-like code inside JavaScript</li>
        <li className="list-odd">
          Props are immutable and flow parent → child
        </li>
        <li className="list-even">camelCase</li>
        <li className="list-odd">Virtual DOM</li>
        <li className="list-even">
          {" "}
          <pre>
            <code>
              {`import React from "react";

function HelloWorld() {
  return <h1>Hello, React!</h1>;
}

export default HelloWorld;`}
            </code>
          </pre>
        </li>
        <li className="list-odd">
          functional component is a plain JS function that return JSX. Class
          component is a JS(ES6) class that extends React.component.
        </li>
        <li className="list-even">
          React component names start with a capital letter because it helps
          react to know something is custom component or a built-in HTML tag.
        </li>
        <li className="list-odd">
          JSX - A syntax extension that allows to Write HTML-like code inside
          JavaScript. Plain Js - It use code using react create
          Element()function.
        </li>
        <li className="list-even">
          {" "}
          <pre>
            <code>
              {` import React from "react";

function Button() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button
      onClick={handleClick}
    >
      Click Here
    </button>
  );
}

export default Button;`}
            </code>
          </pre>
        </li>
      </ol>
    </div>
  );
};

export default Assigment;
