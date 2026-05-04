import "./Home.scss";
import { Layout } from "../Layout/Layout";
import hello from "../img/hello.webp";

function Home() {
    return (
        <Layout>
            <figure>
                <img src={ hello } alt="Hello" />
            </figure>
        </Layout>
    );
}

export { Home }