import { Fragment, useState } from "react";
import { FaReact, FaChartLine, FaLeaf } from "react-icons/fa6";
import { FaInstagram, FaThreads, FaLinkedin, FaGithub } from "react-icons/fa6";
import { ReactComponent as Logo } from "./logo.svg";
import './App.scss';

function App() {
  const [skill, setSkill] = useState("environmental engineer");
  return (
    <Fragment>
      <header>
        <span>
          <Logo />
          <h3>jdavid.ram</h3>
        </span>
      </header>
      <aside>
        <img src="./img/hello.webp" alt="" />
      </aside>
      <main>
        <h1>Hi, I'm <strong>JDAVID RAM</strong></h1>
        <div id="skill">
          <ul>
            <li>
              <FaReact onMouseOver={() => {
                setSkill("frontend developer");
              }} />
            </li>
            <li>
              <FaChartLine onMouseOver={() => {
                setSkill("data analyst");
              }} />
            </li>
            <li>
              <FaLeaf onMouseOver={() => {
                setSkill("environmental engineer");
              }} />
            </li>
          </ul>
          <h2 className={ skill.split(" ")[0] }>{ skill }</h2>
        </div>
        <h3>Based in Medellin, Colombia</h3>
      </main>
      <footer>
        <ul>
          <li><a href="https://www.instagram.com/jdavid.ram?igsh=bmE0NTFidzdhdmZt&utm_source=qr" target="_blanck">
            <FaInstagram />
          </a></li>
          <li><a href="https://www.threads.net/@jdavid.ram" target="_blanck">
            <FaThreads />
          </a></li>
          <li><a href="https://www.linkedin.com/in/david-ramirez-rodriguez?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blanck">
            <FaLinkedin />
          </a></li>
          <li><a href="https://github.com/jdavidram" target="_blanck">
            <FaGithub />
          </a></li>
        </ul>
      </footer>
    </Fragment>
  );
}

export default App;
