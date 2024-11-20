// import {useState} from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Counter.css";

const Counter = ({ user }) => {
  const [count, setCount] = useState(0);
  const reduxUser = useSelector((state) => state.state.user);
  const useRedux = useSelector((state) => state.state.useRedux);
  if (!user) {
    console.log(reduxUser,useRedux)
    return <Navigate to="/" />;
  }
  const uppercaseName = user.toUpperCase();

  return (
    <>
      <div className="container">
        <div className="content_container">
          <h1>WELCOME USER</h1>
          <span> {uppercaseName}</span>
          <div className="count">{count}</div>
          <div className="buttons">
            <button onClick={() => setCount((v) => v - 1)}>{"<"}</button>
            <button onClick={() => setCount((v) => v + 1)}>{">"}</button>
          </div>
        </div>
      </div>
    </>
  );
};

Counter.propTypes = {
  user: PropTypes.string,
};

export default Counter;
