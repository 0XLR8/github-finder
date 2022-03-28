import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="footer py-4 mt-auto text-center">
            <div className="container">
                <FaGithub className="icon" />
                <p>Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;