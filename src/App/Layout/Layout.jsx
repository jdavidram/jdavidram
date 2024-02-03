import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaSun, FaMoon, FaInstagram, FaThreads, FaLinkedin, FaGithub, FaLeaf } from "react-icons/fa6";
import { ReactComponent as Logo } from "../logo.svg";
import "./layout.scss";

function showAside(toDo) {
    let app = document.getElementById("app");
    if (toDo === "show") {
        app.style.top = "10px";
        let xyz = window.screen.width - 50;
        app.style.left = xyz.toString() + "px";
        app.style.bottom = "10px";
        app.style.borderRadius = "20px";
    } else {
        app.style.top = "0";
        app.style.left = "0";
        app.style.bottom = "0";
        app.style.borderRadius = "0";
    }
}

function SwitchB({ theme, setTheme }) {
    const switchTheme = {
        "dark": "light",
        "light": "dark"
    };
    if (theme === "dark") {
        return (
            <FaSun onClick={() => {
                setTheme(switchTheme[theme]);
            }} />
        );
    } else {
        return (
            <FaMoon onClick={() => {
                setTheme(switchTheme[theme]);
            }} />
        );
    }
}

function Layout({ children, theme, setTheme }) {
    return (
        <Fragment>
            <aside>
                <ul>
                    <li><NavLink to="/" onClick={() => {showAside("hide")}}>home</NavLink></li>
                    <li><NavLink to="/about" onClick={() => {showAside("hide")}}>about me</NavLink></li>
                    <li><NavLink to="/courses" onClick={() => {showAside("hide")}}>courses</NavLink></li>
                    <li><NavLink to="/portfolio" onClick={() => {showAside("hide")}}>portfolio</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => {showAside("hide")}}>contact</NavLink></li>
                </ul>
            </aside>
            <div id="app" className={ theme }>
                <header>
                    <span>
                        <Logo />
                        <h4>jdavid.ram</h4>
                    </span>
                    <nav>
                        <FaLeaf />
                        <SwitchB theme={ theme } setTheme={ setTheme } />
                        <FaBars onClick={() => {showAside("show")}} />
                    </nav>
                </header>
                { children }
                <footer>
                    <ul>
                        <li><a href="https://www.instagram.com/jdavid.ram?igsh=bmE0NTFidzdhdmZt&utm_source=qr" target="_blanck">
                            <FaInstagram />
                        </a></li>
                        <li><a href="https://www.threads.net/@jdavid.ram" target="_blanck">
                            <FaThreads />
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/david-ramirez-rodriguez?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blanck">
                            <FaLinkedin />
                        </a></li>
                        <li><a href="https://github.com/jdavidram" target="_blanck">
                            <FaGithub />
                        </a></li>
                    </ul>
                </footer>
            </div>
        </Fragment>
    );
}

export { Layout };