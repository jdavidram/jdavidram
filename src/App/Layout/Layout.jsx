import { FaInstagram, FaLinkedin, FaGithub, FaThreads } from "react-icons/fa6";
import { ReactComponent as Logo } from "../logo.svg";
import "./Layout.scss";

function Layout({ children }) {
    return (
        <>
        <header>
            <span>
                <Logo />
                <h3>jdavid.ram</h3>
            </span>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                </ul>
            </nav>
        </header>
        <footer>
            <ul>
                <li><a href="#">
                    <FaInstagram />
                </a></li>
                <li><a href="#">
                    <FaLinkedin />
                </a></li>
                <li><a href="#">
                    <FaGithub />
                </a></li>
                <li><a href="#">
                    <FaThreads />
                </a></li>
            </ul>
        </footer>
        <main>
            { children }
        </main>
        </>
    );
}

export { Layout };