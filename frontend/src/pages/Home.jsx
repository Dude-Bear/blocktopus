import React from "react";
import CoinSearch from "../components/SearchTable";

const Home = ({ topCoins }) => {
  return (
    <div>
      <CoinSearch topCoins={topCoins} />
    </div>
  );
};

export default Home;
