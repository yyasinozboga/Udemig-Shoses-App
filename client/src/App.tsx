import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Bag from "./pages/bag";
import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray px-4 md:px-8 lg:px-12 xl:px-14 py-8">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/bag" element={<Bag />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
