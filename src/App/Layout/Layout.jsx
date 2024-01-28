import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa6";
import { FaInstagram, FaThreads, FaLinkedin, FaGithub } from "react-icons/fa6";
import { ReactComponent as Logo } from "../logo.svg";
import "./layout.scss";

function Layout({ children, mode }) {
    const menu = {
        "frontend": [
            {"key": "0", "to": "/", "text": "home"},
            {"key": "1", "to": "/about/frontend", "text": "about"}
        ],
        "data": [
            {"key": "0", "to": "/", "text": "home"},
            {"key": "1", "to": "/about/data", "text": "about"}
        ],
        "environmental": [
            {"key": "0", "to": "/", "text": "home"},
            {"key": "1", "to": "/about/environmental", "text": "about"}
        ]
    };
    return (
        <Fragment>
            <nav id="navigator" className={ mode.split(" ")[0] }>
                <ul>
                    {menu[mode.split(" ")[0]].map((n) => (
                        <li key={ n.key } onClick={() => {
                            let nav = document.getElementById("navigator");
                            nav.style.bottom = "100vh";
                            nav.style.opacity = "0";
                        }}>
                            <NavLink to={ n.to }>{ n.text }</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <header className={ mode.split(" ")[0] }>
                <span>
                    <Logo />
                    <h3>jdavid.ram</h3>
                </span>
                <span onClick={() => {
                    let nav = document.getElementById("navigator");
                    nav.style.bottom = "0";
                    nav.style.opacity = "1";
                }}>
                    <FaArrowDown />
                    <p><strong>Menu</strong></p>
                </span>
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
        </Fragment>
    );
}

export { Layout };