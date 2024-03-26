import { Link } from "react-router-dom"


export const Header = () => {
    return (
        <header>
        <nav className="navbar">
        <div className="brand">
            <h2>V<span>F</span></h2>
        </div>
    
        <ul className="menu responsive">
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
        </nav>
       
    </header> 
    )
}
