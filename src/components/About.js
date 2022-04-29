import React from 'react';

import GithubLogo from './GithubLogo';
import LinkedLogo from './LinkedinLogo';

import './about.css';

const About = () => (
  <div className="about">
    <div className="intro">
      <div className="avatar"></div>
      <div className="info">
        <p className='name'>João Vilaça</p>
        <p>Software Engineer</p>
        <p>Frontend Team Lead @ Intel Corporation</p>
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
        After finishing my Computer Science Degree I decided to teach myself web 
        development for a year. Since then, I've been working professionally with teams 
        of developers, designers and ux'ers to craft and perfect web applications.
      </p>
    </div>
  </div>
);

export default About;
