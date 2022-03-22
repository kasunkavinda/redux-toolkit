import React from "react";
import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { login } from "../../feautures/user";

//useDispatch is for modify the states
//useSelector is for accessing the value

const Login: NextPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "kasun", email: "dummy email" }));
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
