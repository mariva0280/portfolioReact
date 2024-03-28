import { useState } from "react"
import { Link } from "react-router-dom"


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header>
        <nav className="navbar">
        <div className="brand">
            <h2>V<span>F</span></h2>
        </div>
    
        <ul className={`menu ${isMenuOpen ? 'show-menu' : ''}`}>
            <li>
                <Link to="/">About me</Link>
            </li>
    
            <li>
                <Link to="/estudios">Studies</Link> 
            </li>
            
            <li >
                <Link to= "/proyectos">Projects</Link>
            </li>
            <li>
                <Link to="/skills">Skills</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="nav-toggle">
            <i className="fas fa-bars" id="toggle_open" onClick={toggleMenu}></i>
            <i className="fas fa-times" id="toggle_close" onClick={toggleMenu}></i>
        </div>
        </nav>
       
    </header> 
    )
}
