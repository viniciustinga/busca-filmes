import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { Home, Movie, Search } from "./pages/index.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/busca-filmes" element={<Home />} />
          <Route path="/busca-filmes/movie/:id" element={<Movie />} />
          <Route path="/busca-filmes/search" element={<Search />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
