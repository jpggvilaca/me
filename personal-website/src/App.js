import React, { Fragment } from 'react';
import './index.css';

const Footer = () => (
  <footer>
    <p>
      Design by <a href="https://github.com/mikeheddes">Mike Heddes</a>. All 
      rights reserved.
    </p>
  </footer>
);

const About = () => (
  <div className="about">
    <div className="intro">
      <div className="avatar"></div>
      <div className="name">
        <p>João Vilaça</p>
        <p>Software Engineer</p>
      </div>
      <div className="contact"></div>
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
)

const App = () => (
  <Fragment>
    <main>
      <About />
    </main>
    <Footer />
  </Fragment>
);

export default App;
