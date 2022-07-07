import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import History from "./pages/History";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Learn from "./pages/Learn";
import { useState } from "react";
import axios from "./api/axios";
import { useEffect } from "react";
import BCI from "./pages/BCI";
import PersonalIndex from "./pages/PersonalIndex";

function App() {
  const COINS_URL = "/api/coins";

  const [topCoins, setCoins] = useState([]);
  const [selectedRows, setSelectedRows] = React.useState({});

  useEffect(() => {
    axios.get(COINS_URL).then((response) => {
      setCoins(response.data);
    });
  }, [COINS_URL]);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home topCoins={topCoins} />} />
        <Route
          path="/bci"
          element={
            <BCI
              topCoins={topCoins}
              setSelectedRows={setSelectedRows}
              selectedRows={selectedRows}
            />
          }
        />
        <Route
          path="/personal-index"
          element={<PersonalIndex selectedRows={selectedRows} />}
        />
        <Route path="/Coin" element={<Coin />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/history" element={<History />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
