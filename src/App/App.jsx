import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import { Layout } from "./Layout/Layout";
import { Home } from "./Home/Home";
import { About } from "./About/About";

function App() {
  const [theme, setTheme] = useState("dark");
  const [mode, setMode] = useState("environmental engineer");
  return (
    <HashRouter>
      <Layout theme={ theme } setTheme={ setTheme }>
      <Routes>
        <Route path="/" element={
          <Home theme={ theme } mode={ mode } setMode={ setMode } />
        } />
        <Route path="/about" element={
          <About />
        } />
        <Route path="/*" element={<h1 id="error">ERROR 404</h1>} />
      </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;