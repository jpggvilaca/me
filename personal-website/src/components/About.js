import React from 'react';

import GithubLogo from '../assets/GithubLogo';
import LinkedLogo from '../assets/LinkedinLogo';

import './about.css';

const About = () => (
  <div className="about">
    <div className="intro">
      <div className="avatar"></div>
      <div className="name">
        <p>João Vilaça</p>
        <p>Software Engineer</p>
      </div>
      <div className="contact">
        <a href="https://github.com/jpggvilaca" className="image">
          <GithubLogo />
        </a>
        <span className="divider"></span>
        <a href="https://www.linkedin.com/in/jpggvilaca/" className="image">
          <LinkedLogo />
        </a>
      </div>
    </div>
    <div className="description">
      <p>
        Passionate about new technologies and always trying to improve my tools
        and methodology.
      </p>
      <p>
        With a Computer Science Degree and after being self-taught in web 
        development for a year, I’ve been working professionally along a team 
        of developers, designers and ux’ers to craft and perfect web applications.
      </p>
    </div>
  </div>
);

export default About;