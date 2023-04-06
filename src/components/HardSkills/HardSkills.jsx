import React from 'react';
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
//import "./_HardSkills.scss"
//import { useState } from 'react';
//import logo from "../../assets/github-logo.png"

// function HardSkills() {

//   const [button, setButton] = useState({ btn1: false})

//   return (
//     <div className='button-row'>
//       <button
//        onClick={() => setButton({...button, btn1: !button.btn1})}
//        className={button.btn1 ? 'active neon-btn' : 'neon-btn'}
//       > 
//         {/* <i  className='material-icons'>wifi</i> */}
//         <FaGithub className='material-icons'/>
//       </button>  
//     </div>
//   )
// }

// export default HardSkills

function HardSkills() {
  return (
    <section className='harskills-container'>
      <div className='icon-card '>
        <FaNode className='material-icons node'/><span>Node.js</span>
      </div>
      <div className='icon-card'>
        <FaReact className='material-icons react'/><span>React.js</span>
      </div>
      <div className='icon-card'>
        <FaSass className='material-icons sass'/><span>Sass</span>
      </div>    
    </section>
  )
}

export default HardSkills