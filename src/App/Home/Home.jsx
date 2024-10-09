import hello from "../logo.svg";
import "./Home.scss";

function Hello({ lang }) {
    switch (lang) {
        case "en":
            return (<span>
                    <h1>Hi, I'm <strong>JDavid Ram</strong></h1><h2>Environmental Engineer</h2>
                </span>);
            break;
        default:
            return (<span>
                    <h1>Hola, Soy <strong>JDavid Ram</strong></h1><h2>Ingeniero ambiental</h2>
                </span>);
            break;
    }
}

function Home() {
    const lang = navigator.language;
    return (
        <>
        <div id="hello">
            <img src={ hello } alt="" />
        </div>
        <Hello lang={ lang } />
        </>
    );
}

export { Home }