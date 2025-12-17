import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

export const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <Works/>
    </>
  );
};
export default App;
