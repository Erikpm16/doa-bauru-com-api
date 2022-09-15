import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/site/Home";
import Login from "./pages/site/Login";
import Instituicoes from "./pages/site/Instituicoes";
import Form from "./pages/admin/Formulario";
import HomePage from "./pages/site/HomePage";
import Map from "./pages/site/Map";
import CardDetalhes from "./pages/site/CardDetalhes";
import QuemSomos from "./pages/site/QuemSomos";
import Cadastro from "./pages/admin/Formulario";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="/quemsomos" element={<QuemSomos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mapa" element={<Map />} />
          <Route path="/instituicoes" element={<Instituicoes />} />
          <Route path="/instituicoes/:id" element={<CardDetalhes />} />
          <Route path="/form" element={<Cadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
