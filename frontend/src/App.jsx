import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/site/Home";
import Login from "./pages/site/Login";
import Instituicoes from "./pages/site/Instituicoes";
import Form from "./pages/admin/Form";
import HomePage from "./pages/site/HomePage";
import Map from "./pages/site/Map";
import CardDetalhes from "./pages/site/CardDetalhes";
import QuemSomos from "./pages/site/QuemSomos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="/quemsomos" element={<QuemSomos />} />
<<<<<<< HEAD
          <Route path="/login" element={<Login />} />
=======
<<<<<<< HEAD
          <Route path="/login" element={<Login />} />         
=======
          <Route path="/login" element={<Login />} />
>>>>>>> e56a93246b21811cad988040082e019ea8901612
>>>>>>> 263b9da0413d413ac00916b8fe825489b6749bc8
          <Route path="/mapa" element={<Map />} />
          <Route path="/instituicoes" element={<Instituicoes />} />
          <Route path="/instituicoes/:id" element={<CardDetalhes />} />
          <Route path="/form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
