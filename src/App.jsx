import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HighScores from './components/pages/scorelist';
import MenuItem from './components/MenuItem';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="jumbotron">
      <h1 className="display-4">Typing Invaders</h1>
      <p className="lead">This is a simple game where you have to type to survive</p>
      <hr className="my-4"></hr>
      <p>Click the button below to start the game</p>
      <p className="lead"></p>
 
      <MenuItem />
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element="" />
        {/* <Route path="/startGame" element={<StartGame />} /> */}
        <Route path="/HighScores" element={<HighScores />} />
        {/* <Route path="/playerSelect" element={<PlayerSelect />} /> */}
      </Routes>

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
