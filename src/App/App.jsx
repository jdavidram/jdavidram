import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Error } from './Error/Error';

function App() {
  return (
    <HashRouter>
      <main>
        <Routes>
            <Route path='/' element={ <Error /> } />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
