import React from 'react';
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import {AiOutlineHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {BsGit} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {IoLogoJavascript} from "react-icons/io"
//import technos from '../../data/technos'
//import {useState} from 'react';




function HardSkills() {


return (

<section className='harskills-container'>

<div className='icon-card '>
  <IoLogoJavascript className='material-icons js'/><span>Javascript</span>
</div>
<div className='icon-card'>
  <FaReact className='material-icons react'/><span>React.js</span>
</div>
<div className='icon-card '>
  <FaNode className='material-icons node'/><span>Node.js</span>
</div>
<div className='icon-card'>
  <FaSass className='material-icons sass'/><span translate="no">Sass</span>
</div>
<div className='icon-card '>
  <AiOutlineHtml5 className='material-icons html'/><span>Html</span>
</div>
<div className='icon-card '>
  <DiCss3 className='material-icons css'/><span>CSS</span>
</div>
<div className='icon-card '>
  <BsGit className='material-icons git'/><span>git</span>
</div>
<div className='icon-card '>
  <BsGithub className='material-icons github'/><span>github</span>
</div>

</section>
)
}

export default HardSkills



// <section className='harskills-container'>
// <div className='icon-card '>
//   <FaNode className='material-icons node'/><span>Node.js</span>
// </div>
// <div className='icon-card'>
//   <FaReact className='material-icons react'/><span>React.js</span>
// </div>
// <div className='icon-card'>
//   <FaSass className='material-icons sass'/><span>Sass</span>
// </div>

// </section>



////:::::::////////////////////////

 // const [cursorX, setCursorX] = useState()
  //   const [cursorY, setCursorY] = useState()
  
  //   window.addEventListener('mousemove', (e) => {
  //     setCursorX(e.pageX)
  //     setCursorY(e.pageY)
  //   })

// {/* <section className='harskills-container'>
// {technos.map((techno, i) => (
//   <div className='icon-card ' key={i}>
//     {techno.icon.map((Icon, i) => (
//       <a href=""><Icon className='material-icons' key={i}/></a>
//     ))}
//     <span>{techno.name}</span>
// </div>
// ))}

// <div className='cursor'
//   style={{
//     left: cursorX + 'px',
//     top: cursorY + 'px'
//   }}></div>


// </section> */}



///////////////////////////////////


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


/////////////////////////

// function HardSkills() {

//   const [cursorX, setCursorX] = useState()
//   const [cursorY, setCursorY] = useState()

//   window.addEventListener('mousemove', (e) => {
//     setCursorX(e.pageX)
//     setCursorY(e.pageY)
//   })

//   return (
//     <div className='hardskills'>
//     <ul>
//       <li><a href="">Node.js</a></li>
//       <li><a href="">React.js</a></li>
//       <li><a href="">Sass</a></li>     

//      <div className='cursor'
//   style={{
//     left: cursorX + 'px',
//     top: cursorY + 'px'
//   }}></div>
//     </ul>
//      </div>
//   )
// }

// export default HardSkills