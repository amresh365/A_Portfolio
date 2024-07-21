import React from "react";
import Header from "../components/Header";
import Foter from "../components/Foter";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
const HomScreen = () => {
  return (
    <div className="bg-dark">
      <Header />
      <Home />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Foter />
    </div>
  );
};

export default HomScreen;
