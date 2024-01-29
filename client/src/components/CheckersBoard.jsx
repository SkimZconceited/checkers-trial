import React from 'react'

function CheckersBoard({ board }) {
  return (
    <div className="flex flex-col border-2 border-black">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className={`w-12 h-12 flex justify-center items-center ${cell === 'W' || cell === 'B' ? 'bg-light-brown' : 'bg-dark-brown'} ${rowIndex % 2 === 0 ? 'even:bg-dark-brown' : 'even:bg-light-brown'}`}>
              {cell !== " " && (
                <div className={`w-10 h-10 rounded-full ${cell === 'W' ? 'bg-white' : 'bg-black'}`}></div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CheckersBoard