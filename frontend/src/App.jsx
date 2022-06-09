import React, { useEffect, useState } from "react";
import { config } from './Constants';

const URL = config.url;

// dependency array

const App =() => {
  const [message, setMessage] = useState("");

  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    // adjusted URL for development and deployment
    const response = await fetch(URL, requestOptions);  
    const data = await response.json();

    if (!response.ok) {
      console.log("something messed up");
    } else {
      setMessage(data.message);
    }
  };

  useEffect(() => {
    getWelcomeMessage();
  }, []);

  return (
    <div className="App">
     <h1>Hello World!</h1>
     {message}
    </div>
  );
}

export default App;
