import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Wrapper from '../Wrapper';
import {retrieveScore} from '../../utils/scores.js';
import ScoreCard from '../ScoreCard';
var ScoresData = [];

ScoresData = retrieveScore();

// Define the home profile showing basic information and education background
function HighScores() {
  const [scores, setScores] = useState(ScoresData);

  return (
    <div className="profile" id="profile">
      <h2>Highscores</h2>

      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Time</th>
          <th>Score</th>
        </tr>
      </thead>
       <Wrapper>
        {/* <Title>Projects List</Title> */}
        {scores.map((score) => (
          <ScoreCard
            id={score.id}
            key={score.id}
            name={score.name}
            gameMode={score.gameMode}
            dateTime={score.dateTime}
            score={score.score}
          />
        ))}
      </Wrapper>
      </Table>
    </div>
  );
}

export default HighScores;
