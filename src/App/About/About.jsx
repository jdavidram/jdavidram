import { SiQgis, SiPostgresql, SiGoogledatastudio, SiJavascript, SiGooglecloud } from "react-icons/si";
import { FaHillRockslide, FaSeedling, FaMapLocationDot, FaVialCircleCheck } from "react-icons/fa6";
import { FaPython, FaRProject, FaCloudSunRain, FaDownload } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaBolt } from "react-icons/fa6";
import "./about.scss";

function AboutEnv() {
    return (
        <main id="environmental">
            <section>
                <aside className="environmental">
                    <img src="./img/engineer.webp" alt="engineer" />
                </aside>
                <article>
                    <p>Hola!<br />soy <strong>david ramirez</strong>, un <strong>ingeniero ambiental</strong> egresado de la Universidad Nacional de Colombia en la Sede Medellin.<br />Con una solida formacion en ciencias y herramientas tecnologicas para el analisis y diseño de proyectos.<br />Gracias a mis conocimientos avanzados en <strong>sistemas de informacion geografica</strong> para el analisis de datos ambientales y la gestion del riesgo en los territorios, aportando a <strong>planes de manejo territorial</strong> o a <strong>proyectos empresariales</strong> reduciendo sus impactos sobre los ecosistemas, las comunidades y los recursos naturales.<br />Utilizando las siguientes herramientas:</p>
                    <ul>
                        <li><FaPython />python</li>
                        <li><SiQgis />qgis</li>
                        <li><FaCloudSunRain />gestion de la calidad del aire</li>
                        <li><FaHillRockslide />gestion del riesgo</li>
                        <li><FaVialCircleCheck />analisis fisicoquimico</li>
                        <li><FaSeedling />ecotoxicologia</li>
                        <li><FaMapLocationDot />planes de manejo ambiental</li>
                    </ul>
                    <p>Espero trabajar contigo, para hacer un mundo mas <strong>sostenible</strong></p>
                    <br />
                    <a href="#/">
                        <p><FaDownload /> Hoja de vida</p>
                    </a>
                </article>
            </section>
        </main>
    );
}

function AboutData() {
    return (
        <main id="data">
            <section>
                <aside className="data">
                    <img src="./img/dev.webp" alt="analyst" />
                </aside>
                <article>
                    <p>Hola!<br />soy <strong>jDavid ramirez</strong>, un <strong>cientifico de datos</strong> apasionado y altamente capacitado, con experiencia en el analisis y la interpretacion de grandes conjuntos de datos.<br />Me especializo en el manejo de herramientas <strong>SIG</strong>, programacion, estadistica y visualizacion de datos.<br />He aprendido a transformar datos complejos en informacion valiosa para la toma de decisiones.<br />Mi formacion en <strong>platzi</strong> me ha permitido desarrollar habilidades en el manejo de herramientas como:</p>
                    <ul>
                        <li><FaPython />python</li>
                        <li><SiQgis />qgis</li>
                        <li><FaRProject />r</li>
                        <li><SiPostgresql />sql</li>
                        <li><SiGoogledatastudio />google data studio</li>
                    </ul>
                    <p>Si buscas un profesional que pueda ayudarte a transformar tus datos en conocimiento<br />No dudes en contactarme!</p>
                    <br />
                    <a href="#/">
                        <p><FaDownload /> Hoja de vida</p>
                    </a>
                </article>
            </section>
        </main>
    );
}

function AboutDev() {
    return (
        <main id="frontend">
            <section>
                <aside className="frontend">
                    <img src="./img/dev.webp" alt="developer" />
                </aside>
                <article>
                    <p>Hola!<br />Soy <strong>jDavid Ramirez</strong>, un <strong>desarrollador frontend</strong> egresado de <strong>platzi</strong>.<br />Tengo habilidades en el desarrollo de aplicaciones web interactivas y responsivas. Manejando las siguientes herramientas:</p>
                    <ul>
                        <li><FaHtml5 />html</li>
                        <li><FaCss3Alt />css</li>
                        <li><FaSass />sass</li>
                        <li><SiJavascript />javascript</li>
                        <li><FaReact />react</li>
                        <li><FaBolt />fastapi</li>
                        <li><SiGooglecloud />google cloud</li>
                    </ul>
                    <p>Soy capaz de trabajar en equipo y adaptarme a los cambios.<br />Estoy listo para llevar tus proyectos a otro nivel!</p>
                    <br />
                    <a href="#/">
                        <p><FaDownload /> Hoja de vida</p>
                    </a>
                </article>
            </section>
        </main>
    );
}

function About({ mode }) {
    if (mode === "environmental engineer") {
        return (
            <AboutEnv />
        );
    } else if (mode === "data analyst") {
        return (
            <AboutData />
        );
    } else {
        return (
            <AboutDev />
        );
    }
}

export { About };