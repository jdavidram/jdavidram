import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Layout } from './Layout/Layout';
import { Error } from './Error/Error';
import { Home } from './Home/Home';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/*' element={ <Error /> } />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
