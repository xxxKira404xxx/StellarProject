import { useState } from "react";
import "./App.css";
import Login_Page from "./pages/Login/Login_Page.jsx";
import Home_Page from "./pages/HomePage/Home_Page.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        {/* Correct root path to show Login first */}
        <Route path="/login" element={<Login_Page />} />
        
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home_Page />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
