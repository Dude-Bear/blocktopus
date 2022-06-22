import React from "react";
import { Link } from "react-router-dom";

const SaveIndexBox = (selectedRows) => {
  let mkt = 0;

  console.log(selectedRows);
  try {
    mkt = selectedRows.selectedRows.selectedRows[0].personal_index_market_cap;
  } catch (error) {}
  return (
    <div className="w-80 m-auto mb-5">
      <div className=" rounded-div ">
        <h3 className="mt-2 mx-6 ">
          Index Market Cap:{" "}
          <span className="font-bold text-2xl">{mkt.toLocaleString()}</span>
        </h3>

        <div className="flex mx-6">
          <div className="m-auto">
            <Link to="/history">
              <button className="my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl font-bold w-28">
                Save Index
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveIndexBox;
