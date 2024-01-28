import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import { Home } from "./Home/Home";
import { Layout } from "./Layout/Layout";

function App() {
  let career;
  if (!localStorage.getItem("MODE")) {
    career = "environmental engineer";
    localStorage.setItem("MODE", career);
  } else {
    career = localStorage.getItem("MODE");
  }
  const [mode, setMode] = useState(career);
  return (
    <HashRouter>
      <Layout mode={mode}>
      <Routes>
        <Route path="/" element={
          <Home mode={ mode } setMode={ setMode } />
        } />
        <Route path="/*" element={<h1 id="error">ERROR 404</h1>} />
      </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
