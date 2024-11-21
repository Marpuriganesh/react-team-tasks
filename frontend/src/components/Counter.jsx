// import {useState} from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Counter.css";

const Counter = ({ user }) => {
  const [count, setCount] = useState(0);
  const [showFromDB, setShowFromDB] = useState(false);
  const reduxUser = useSelector((state) => state.state.user);
  const useRedux = useSelector((state) => state.state.useRedux);
  const [FatchedUserData, setFatchedUserData] = useState([]);

  useEffect(() => {
    if (showFromDB) {
      const fetchData = async () => {
        try {
          const res = await fetch("http://localhost:3000/values");
          const data = await res.json();
          setFatchedUserData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      // fetch("http://localhost:3000/values")
      //   .then((res) => res.json())
      //   .then((data) => console.log(data));

      fetchData();
    }
  }, [showFromDB]);

  const uppercaseName = user.toUpperCase();
  const [userData, setUserData] = useState({
    username: uppercaseName,
    value: "",
  });

  useEffect(() => {
    setUserData((prevData) => ({
      ...prevData,
      value: count,
    }));
  }, [count]);

  if (!user) {
    console.log(reduxUser, useRedux);
    return <Navigate to="/" />;
  }

  const saveData = async () => {
    try {
      const response = await fetch("http://localhost:3000/insert_values", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Data sent successfully!");

        // Handle success, e.g., show a success message
      } else {
        console.error("Error sending data:", response.statusText);
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
          <div className="save_show">
            <span onClick={saveData}>
              <img
                src="https://www.svgrepo.com/show/309930/save.svg"
                alt="save"
              />
            </span>
            <span onClick={() => setShowFromDB((preValue) => !preValue)}>
              <img
                src="https://www.svgrepo.com/show/309610/eye-show.svg"
                alt="show"
              />
            </span>
          </div>
          {showFromDB && (
            <div className="table_content">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Number</th>
                  </tr>
                </thead>
                <tbody>
                  {FatchedUserData.map((user) => (
                    <tr key={user.id}>
                      <td>{user.username}</td>
                      <td>{user.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Counter.propTypes = {
  user: PropTypes.string,
};

export default Counter;
