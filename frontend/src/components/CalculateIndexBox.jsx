import React from "react";
import { Link } from "react-router-dom";

const CalculateIndexBox = (selectedRows) => {
  let mkt = 0;

  console.log(selectedRows.selectedRows);

  try {
    console.log(selectedRows.selectedRows[0].personal_index_market_cap);
    mkt = selectedRows.selectedRows[0].personal_index_market_cap;
  } catch (error) {}

  return (
    <div className="w-80 m-auto mb-5">
      <div className=" rounded-div ">
        <h3 className="mt-2 mx-6 ">
          Index Market Cap:{" "}
          <span className="font-bold text-xl">{mkt.toLocaleString()}</span>
        </h3>
        <h3 className="mt-3 mx-6 text-xs">Amount to be invested</h3>

        <div className="flex mx-6">
          <div>
            <input
              type="text"
              className="my-2 p-3 mr-2 w-28 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="1.000"
            />
          </div>
          <div>
            <Link to="/personal-index">
              <button className="my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl font-bold w-28">
                Calculate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateIndexBox;
