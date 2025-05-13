import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaThreads } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { ReactComponent as Logo } from '../logo.svg';
import './Layout.scss';

function Layout({ Page }) {
    const [arrow, setArrow] = useState("right");
    return (
        <>
        <nav>
        <NavLink to={'/'} onClick={ () => setArrow(arrow == "right" ? "left" : "right") }>Home</NavLink>
        <NavLink to={'/about'} onClick={ () => setArrow(arrow == "right" ? "left" : "right") }>About</NavLink>
        <NavLink to={'/projects'} onClick={ () => setArrow(arrow == "right" ? "left" : "right") }>Projects</NavLink>
        <NavLink to={'/contact'} onClick={ () => setArrow(arrow == "right" ? "left" : "right") }>Contact</NavLink>
        </nav>
        <main className={ arrow }>
            <header>
                <span>
                    <FaRegArrowAltCircleRight id='arrow' onClick={ () => setArrow(arrow == "right" ? "left" : "right") } />
                </span>
                <span>
                    <Logo />
                    <h4>Jdavid.ram</h4>
                </span>
            </header>
            <footer>
                <ul>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaThreads />
                    </a></li>
                </ul>
            </footer>
            { Page }
        </main>
        </>
    )
}

export default Layout;