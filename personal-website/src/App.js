import React, { Fragment } from 'react';

import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

import './index.css';

const App = () => (
  <Fragment>
    <main>
      <About />
      <Projects />
    </main>

    <Footer />
  </Fragment>
);

export default App;
