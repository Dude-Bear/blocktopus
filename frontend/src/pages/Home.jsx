import React, { useEffect, useState } from "react";
import { config } from '../Constants';

// using different URLs for development and deployment
const BackendURL = config.url;

function Home() {
    const [message, setMessage] = useState("");

  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(BackendURL, requestOptions);
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
        <div >
      <h1>Hello World!</h1>
      {message}
    </div>
    )
}

export default Home