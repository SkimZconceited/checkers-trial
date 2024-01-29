import React from "react";
import "../styles/CheckersBoard.css";

function CheckersBoard({ board, setBoard }) {
  const handleDragStart = (e, piece, fromRow, fromCol) => {
    e.dataTransfer.setData(
      "application/reactjson",
      JSON.stringify({ piece, fromRow, fromCol })
    );
  };

  const handleDrop = (e, toRow, toCol) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("application/reactjson"));
    console.log(data)
    // makeMove(data.fromRow, data.fromCol, toRow, toCol);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const makeMove = (fromRow, fromCol, toRow, toCol) => {
    // Create a deep copy of the board array
    let newBoard = JSON.parse(JSON.stringify(board));

    // Move the piece
    newBoard[toRow][toCol] = newBoard[fromRow][fromCol];
    newBoard[fromRow][fromCol] = " ";

    // Update the board state
    setBoard(newBoard);
  };

  return (
    <div className="board">
      {board &&
        board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
             <div key={cellIndex} 
             className={`cell ${cell}`}
             onDrop={(e) => handleDrop(e, rowIndex, cellIndex)} 
             onDragOver={handleDragOver}>
                {cell !== " " && <div className={`piece ${cell}`}></div>}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default CheckersBoard;
