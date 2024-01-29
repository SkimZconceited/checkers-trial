import React from "react";
import "../styles/CheckersBoard.css";

function CheckersBoard({ board }) {
  return (
    <div className="board">
      {board &&
        board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className={`cell ${cell}`}>
                {cell !== " " && <div className={`piece ${cell}`}></div>}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default CheckersBoard;
