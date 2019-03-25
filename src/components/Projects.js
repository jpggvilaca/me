import React from 'react';

import './projects.css';

const Projects = () => (
  <div className="projects">
    <h4 className="section-title">Projects</h4>

    <ul className="project-list">
      <li className="card even">
        <h4 className="card-title">Uber simplistic clone</h4>
        <p className="card-description">
          Simplified Uber app - Server side made in erlang, client side made in
          Java.
        </p>
        <a className="github-link" href="https://github.com/jpggvilaca/uber_erlang_java">
          GITHUB
        </a>
      </li>
      <li className="card odd">
        <h4 className="card-title">Webpack boilerplate</h4>
        <p className="card-description">
          Minimalist Webpack Boilerplate
        </p>
        <a className="github-link" href="https://github.com/jpggvilaca/webpack-boilerplate">
          GITHUB
        </a>
      </li>
      <li className="card even">
        <h4 className="card-title">deep-diff-object</h4>
        <p className="card-description">
          Javascript object deep diffing
        </p>
        <a className="github-link" href="https://github.com/jpggvilaca/deep-diff-object">
          GITHUB
        </a>
      </li>
      <li className="card odd">
        <h4 className="card-title">Typing game</h4>
        <p className="card-description">
          Speed typing game made with React
        </p>
        <a className="github-link" href="https://github.com/jpggvilaca/typing-game">
          GITHUB
        </a>
      </li>
      <li className="card even">
        <h4 className="card-title">React container theory</h4>
        <p className="card-description">
          Testing container ON/OFF approach. Connected parent components with
          unconnected children vs Unconnected parent with connected children
        </p>
        <a className="github-link" href="https://github.com/jpggvilaca/container-theory">
          GITHUB
        </a>
      </li>
      <li className="card odd">
        <h4 className="card-title">Check the other projects</h4>
        <p className="card-description">
          Check my github for the rest of the projects.
          Main technologies: HTML, CSS, JAVASCRIPT, REACT, NODE
        </p>
        <a className="github-link" href="https://github.com/jpggvilaca?tab=repositories">
          GITHUB
        </a>
      </li>
    </ul>
  </div>
);

export default Projects;