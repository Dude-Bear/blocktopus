import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "../api/axios";

const LOGIN_URL = "api/auth/login";

const SignIn = () => {
  const { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [username, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    };
    const data = JSON.stringify(
      `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
    );

    try {
      const response = await axios.post(LOGIN_URL, data, headers);
      // console.log(JSON.stringify(response?.data));

      const accessToken = response.data.access_token;
      // console.log("token");
      // console.log(accessToken);
      // const roles = response?.data?.roles;
      const roles = [2001];
      setAuth({ username, password, roles, accessToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <div className="my-2 w-full relative rounded-2xl shadow-xl">
          <input
            className="w-full p-2 bg-primary border border-input rounded-2xl"
            type="text"
            id="email"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={username}
            required
          />
        </div>

        <label htmlFor="password">Password:</label>
        <div className="mt-2 w-full relative rounded-2xl shadow-xl">
          <input
            className="w-full p-2 bg-primary border border-input rounded-2xl"
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={password}
            required
          />
        </div>
        <button className="w-full mt-8 p-3 bg-button text-btnText rounded-2xl shadow-xl">
          Sign In
        </button>
      </form>
      <p className="mt-4">
        Don't have an account?{" "}
        <Link to="/signin" className="text-accent">
          Sign in
        </Link>
      </p>
    </section>
  );
};

export default SignIn;
