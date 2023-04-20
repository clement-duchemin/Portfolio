import React from 'react'
//import pic from '../../assets/wall.jpg'
import pictures from '../../data/pictures'
import { useState } from "react"


function Title() {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current +1) // On repart au premier slide quand on arrive au dernier
}

const [isAnimating, setIsAnimating] = useState(false);

const handleButtonClick = () => {
  setIsAnimating(true); // Update state to trigger animation
};

const handleAnimationEnd = () => {
  setIsAnimating(false); // Update state when animation ends
};


  function multiplyText(text, num) {
    let multipiedText = '';
    for (let i = 0; i < num ; i++) {
      multipiedText += text;
    }
    return multipiedText;
  }

  const multiplied = multiplyText('javascript react.js html css github node.js sass mongodb crud agile git seo postman restful api express.js ', 77);


  return (
    <section className='title-container'>
        <h1 className='title-root' translate='no'>
          {pictures.map((picture, index) => (
            <div key={index} className={current === index ? 'slider' : null}>
            {index === current && <img src={picture} alt='mur' />}
            </div>
          ))}
          
            <span className='title-root__a' translate='no'>
              <span className='group-A'>C</span>
              <span>l</span>
              <span className='aqua'>é</span>
              <span className='group-A'>m</span>
              <span className='group-round'>e</span>
              <span className='group-B'>n</span>
              <span className='group-A'>t</span>
            </span>
            <br></br>
            <span className='title-root__b' translate='no'>
              <span>D</span>
              <span className='group-A'>u</span>
              <span className='group-B'>c</span>
              <span>h</span>
              <span className='group-A'>e</span>
              <span className='group-A'>m</span>
              <span className='group-round'>i</span>
              <span className='group-B'>n</span>
              <span>,</span>
            </span>
            <br></br>
            <span className='title-root__c' translate='no'>
              <span>D</span>
              <span className='aqua'>é</span>
              <span className='group-A'>v</span>
              <span className='group-B'>e</span>
              <span className='group-A'>l</span>
              <span>o</span>
              <span className='bkgd-aqua'>p</span>
              <span className='bkgd-aqua'>p</span>
              <span className='group-B'>e</span>
              <span className='group-A'>u</span>
              <span className='group-bent'>r</span>
            </span>  
              <br></br>
            <span className='title-root__d'>
              <span className='group-C'>v</span>
              <span className='aqua'>v</span>
              <span>e</span>
              <span>b</span>
              <span className='aqua'>.</span>
              <span className='group-round'>.</span>
              <span className='group-last'>.</span>
            </span>
        </h1>
        <div onClick={nextSlide}
        className="button" >Don't push me !
        </div>
        <div className="pendulum-wrapper">
              <div className="pendulum">
                <div className="cord"></div>
                <div className="sphere">
                  <div className='sphere__bg'></div>
                  <div className='sphere__glow--in'></div>
                  <div className='sphere__glow--out'></div>
                </div>    
            </div>
          </div>
          <div 
          className={`neon ${isAnimating ? 'animate' : ''}`}
          onClick={handleButtonClick}
          onAnimationEnd={handleAnimationEnd}
          >
            {multiplied}
        </div>
    </section>
    
  )
}

export default Title










