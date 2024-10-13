import { ImStatsDots } from "react-icons/im";
import { FaLeaf, FaMapLocationDot } from "react-icons/fa6";
import hello from "../images/hi.webp";
import "./Home.scss";
import { useState } from "react";

function Home() {
    const [career, setCareer] = useState("Environmental Engineer");
    return (
        <section className="hello">
            <div id="hello">
                <img src={ hello } alt="" />
            </div>
            <span>
                <h1>Hi, I'm <strong>JDavid Ram</strong></h1>
                <h2 className={ career.split(" ")[0].toLowerCase() }>{ career }</h2>
                <ul>
                    <li>
                        <FaLeaf onClick={() => setCareer("Environmental Engineer")} />
                    </li>
                    <li>
                        <ImStatsDots onClick={() => setCareer("Data Analyst")} />
                    </li>
                    <li>
                        <FaMapLocationDot onClick={() => setCareer("GIS Specialist")} />
                    </li>
                </ul>
                <h3>Based in Medellin, Colombia</h3>
            </span>
        </section>
    );
}

export { Home }