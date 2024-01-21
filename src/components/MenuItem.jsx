import React from 'react';
import { NavLink } from 'react-router-dom';

// Define the Navbar items
function MenuItem() {
  return (
    <div>
      <ul id="menuItem" className="nav nav-tabs">
        <li className="btn btn-primary btn-lg" role="button">
          <NavLink
            to="/startGame"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Start Game
          </NavLink>
        </li>
        <li className="btn btn-primary btn-lg" role="button">
          <NavLink
            to="/HighScores"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            HighScore
          </NavLink>
        </li>
        <li className="btn btn-primary btn-lg" role="button">
          <NavLink 
            to="/PlayerSelect" 
            end 
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            > 
            Player Select
            </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MenuItem;
