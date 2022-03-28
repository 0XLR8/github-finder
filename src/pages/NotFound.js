import { FaSlackHash } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="notfound mb-md-4 mb-0 flex-grow-1 d-flex align-items-center justify-content-center">
            <div className="container">
                <h1>Oops!</h1>
                <h2><FaSlackHash className="icon"/> 404 - Page not found.</h2>
                <Link to="/">BACK HOME</Link>
            </div>
        </div>
    )
}

export default NotFound;