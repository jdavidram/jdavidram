import { FaSquareInstagram, FaLinkedin, FaSquareGithub, FaSquareThreads } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { GiMonsteraLeaf } from "react-icons/gi";
import { ReactComponent as Logo } from "../logo.svg";
import "./Layout.scss";

function Layout({ children }) {
    const moveNav = () => {
        let universe = document.getElementById('universe');
        let arrow = document.getElementById('arrow');
        if (universe.style.left != 'calc(-50px + 100vw)') {
            universe.style.left = 'calc(-50px + 100vw)';
            arrow.style.transform = 'rotate(-180deg)';
        } else {
            universe.style.left = '0px';
            arrow.style.transform = 'rotate(0deg)';
        }
    };
    return (
        <main id="universe">
            <header>
                <span>
                    <FaRegArrowAltCircleRight id="arrow" onClick={ () => moveNav() } />
                </span>
                <span>
                    <GiMonsteraLeaf id="logo" />
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