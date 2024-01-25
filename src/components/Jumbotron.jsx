import { Typography } from "@mui/material";

export default function Jumbotron() {
  return (
    <div>
      <Typography variant="h2" component="div" gutterBottom>
        <div className="jumbotron container-fluid">
          <div id="mainMenu" className="show">
            <h1 id="headTitle" className="display-4">
              Typing Invaders
            </h1>
            <Typography />
            <Typography variant="h3" gutterBottom>
              <p id="desc1" className="lead">
                This is a simple game where you have to type to survive
              </p>
              <p id="desc2">Click the button below to start the game</p>
              <p className="lead"></p>
            </Typography>
          </div>
        </div>
      </Typography>
    </div>
  );
}
