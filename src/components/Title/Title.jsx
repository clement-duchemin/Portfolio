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


  return (
    <section className='title-container'>
        <h1 className='title-root'>
          {pictures.map((picture, index) => (
            <div key={index} className={current === index ? 'slider' : null}>
            {index === current && <img src={picture} alt='mur' />}
            </div>
          ))}
          
            <span className='title-root__a'>
              <span className='group-A'>C</span>
              <span>l</span>
              <span className='aqua'>é</span>
              <span className='group-A'>m</span>
              <span className='group-round'>e</span>
              <span className='group-B'>n</span>
              <span className='group-A'>t</span>
            </span>
            <br></br>
            <span className='title-root__b'>
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
            <span className='title-root__c'>
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
        className="button">Don't push me !</div>
    </section>
  )
}

export default Title