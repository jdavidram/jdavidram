import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout';
import Home from './Home/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout Page={ <Home /> } />} />
        <Route path='/about' element={<Layout />} />
        <Route path='/projects' element={<Layout />} />
        <Route path='/contact' element={<Layout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;