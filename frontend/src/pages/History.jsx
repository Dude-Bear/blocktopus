import React, { useEffect, useState } from "react";

import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

const HISTORY_URL = "api/history/my-history";

function History() {
  const authData = useAuth();
  const token = authData.auth.accessToken;

  const [indexData, setIndexData] = useState([]);

  // useEffect(() => {
  //   setIndexData("");
  // }, []);

  axios
    .get(HISTORY_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      withCredentials: true,
    })
    .then(function (response) {
      console.log(response.data);
      // indexData = response.data;
      setIndexData(indexData);
    });

  // console.log("useauth(): ");
  // console.log(authData);

  return (
    <section className="flex mt-20">
      <div className="m-auto">
        <h1>History</h1>
        <div>{console.log("indexData:::")}</div>
        <div>{console.log(indexData)}</div>
      </div>
    </section>
  );
}

export default History;
