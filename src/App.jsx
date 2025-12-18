import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import portfolio1 from "./assets/images/portfolio-1.png";
import portfolio2 from "./assets/images/portfolio-2.png";
import portfolio3 from "./assets/images/portfolio-3.png";
import portfolio4 from "./assets/images/portfolio-4.png";
import portfolio5 from "./assets/images/portfolio-5.png";
import portfolio6 from "./assets/images/portfolio-6.png";
import portfolio7 from "./assets/images/portfolio-7.png";
import portfolio8 from "./assets/images/portfolio-8.png";

export const MyContext = React.createContext([]);

export const App = () => {
  const images = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    portfolio7,
    portfolio8,
  ]
  return (
    <>
      <MyContext.Provider value={images}>
        <Navbar />
        <Intro />
        <Skills />
        <Works />
      </MyContext.Provider>
    </>
  );
};
export default App;
