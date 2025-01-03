import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Layout } from "./Layout/Layout";
import { Home } from './Home/Home';
import { About } from './About/About';
import { Projects } from './Projects/Projects';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/projects' element={ <Projects /> } />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
