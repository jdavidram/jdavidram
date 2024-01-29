import { Fragment } from "react";
import { FaReact, FaChartLine, FaLeaf } from "react-icons/fa6";
import "./home.scss";

function Home({ mode, setMode, lang }) {
    const today = new Date();
    var dir = "";
    if (today.getDate() === 14 && today.getMonth() === 1) {
        dir = "love";
    } else if (today.getDate() === 16 && today.getMonth() === 3) {
        dir = "celebrate";
    } else if (today.getDate() === 31 && today.getMonth() === 9) {
        dir = "ghost";
    } else if (today.getDate() === 27 && today.getMonth() === 10) {
        dir = "celebrate";
    } else if (today.getDate() === 24 && today.getMonth() === 11) {
        dir = "christmas";
    } else if (today.getDate() === 25 && today.getMonth() === 11) {
        dir = "christmas";
    } else if (today.getDate() === 31 && today.getMonth() === 11) {
        dir = "celebrate";
    } else if (today.getDate() === 1 && today.getMonth() === 0) {
        dir = "celebrate";
    } else {
        dir = "hello";
    }
    const translate = {
        "frontend developer": "frontend developer",
        "data analyst": "analista de datos",
        "environmental engineer": "ingeniero ambiental"
    };
    var hello;
    if (lang === "es") {
        hello = ["Hola, Soy", "Vivo en Medellin, Colombia"];
    } else {
        hello = ["Hi, I'm", "Based in Medellin, Colombia"];
    }
    return (
        <Fragment>
            <aside className={ mode.split(" ")[0] }>
                <img src={"./img/" + dir + ".webp"} alt="profile" />
            </aside>
            <main id="home">
                <h1>{ hello[0] } <strong className={ mode.split(" ")[0] }>JDAVID RAM</strong></h1>
                <span>
                    <ul>
                        <li><FaReact onMouseOver={() => {
                            let career = "frontend developer";
                            localStorage.setItem("MODE", career);
                            setMode(career);
                        }} /></li>
                        <li><FaChartLine onMouseOver={() => {
                            let career = "data analyst";
                            localStorage.setItem("MODE", career);
                            setMode(career);
                        }} /></li>
                        <li><FaLeaf onMouseOver={() => {
                            let career = "environmental engineer";
                            localStorage.setItem("MODE", career);
                            setMode(career);
                        }} /></li>
                    </ul>
                    <h2 className={ mode.split(" ")[0] }>{ lang === "es" ? translate[mode] : mode }</h2>
                </span>
                <h3>{ hello[1] }</h3>
            </main>
        </Fragment>
    );
}

export { Home };