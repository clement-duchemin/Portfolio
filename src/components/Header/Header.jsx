import { Link } from "react-router-dom";
//import pictures from '../../data/pictures'
//import { useState } from "react"








function Header() {

 

  return (
    <header className="headerWrapper">
     
        <nav className="nav-header">
            <Link to="/" className="nav-header_link-home">
                accueil
            </Link>
            <Link to="/contact" className="nav-header_link-about">
				        contact
			      </Link>
            <a href='https://drive.google.com/file/d/1qYax791UMrClPBS1y8DXbAQRikuHSxIv/view?usp=sharing'
             alt="lien-CV" download target="_blank" rel="noreferrer" 
             className="nav-header_link-cv">CV</a>
        </nav>
    </header>
  )
}

export default Header