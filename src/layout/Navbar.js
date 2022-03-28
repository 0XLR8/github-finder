import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="nav-bar">
            <div className="container d-flex justify-content-between align-items-center">
                <h1><FaGithub className="icon" /> Github Finder</h1>
                <div className="links">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;