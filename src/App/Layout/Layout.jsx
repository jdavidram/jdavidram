import { FaInstagram, FaLinkedin, FaGithub, FaThreads } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReactComponent as Logo } from "../logo.svg";
import "./Layout.scss";

function Header() {
    return (
        <header>
            <span className="logo">
                <Logo />
                <p>jdavid.ram</p>
            </span>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
                <span className="menu">
                    <GiHamburgerMenu />
                </span>
            </nav>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://www.instagram.com/jdavid.ram" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/david-ramirez-rodriguez" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jdavidram" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.threads.com/@jdavid.ram" target="_blank" rel="noopener noreferrer">
                        <FaThreads />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

function Layout({ children }) {
    return (
        <>
        <Header />
        <Footer />
        </>
    );
}

export { Layout };