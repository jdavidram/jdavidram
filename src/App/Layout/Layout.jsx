import { FaSquareInstagram, FaLinkedin, FaSquareGithub, FaSquareThreads } from "react-icons/fa6";
import { ReactComponent as Logo } from "../logo.svg";
import "./Layout.scss";

function Layout({ children }) {
    return (
        <main>
            <header>
                <span>
                    <Logo />
                    <p>jdavid.ram</p>
                </span>
            </header>
            <footer>
                <a href="https://www.instagram.com/jdavid.ram/" target="_blank" rel="noopener noreferrer">
                    <FaSquareInstagram />
                </a>
                <a href="https://www.linkedin.com/in/david-ramirez-rodriguez/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/jdavidram" target="_blank" rel="noopener noreferrer">
                    <FaSquareGithub />
                </a>
                <a href="https://www.threads.com/@jdavid.ram" target="_blank" rel="noopener noreferrer">
                    <FaSquareThreads />
                </a>
            </footer>
            <section>{ children }</section>
        </main>
    );
}

export { Layout };