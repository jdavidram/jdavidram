import { FaHillRockslide, FaSeedling, FaMapLocationDot, FaVialCircleCheck, FaPython, FaCloudSunRain } from "react-icons/fa6";
import { SiQgis } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";
import "./about.scss";

function About({ theme }) {
    return (
        <main id="about" className={ theme }>
            <section className="header">
                <article>
                    <h2><strong>Hola!!</strong><br />Espero trabajar contigo, para hacer un mundo mas <strong>sostenible</strong></h2>
                    <p>Soy <strong>david ramirez</strong>, un <strong>ingeniero ambiental</strong> egresado de la Universidad Nacional de Colombia en la Sede Medellin.<br />Con una solida formacion en ciencias y herramientas tecnologicas para el analisis y diseño de proyectos.</p>
                    <span><a href="#" target="_blank">
                        <FaDownload /> Hoja de Vida
                    </a></span>
                </article>
                <div id="sticker" className="engineer">
                    <img src="./img/engineer.webp" alt="engineer" />
                </div>
            </section>
            <section className="skills">
                <h1>Skills</h1>
                <article>
                    <ul>
                        <li>
                            <FaPython /><p>python</p>
                        </li>
                        <li>
                            <SiQgis /><p>qgis</p>
                        </li>
                        <li>
                            <FaCloudSunRain /><p>gestion de la calidad del aire</p>
                        </li>
                        <li>
                            <FaHillRockslide /><p>gestion del riesgo</p>
                        </li>
                        <li>
                            <FaVialCircleCheck /><p>analisis fisicoquimico</p>
                        </li>
                        <li>
                            <FaSeedling /><p>ecotoxicologia</p>
                        </li>
                        <li>
                            <FaMapLocationDot /><p>planes de manejo ambiental</p>
                        </li>
                    </ul>
                    <p>Gracias a mis conocimientos avanzados en <strong>sistemas de informacion geografica</strong> puedo aportar al analisis de datos ambientales y la gestion del riesgo en los territorios, aportando a Planes de Manejo Territorial o a Proyectos Empresariales reduciendo sus impactos sobre los <strong>ecosistemas</strong>, las <strong>comunidades</strong> y los <strong>recursos naturales</strong>.</p>
                </article>
            </section>
            <section className="experience">
                <h1>Experience</h1>
                <article>
                    <div className="card">
                        <a href="/">
                            <h2>Universidad Nacional de Colombia</h2>
                        </a>
                        <p>1/Aug/2022 - 5/Feb/2024</p>
                        <strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga obcaecati debitis perferendis suscipit optio minus repellat, nulla, nihil distinctio ipsum accusantium provident laborum doloremque quis dignissimos beatae adipisci soluta libero.</strong>
                    </div>
                </article>
            </section>
            <section className="education">
                <h1>Education</h1>
                <ul>
                    <li><strong>UNAL</strong> - Ingenieria Ambiental</li>
                    <li><strong>Platzi</strong> - Data Scientist</li>
                    <li><strong>Platzi</strong> - Data Analyst</li>
                    <li><strong>Platzi</strong> - Frontend Developer</li>
                </ul>
            </section>
        </main>
    );
}

export { About };