import React, { useState, useEffect } from "react";

function Board() {
  // const [board, setBoard] = useState([])

  useEffect(() => {
    fetch("/", {
      method: "POST", // Specify the method as POST
      headers: {
        "Content-Type": "application/json", // Set the content type header to indicate the format of the data being sent
        // Include other headers as needed
      },
      body: JSON.stringify({
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parsing the response as JSON
      })
      .then((data) => {
        console.log(data); // Handling the JSON data
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return <></>;
}

export default Board;
