import React from "react";

const CoinItem = ({ coin }) => {
  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td>{coin.market_cap_rank}</td>
      <td>
        <div className="flex items-center">
          <img
            className="w-6 mr-2 rounded-full"
            src={coin.image}
            alt={coin.id}
          />
          <p className="hidden sm:table-cell pr-6">{coin.name}</p>
        </div>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>
        $
        {coin.current_price
          ? coin.current_price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          : "unknown"}
      </td>
      <td className="w-[180px] hidden sm:table-cell">
        {coin.price_change_percentage_7d_in_currency
          ? coin.price_change_percentage_7d_in_currency.toLocaleString(
              undefined,
              { minimumFractionDigits: 2, maximumFractionDigits: 2 }
            )
          : "unknown"}
      </td>
      <td className="w-[180px] hidden md:table-cell">
        {coin.market_cap.toLocaleString()}
      </td>
      <td>
        {coin.market_share.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </td>
    </tr>
  );
};

export default CoinItem;
