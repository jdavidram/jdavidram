import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa6";
import { FaInstagram, FaThreads, FaLinkedin, FaGithub } from "react-icons/fa6";
import { ReactComponent as Logo } from "../logo.svg";
import "./layout.scss";

function Layout({ children, mode, lang }) {
    var menu;
    if (lang === "es") {
        menu = {
            "frontend": [
                {"to": "/", "text": "home"},
                {"to": "/about", "text": "sobre mi"},
                {"to": "/portfolio", "text": "portafolio"}
            ],
            "data": [
                {"to": "/", "text": "home"},
                {"to": "/about", "text": "sobre mi"},
                {"to": "/courses", "text": "cursos"}
            ],
            "environmental": [
                {"to": "/", "text": "home"},
                {"to": "/about", "text": "sobre mi"},
                {"to": "/courses", "text": "cursos"}
            ]
        };
    } else {
        menu = {
            "frontend": [
                {"to": "/", "text": "home"},
                {"to": "/about", "text": "about me"},
                {"to": "/portfolio", "text": "portfolio"}
            ],
            "data": [
                {"to": "/", "text": "home"},
                {"to": "/about", "text": "about me"},
                {"to": "/courses", "text": "courses"}
            ],
            "environmental": [
                {"to": "/", "text": "home"},
                {"to": "/about", "text": "about me"},
                {"to": "/courses", "text": "courses"}
            ]
        };
    }
    return (
        <Fragment>
            <nav id="navigator" className={ mode.split(" ")[0] }>
                <ul>
                    {menu[mode.split(" ")[0]].map((n) => (
                        <li key={ menu[mode.split(" ")[0]].indexOf(n) } onClick={() => {
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