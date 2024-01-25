import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartGame from "./components/pages/startGame";
import HighScores from "./components/pages/scorelist";
import MenuItem from "./components/MenuItem";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Jumbotron />
        <MenuItem />
        <Routes>
          <Route path="/" element="" />
          <Route path="/startGame" element={<StartGame />} />
          <Route path="/HighScores" element={<HighScores />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
