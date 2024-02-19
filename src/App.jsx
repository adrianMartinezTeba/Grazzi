import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/footer" element={<Footer/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
