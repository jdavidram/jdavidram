import { Fragment } from "react";
import { FaReact, FaChartLine, FaLeaf } from "react-icons/fa6";
import "./home.scss";

function Home({ mode, setMode }) {
    const today = new Date();
    var dir = "";
    if (today.getDate() === 16 && today.getMonth() === 3) {
        dir = "celebrate";
    } else {
        dir = "hello";
    }
    return (
        <Fragment>
            <aside className={ mode.split(" ")[0] }>
                <img src={"./img/" + dir + ".webp"} alt="profile" />
            </aside>
            <main>
                <h1>Hi, I'm <strong className={ mode.split(" ")[0] }>JDAVID RAM</strong></h1>
                <span>
                    <ul>
                        <li><FaReact onMouseOver={() => {
                            setMode("frontend developer");
                        }} /></li>
                        <li><FaChartLine onMouseOver={() => {
                            setMode("data analyst");
                        }} /></li>
                        <li><FaLeaf onMouseOver={() => {
                            setMode("environmental engineer");
                        }} /></li>
                    </ul>
                    <h2 className={ mode.split(" ")[0] }>{ mode }</h2>
                </span>
                <h3>Based in Medellin, Colombia</h3>
            </main>
        </Fragment>
    );
}

export { Home };