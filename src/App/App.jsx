import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Layout } from "./Layout/Layout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <h1>Hola Mundo!!!</h1> } />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
