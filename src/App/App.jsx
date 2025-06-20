import { HashRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import { Footer } from "./Footer/Footer";
import { NavBar } from './NavBar/NavBar';

function Layout({ children }) {
  return (
    <>
    <NavBar />
    <main>
      { children }
    </main>
    <Footer />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Layout> <h1>Hello World!!!</h1> </Layout>  } />
        <Route path="/about" element={ <Layout> <h1>About</h1> </Layout>  } />
        <Route path="/projects" element={ <Layout> <h1>Projects</h1> </Layout>  } />
        <Route path="/contact" element={ <Layout> <h1>Contact</h1> </Layout>  } />
      </Routes>
    </HashRouter>
  );
}

export default App;
