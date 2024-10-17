import { FaBars, FaInstagram, FaLinkedin, FaGithub, FaThreads } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../logo.svg";
import "./Layout.scss";

function Layout({ children }) {
    function showNav(left) {
        var universe = document.getElementById("root");
        console.log(universe.style.left);
        if (universe.style.left === "" || universe.style.left === "0px") {
            universe.style.left = "calc(100vw - 50px)";
        } else {
            universe.style.left = "0px";
        }
    }
    return (
        <>
        <header>
            <span className="nav">
                <FaBars onClick={() => showNav()} />
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
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
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