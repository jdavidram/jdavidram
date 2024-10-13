import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Layout } from './Layout/Layout';
import { Error } from './Error/Error';
import { Home } from './Home/Home';
import { About } from './About/About';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/*' element={ <Error /> } />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
