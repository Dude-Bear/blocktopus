import React from "react";

import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

const HISTORY_URL = "api/history/my-history";

function History() {
  const authData = useAuth();
  const token = authData.auth.accessToken;
  let data;

  console.log("useauth(): ");
  console.log(authData);

  console.log("token: ");
  console.log(token);

  try {
    const response = axios.get(HISTORY_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      withCredentials: true,
    });
    console.log("blaaa");
    console.log(response);
    data = response;
  } catch (err) {
    console.log(err);
  }

  return (
    <section className="flex mt-20">
      <div className="m-auto">
        <h1>History</h1>
        <div>{console.log(data)}</div>
      </div>
    </section>
  );
}

export default History;
