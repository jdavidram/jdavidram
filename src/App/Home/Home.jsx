import { FaLeaf } from "react-icons/fa6";
import "./home.scss";

function sticker() {
    const today = new Date();
    var src;
    if (today.getDate() === 14 && today.getMonth() === 1) {
        src = "love";
    } else if (today.getDate() === 16 && today.getMonth() === 3) {
        src = "celebrate";
    } else if (today.getDate() === 31 && today.getMonth() === 9) {
        src = "ghost";
    } else if (today.getDate() === 27 && today.getMonth() === 10) {
        src = "celebrate";
    } else if (today.getDate() === 24 && today.getMonth() === 11) {
        src = "christmas";
    } else if (today.getDate() === 25 && today.getMonth() === 11) {
        src = "christmas";
    } else if (today.getDate() === 31 && today.getMonth() === 11) {
        src = "celebrate";
    } else if (today.getDate() === 1 && today.getMonth() === 0) {
        src = "celebrate";
    } else {
        src = "hello";
    }
    return (src);
}

function Home({ theme }) {
    var img = sticker();
    return (
        <main id="home" className={ theme }>
            <div id="sticker" className={ img }>
                <img src={"./img/" + img + ".webp"} alt={ img } />
            </div>
            <article>
                <h1>Hi I'm <strong>JDavid Ram</strong></h1>
                {/* <span><FaLeaf /></span> */}
                <h2><FaLeaf /> environmental engineer</h2>
                <h3>Based in Medellin, Colombia</h3>
            </article>
        </main>
    );
}

export { Home };