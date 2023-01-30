import "./App.css";
import Header from "./components/Header";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./components/Pages/Home";
import Booking from "./components/Pages/Booking";

import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
