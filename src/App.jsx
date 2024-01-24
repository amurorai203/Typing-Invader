import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StartGame from './components/pages/startGame';
import HighScores from './components/pages/scorelist';
import MenuItem from './components/MenuItem';


function App() {


  return (
    <Router>
      <div className="jumbotron container-fluid">
        <div id="mainMenu" className="show">
          <h1 id="headTitle" className="display-4">Typing Invaders</h1>
          <p id="desc1" className="lead">This is a simple game where you have to type to survive</p>
          <p id="desc2">Click the button below to start the game</p>
          <p className="lead"></p>

          <MenuItem />
          <Routes>
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route path="/" element="" />
            <Route path="/startGame" element={<StartGame />} />
            <Route path="/HighScores" element={<HighScores />} />
            {/* <Route path="/playerSelect" element={<PlayerSelect />} /> */}
          </Routes>
        </div>
        <footer className="footer">
          <div className="align-bottom">
            <p>&copy; Powered by Github. With edX Front-End Web Development program.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
