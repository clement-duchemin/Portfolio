import React from 'react'
import arrow from '../../assets/chevron.svg'
import { useState, useEffect, useRef} from "react";




function Collapse() {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const toggleState = () => {
    setToggle(!toggle);
  }

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`)
  },[]);


  return (
    <div className='collapse-container'>
      <div className='collapse-wrapper'>
        <div className='collapse' onClick={toggleState}>
            <div className='collapse__title'>Recommandations</div> 
            <img 
              src={arrow} 
              className={toggle ? 'arrow rotated' : 'arrow'} 
              alt='flèche' 
            />
        </div>
        <div 
          ref={refHeight}
          className={toggle ? 'toggle animated' : 'toggle'} 
          style={{ height: toggle ? `${heightEl}`: '0px' }}
        >
          <p className='collapse-paragraph'>
            Clément était un étudiant très autonome et studieux.
            Très curieux et motivé par sa formation. 
            J'ai eu beaucoup de plaisir à échanger avec lui chaque semaine pendant sa formation de développeur Web.
            <br />Bruno LE TUAL
            </p>
        </div>
        </div>
        <a href='https://drive.google.com/file/d/1qYax791UMrClPBS1y8DXbAQRikuHSxIv/view?usp=sharing'
             alt="lien-CV" download target="_blank" rel="noreferrer" 
             className="cv">CV
        </a>

    </div>
  )
}

export default Collapse