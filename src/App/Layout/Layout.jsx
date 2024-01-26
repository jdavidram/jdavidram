import { Fragment } from "react";
import { FaInstagram, FaThreads, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { ReactComponent as Logo } from "../logo.svg";
import "./layout.scss";

function Layout({ children, mode }) {
    return (
        <Fragment>
            <header className={ mode.split(" ")[0] }>
                <span>
                    <Logo />
                    <h3>jdavid.ram</h3>
                </span>
                <span>
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