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
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mt-3">
          <h1 className="text-4xl mt-0 mb-2">History</h1>
          <p>
            <div>{JSON.stringify(indexData)}</div>
          </p>
        </div>
      </main>
    </div>
  );
}

export default History;
