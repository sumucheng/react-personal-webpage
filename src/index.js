import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";


function App() {
  const [breakLength, setBreakLength] = useState(parseInt(localStorage.getItem("BL")) || 1);
  const navList = ["welcome", "projects", "contact"]

  useEffect(() => {
    localStorage.setItem("BL", breakLength);
  });

  return (
    <div className="app">
      <div id="navbar">
        <nav>{navList.map(i => <li key={i}><a href={`#${i}`}>{i}</a></li>)}</nav>
      </div>
      <div id="welcome">
        <h1>Hey I am Ryoko</h1>
      </div>
      <div id="projects">
        <h2 className="projects-header">These are some of my projects</h2>
        <div className="projects-grid">
          <a href="" target="_black">
            <img src={require("./img/calculator.png")} alt="project" className="project-image" />
            <p><span className="code">&lt;</span>计算器<span className="code">&#47;&gt;</span></p>
          </a>
        </div>
        <div>
          <a href="" target="_black">Show All</a>
        </div>
      </div>

      <div id="contact">
        <div>
          <a href="https://github.com/sumucheng" target="_blank" >GitHub</a>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
