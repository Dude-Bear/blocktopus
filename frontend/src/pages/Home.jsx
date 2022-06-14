import React from "react";
import CoinSearch from "../components/CoinSearch";



const Home = ({topCoins}) => {
   
    return (

      <div>
        <CoinSearch topCoins={topCoins}/>
      </div>
    )
}

export default Home