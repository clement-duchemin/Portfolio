import React from 'react'
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";


const socialLinks = [
  {
  "GTlink": "https://github.com/clement-duchemin",
  GTicon:[
    BsGithub
  ],
 
  "INlink": "https://www.linkedin.com/in/clementduchemin/",
  INicon:[
    FaLinkedinIn
  ]
}]



function Footer() {
  return (
    <footer className='footerwrapper'>
       {socialLinks.map((link, i) => (
       <div className='social-menu'>
        <div className='social-menu__github'>
          <div className='icon-wrapper'>
                <Link to={link.GTlink} target="_blank" key={i} className='link'>
                {link.GTicon.map((Icon, i) => (
                <Icon className='social-icon github' key={i}/>))}
                </Link>
          </div>      
                
        </div>
        <div className='social-menu__linkedin'>
          <div className='icon-wrapper'>
                <Link to={link.INlink} target="_blank" key={i}>
                {link.INicon.map((Icon, i) => (
                <Icon className='social-icon linkedin' key={i}/>))}
                </Link>
          </div>       
                
        </div>
      </div> 
      ))} 
        <div className='footer-paragraph'>
          <p>portfolio codé avec React et Sass</p>
          <p>© clément duchemin</p>
        </div>
    </footer>
  )
}

export default Footer