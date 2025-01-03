import { FaGithub, FaLinkedin, FaInstagram, FaThreads } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { ReactComponent as Logo } from "../logo.svg";
import "./Layout.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Layout({ children }) {
    const [dir, setDir] = useState("right");
    const trans = {"right": "left", "left": "right"};
    return (
        <>
        <aside>
            <ul>
                <li onClick={ () => setDir(trans[dir]) }>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li onClick={ () => setDir(trans[dir]) }>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li onClick={ () => setDir(trans[dir]) }>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li onClick={ () => setDir(trans[dir]) }>
                    <NavLink to="#">Contact</NavLink>
                </li>
            </ul>
        </aside>
        <div id="universe" className={ dir }>
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
                        <a href="https://github.com/jdavidram" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/david-ramirez-rodriguez/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/jdavid.ram/profilecard/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.threads.net/@jdavid.ram?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank" rel="noopener noreferrer">
                            <FaThreads />
                        </a>
                    </li>
                </ul>
            </footer>
            { children } {/* TODO DEBE IR DENTRO DE UNA ETIQUETA MAIN */}
        </div>
        </>
    );
}

export { Layout };