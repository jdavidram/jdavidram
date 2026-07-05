import { FaSquareInstagram, FaLinkedin, FaSquareGithub, FaSquareThreads } from "react-icons/fa6";
import { ReactComponent as Logo } from "../logo.svg";
import "./Layout.scss";

function Nav() {
    return (
        <nav>
            <span>
                <Logo />
                <h1>jdavid.ram</h1>
                <p>Tu mejor apoyo en la U</p>
            </span>
            <a href="https://wa.me/573113578185?text=Hola%20Quiero%20agendar" target="_blank" rel="noopener noreferrer">
                <p>Contacto</p>
            </a>
        </nav>
    );
}

function Footer() {
    return (
        <footer>
            <p>Sigueme para más contenido</p>
            <ul>
                <li>
                    <a href="https://www.instagram.com/jdavid.ram?igsh=bmE0NTFidzdhdmZt&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <FaSquareInstagram />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/david-ramirez-rodriguez/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jdavidram" target="_blank" rel="noopener noreferrer">
                        <FaSquareGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.threads.com/@jdavid.ram?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                        <FaSquareThreads />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

function Layout({ children }) {
    return (
        <>
        <Nav />
        { children }
        <Footer />
        </>
    );
}

export { Layout };