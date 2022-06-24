import "flag-icons";

import { Fragment } from "react";

import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Articles from "./components/Articles";

import "./index.css";

const App = () => (
  <Fragment>
    <main>
      <About />
      <Projects />
      <Articles />
    </main>

    <Footer />
  </Fragment>
);

export default App;
