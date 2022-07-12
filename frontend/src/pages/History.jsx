import React, { useEffect, useState } from "react";

import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

const HISTORY_URL = "api/history/my-history";

function History() {
  const authData = useAuth();
  const token = authData.auth.accessToken;

  const [indexData, setIndexData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(HISTORY_URL, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + token,
      },
    });
    setIndexData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="flex mt-20">
      <div className="m-auto">
        <h1>History</h1>
        <div>{console.log("indexData:::")}</div>
        <div>{console.log(indexData)}</div>
        <div>{JSON.stringify(indexData)}</div>
      </div>
    </section>
  );
}

export default History;
