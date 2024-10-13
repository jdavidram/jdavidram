import { FaBars, FaInstagram, FaLinkedin, FaGithub, FaThreads } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Logo } from "../logo.svg";
import "./Layout.scss";

function Layout({ children }) {
    const [left, setLeft] = useState("0px");
    function showNav(left) {
        var universe = document.getElementById("root");
        if (left === "0px" || universe.style.left != "calc(100vw - 50px)") {
            universe.style.left = "calc(100vw - 50px)";
            universe.style.borderRadius = "10px";
            setLeft("calc(100vw - 50px)");
        } else {
            universe.style.left = "0px";
            universe.style.borderRadius = "0px";
            setLeft("0px");
        }
    }
    return (
        <>
        <header>
            <span className="nav">
                <FaBars onClick={() => showNav(left)} />
            </span>
            <span className="logo">
                <Logo />
                <h3>jdavid.ram</h3>
            </span>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <footer>
            <ul>
                <li><a target="_blanck" href="https://www.instagram.com/jdavid.ram">
                    <FaInstagram />
                </a></li>
                <li><a target="_blanck" href="https://www.linkedin.com/in/david-ramirez-rodriguez">
                    <FaLinkedin />
                </a></li>
                <li><a target="_blanck" href="https://github.com/jdavidram">
                    <FaGithub />
                </a></li>
                <li><a target="_blanck" href="https://www.threads.net/@jdavid.ram">
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