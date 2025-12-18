import "./Works.css";
import { useContext } from "react";
import Work from "./Work";

import {MyContext} from '../../App';
const Works = () => {
    const images = useContext(MyContext)
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in attention to detail and delivering pixel-perfect
        results. I am motivated to apply my skills and experience to help
        businesses reach their goals and build a strong, effective online
        presence.
      </span>
      <div className="worksImgs">
        {
            images.map((image, index) => <Work key={index} image={image} />)
        }
      </div>
      <button className="workBtn">see more...</button>
    </section>
  );
};

export default Works;
