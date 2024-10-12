import hello from "../images/hi.webp";
import "./Home.scss";

function Hello() {
    return (
        <section className="hello">
            <div id="hello">
                <img src={ hello } alt="" />
            </div>
            <span>
                <h1>Hi, I'm <strong>JDavid Ram</strong></h1><h2>Environmental Engineer</h2>
            </span>
        </section>
    );
}

function About() {
    return (
        <section className="about">
            <h1>About</h1>
        </section>
    );
}

//function Hello() {
//    return ();
//}

function Home() {
    return (
        <>
        <Hello />
        <About />
        </>
    );
}

export { Home }