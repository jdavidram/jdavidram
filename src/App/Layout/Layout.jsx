import { FaGithub, FaLinkedin, FaInstagram, FaThreads } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { ReactComponent as Logo } from "../logo.svg";
import "./Layout.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Layout() {
    const [dir, setDir] = useState("right");
    const trans = {"right": "left", "left": "right"};
    return (
        <>
        <aside>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/">About</NavLink>
                </li>
                <li>
                    <NavLink to="/">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/">Contact</NavLink>
                </li>
            </ul>
        </aside>
        <main className={ dir }>
            <nav>
                <span>
                    <Logo />
                    <p>jdavid.ram</p>
                </span>
            </nav>
            <footer>
                <ul>
                    <li>
                        <FaRegArrowAltCircleRight className={ dir } onClick={ () => setDir(trans[dir]) } />
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaThreads />
                        </a>
                    </li>
                </ul>
            </footer>
        </main>
        </>
    );
}

export { Layout };