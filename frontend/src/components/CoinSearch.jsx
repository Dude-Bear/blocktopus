import React from "react";
import { useState } from "react";
import CoinItem from "./CoinItem";

const CoinSearch = ({ topCoins }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h2 className="text-1xl font-bold my-2"> </h2>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th className="px-4">#</th>
            <th className="text-left w-[10px]">Coin</th>
            <td> </td>
            <th className="pr-4">Price in USD</th>
            <th className="hidden sm:table-cell">7d</th>
            <th className="hidden md:table-cell">Mkt Cap</th>
            <th>Mkt Cap in %</th>
          </tr>
        </thead>
        <tbody>
          {topCoins
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else {
                return value.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              }
            })
            .map((coin) => (
              <CoinItem coin={coin} key={coin.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
