import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import axios from "../api/axios";

const INDEX_URL = "api/index";

const SaveIndexBox = (data) => {
  let mkt = 0;

  try {
    mkt = data.selectedRows[0].personal_index_market_cap;
  } catch (error) {}

  const dataForServer = data.selectedRows;

  const authData = useAuth();
  const token = authData.auth.accessToken;
  const userId = authData.auth.user_id;

  const sendData = async () => {
    const response = await axios.post(
      INDEX_URL,
      {
        user_id: userId,
        index_name: "My Index",
        total_investment: data.totalInvestment,
        list_of_coins: dataForServer,
      },
      {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
  };
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
              <button
                onClick={sendData}
                className="my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl font-bold w-28"
              >
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
