import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.scss';
import TopsWomen from "./components/Pages/Clothes/Women/TopsWomen/TopsWomen";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Footer/Footer";;
import Accesories from "./components/Pages/Clothes/Accesories/Accesories";
import JeansWomen from "./components/Pages/Clothes/Women/JeansWomen/JeansWomen";
import Dresses from "./components/Pages/Clothes/Women/Dresses/Dresses";
import Polos from "./components/Pages/Clothes/Men/Polos/Polos";
import JeansMen from "./components/Pages/Clothes/Men/JeansMen/JeansMen";
import Shirts from "./components/Pages/Clothes/Unisex/Shirts/Shirts";
import Hoodies from "./components/Pages/Clothes/Unisex/Hoodies/Hoodies";
import Proximamente from "./components/Pages/Proximamente/Proximamente";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Pages/Auth/Login/Login";
import RegisterStep1 from "./components/Pages/Auth/Register/RegisterStep1/RegisterStep1";
import RegisterStep2 from "./components/Pages/Auth/Register/RegisterStep2/RegisterStep2";
function App() {
  const [proximamente, setProximamente] = useState(false); // Variable de estado para el modo "Próximamente"
  // useEffect(() => {

  // }, [proximamente])

  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="main-container">
          <NavBar />
          <Routes>
            {!proximamente && (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/accesories" element={<Accesories />} />
                <Route path="/women/jeans" element={<JeansWomen />} />
                <Route path="/women/dresses" element={<Dresses />} />
                <Route path="/women/tops" element={<TopsWomen />} />
                <Route path="/men/polos" element={<Polos />} />
                <Route path="/men/jeans" element={<JeansMen />} />
                <Route path="/unisex/shirts" element={<Shirts />} />
                <Route path="/unisex/hoodies" element={<Hoodies />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/register/firstStep" element={<RegisterStep1 />} />
                <Route path="/register/secondStep" element={<RegisterStep2 />} />
              </>
            )}
            <Route path="/*" element={<Proximamente />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
