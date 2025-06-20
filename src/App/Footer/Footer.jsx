import { FaInstagram, FaLinkedin, FaGithub, FaThreads } from "react-icons/fa6";
import "./Footer.scss";

function Footer() {
    return (
        <footer>
            <ul>
                <li><a href="http://#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
                </a></li>
                <li><a href="http://#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                </a></li>
                <li><a href="http://#" target="_blank" rel="noopener noreferrer">
                <FaGithub />
                </a></li>
                <li><a href="http://#" target="_blank" rel="noopener noreferrer">
                <FaThreads />
                </a></li>
            </ul>
        </footer>
    );
}

export { Footer };