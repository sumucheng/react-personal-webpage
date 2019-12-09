import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";


function App() {
  const navList = ["welcome", "projects", "contact"]
  const projects = [
    { name: 'calculator', displayName: '计算器', image: require("./img/calculator.png"), url: "http://chenyiran.top/react-calculator/build/index.html" },
    { name: 'pomodoro', displayName: '番茄钟', image: require("./img/pomodoro.png"), url: "http://chenyiran.top/react-pomodoro/build/index.html" },
    { name: 'tictactoe', displayName: '井字棋', image: require("./img/tictactoe.png"), url: "http://chenyiran.top/tic-tac-toe/build/index.html" },
    { name: 'react', displayName: 'React文档示例', image: require("./img/react.png"), url: "http://chenyiran.top/React-Docs-examples/build/index.html" },
    { name: 'vue', displayName: 'Vue文档示例', image: require("./img/vue.png"), url: "http://chenyiran.top/Vue-Docs-Examples/dist/index.html" },
  ]
  const contact = [
    { name: 'github', displayName: "GitHub", url: "https://github.com/sumucheng" },
    { name: 'email', displayName: "Email", content: '772765729@qq.com' },
    { name: 'phone', displayName: "Call", content: '173-1782-4743' },
  ]

  return (
    <div className="app">
      <nav id="navbar">
        <ul>{navList.map(i => <li key={i}><a href={`#${i}`}>{i}</a></li>)}</ul>
      </nav>
      <main id="main">
        <div id="welcome">
          <h1>Hey I am Ryoko</h1>
          <p>Welcome to my channel :D</p>
        </div>
        <div id="projects">
          <h2 className="projects-header">These are some of my projects</h2>
          <div className="projects-grid">
            {projects.map(project =>
              <div className="project" key={project.name}>
                <a href={project.url} target="_black" >
                  <img src={project.image} alt="project" className="project-image" />
                  <p>
                    <span className="code">&lt;</span>
                    {project.displayName}
                    <span className="code">&#47;&gt;</span>
                  </p>
                </a>
              </div>
            )}
          </div>
          <div className="projects-show-all">
            <a href="https://github.com/sumucheng" target="_black" className="show-all">Show All</a>
          </div>
        </div>

        <div id="contact">
          {contact.map(item =>
            <div>
              <div className='contact-info'>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref={`#icon-${item.name}`}></use>
                </svg>
                {item.url ?
                  <a href={item.url} target="_blank" >{item.displayName}</a>
                  : item.displayName}
              </div>
              {item.content && <div>{item.content}</div>}
            </div>
          )}
        </div>
      </main>
    </div >
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
