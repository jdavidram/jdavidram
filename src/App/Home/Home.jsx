import { Layout } from "../Layout/Layout";
import hello from "./hello.webp";
import "./Home.scss";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { FaChartArea, FaWaveSquare, FaChartPie, FaWater } from "react-icons/fa6";


function Header({ course }) {
    const msg = "La materia no se pierde ni se destruye, se gana este semestre";
    return (
        <header>
            <div id="hello">
                <figure>
                    <img src={ hello } alt="" />
                </figure>
            </div>
            <aside>
                <h1>¡Aprende <strong>{ course }</strong> sin morir en el intento!</h1>
            </aside>
        </header>
    );
}

function Courses({ courses }) {
    return (
        <article>
            <h2>Cursos y asesorías disponibles</h2>
            { courses.map((course, i) => {
                return (
                    <div className="course" key={ i }>
                        { course.icon }
                        <p>{ course.name }</p>
                    </div>
                );
            }) }
        </article>
    );
}

function Home() {
    const process = [{
        icon: <GrGraphQl />,
        name: "Algebra lineal"
    }, {
        icon: <FaChartPie />,
        name: "Estadistica"
    }, {
        icon: <FaWater />,
        name: "Mecánica de fluidos"
    }];
    const courses = [{
        icon: <TbTriangleSquareCircleFilled />,
        name: "Matemáticas básicas"
    }, {
        icon: <FaChartArea />,
        name: "Cálculo integral"
    }, {
        icon: <FaWaveSquare />,
        name: "Ecuaciones diferenciales"
    }];
    var random = courses[Math.floor(Math.random()*courses.length)];
    return (
        <Layout>
            <Header course={ random.name } />
            <Courses courses={ courses } />
        </Layout>
    );
}

export { Home };