import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="headerWrapper">
        <div className="ribbon-wrapper">
          <span className="ribbon">portfolio-portfolio-portfolio</span>
        </div>
        <nav className="nav-header">
            <Link to="/" className="nav-header_link-home">
                accueil
            </Link>
            <Link to="/contact" className="nav-header_link-about">
				        contact
			      </Link>
        </nav>
    </header>
  )
}

export default Header