import React, { useState, useEffect } from "react";

function Board() {
  // const [board, setBoard] = useState([])

  useEffect(() => {
    fetch("/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((server_board) => {
        console.log(server_board);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return <></>;
}

export default Board;
