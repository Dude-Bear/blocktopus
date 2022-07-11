import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SaveIndexBox = (selectedRows) => {
  let mkt = 0;

  console.log("selectedRows");
  console.log(selectedRows);
  try {
    mkt = selectedRows.selectedRows.selectedRows[0].personal_index_market_cap;
  } catch (error) {}

  const dataForServer = selectedRows.selectedRows.selectedRows;
  console.log("dataForServer");
  console.log(dataForServer);

  const authData = useAuth();
  const token = authData.auth.accessToken;
  const userId = authData.auth.user_id;

  const sendData = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        index_name: "My Index",
        total_investment: 0,
        list_of_coins: dataForServer,
      }),
    };
    const response = await fetch(
      "http://localhost:8000/api/index/",
      requestOptions
    );
    if (!response.ok) {
      console.log("Something went wrong when creating index");
    } else {
      console.log("juhuuu");
    }
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
