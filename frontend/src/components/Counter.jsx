// import {useState} from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Counter.css";

const Counter = ({ user }) => {
  const [count, setCount] = useState(0);
  const uppercaseName = user.toUpperCase();

  if (user === "") {
    return <Navigate to="/" />;
  }

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
