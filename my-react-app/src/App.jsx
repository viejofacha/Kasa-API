import React from 'react'; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import FicheLogement from "./pages/FicheLogement/FicheLogement.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Footer from "./layout/footer/Footer.jsx";
const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
      
     
      
    </Router>
  );
};

export default App;
