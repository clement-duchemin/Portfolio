import Header from '../../components/Header/Header';
import Title from "../../components/Title/Title"
import HardSkills from "../../components/HardSkills/HardSkills"
import Projects from "../../components/Projects/Projects"
import Collapse from "../../components/Collapse/Collapse"
//import bkgrImage from "../../assets/sky-view.jpg"
import pictures from '../../data/pictures'
import { useState } from "react"
import {GiPowerButton} from "react-icons/gi";



function Home() {

  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current +1) // On repart au premier slide quand on arrive au dernier
}


  return (
    <main className="main">
      <div className="section-image">
        {pictures.map((picture, index) => (
          <div key={index} className={current === index ? 'slider' : null}>
          {index === current && <img src={picture} alt='mur' />}
          </div>
        ))}
        <div className='button' onClick={nextSlide}><GiPowerButton className='button__icon'/></div>
        <div className="cloud"></div>
        <div className="section-header">
          <Header />
        </div>
        <div className="section-title">
          <Title />
        </div>
      </div>
        <div className="section-hardSkills">
          <HardSkills />
        </div>
        <div className="collapse-section">
          <Collapse />
        </div>
        <div className="section-projects">
          <Projects />
        </div>
    </main>
  )
}

export default Home





/* <img src={bkgrImage} alt="ciel"/>  */




// {pictures.map((picture, index) => (
//   <div key={index} className={current === index ? 'slider' : null}>
//   {index === current && <img src={picture} alt='mur' />}
//   </div>
// ))}