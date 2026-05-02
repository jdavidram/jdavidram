import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import './App.scss';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={ <Home /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
