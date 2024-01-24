import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import { Home } from "./Home/Home";
import { Layout } from "./Layout/Layout";

function App() {
  const [mode, setMode] = useState("frontend developer");
  return (
    <HashRouter>
      <Layout mode={mode}>
      <Routes>
        <Route path="/" element={
          <Home mode={ mode } setMode={ setMode } />
        } />
        <Route path="/*" element={<h1>Error 404</h1>} />
      </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
