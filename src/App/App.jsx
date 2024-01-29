import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import { Layout } from "./Layout/Layout";
import { Home } from "./Home/Home";

function App() {
  let career;
  if (!localStorage.getItem("MODE")) {
    career = "environmental engineer";
    localStorage.setItem("MODE", career);
  } else {
    career = localStorage.getItem("MODE");
  }
  const [mode, setMode] = useState(career);
  const lang = navigator.language.split("-")[0];
  return (
    <HashRouter>
      <Layout mode={mode} lang={lang}>
      <Routes>
        <Route path="/" element={
          <Home mode={ mode } setMode={ setMode } lang={lang} />
        } />
        <Route path="/*" element={<h1 id="error">ERROR 404</h1>} />
      </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
