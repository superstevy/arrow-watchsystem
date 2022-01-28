import React from "react";
import Home from "./containers/Home";
import "./asset/styles/style.scss";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Cast from "./containers/Cast";
import Episodes from "./containers/Episodes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/casts/:castId" element={<Cast />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
