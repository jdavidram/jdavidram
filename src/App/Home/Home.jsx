import { FaReact, FaLeaf } from "react-icons/fa6";
import "./home.scss";

function Home({ theme, mode, setMode }) {
    return (
        <main id="home">
            <div className="hello">
                <img src="./img/hello.webp" alt="hello" />
            </div>
            <article className={ theme }>
                <h1>Hi I'm <strong>JDavid Ram</strong></h1>
                <span>
                    <FaReact onMouseOver={() => setMode("frontend developer")} />
                    <FaLeaf onMouseOver={() => setMode("environmental engineer")} />
                </span>
                <h2>{ mode }</h2>
                <h3>Based in Medellin, Colombia</h3>
            </article>
        </main>
    );
}

export { Home };