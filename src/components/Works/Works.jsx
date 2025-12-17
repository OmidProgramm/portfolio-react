import './Works.css';
import portfolio1 from '../../assets/images/portfolio-1.png';
import portfolio2 from '../../assets/images/portfolio-2.png';
import portfolio3 from '../../assets/images/portfolio-3.png';
import portfolio4 from '../../assets/images/portfolio-4.png';
import portfolio5 from '../../assets/images/portfolio-5.png';
import portfolio6 from '../../assets/images/portfolio-6.png';
import portfolio7 from '../../assets/images/portfolio-7.png';
import portfolio8 from '../../assets/images/portfolio-8.png';
const Works = () => {
    return ( 
        
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">
                I take pride in attention to detail and delivering pixel-perfect results. I am motivated to apply my skills and experience to help businesses reach their goals and build a strong, effective online presence.
            </span>
            <div className="worksImgs">
                <div className="worksImg">
                    <img src={ portfolio1} alt="worksimage" />
                </div>
                <div className="worksImg">
                    <img src={portfolio2} alt="worksimage" />
                </div>
                <div className="worksImg">
                    <img src={portfolio3} alt="worksimage"  />
                </div>
                <div className="worksImg">
                    <img src={portfolio4} alt="worksimage"/>
                </div>
                <div className="worksImg">
                    <img src={portfolio5} alt="worksimage"/>
                </div>
                <div className="worksImg">
                    <img src={portfolio6} alt="worksimage" />
                </div>
                <div className="worksImg">
                    <img src={portfolio7} alt="worksimage"/>
                </div>
                <div className="worksImg">
                    <img src={portfolio8} alt="worksimage"/>
                </div>
            </div>
        </section>
        
     );
}
 
export default Works;