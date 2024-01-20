import React from "react";
import "../../../css/style.css";

// Define the EducationCard layout
function ScoreCard(props) {
  return (
        <tr>
          <td>{props.name}</td>
          <td>{props.dateTime}</td>
          <td>{props.score}</td>
        </tr>
  );
}

export default ScoreCard;
