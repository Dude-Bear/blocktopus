import React from "react";
import SearchTable from "../components/SearchTable";

const Home = ({ topCoins }) => {
  return (
    <div>
      <SearchTable topCoins={topCoins} />
    </div>
  );
};

export default Home;
