import "./User.css";
import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setReduxUser } from "../state_management/stateSlice";
import { MyContext } from "./Context";

export default function User() {
  const { user, setUser } = useContext(MyContext);
  const [userRedux, setUserRedux] = useState("");
  const dispatch = useDispatch();
  const useRedux = useSelector((state) => state.state.useRedux);
  const navigate = useNavigate();


  const handleSudmit = (e) => {
    e.preventDefault();
    dispatch(setReduxUser({ user: userRedux }));
    navigate("/counter");
  };

  const handleChange = (e) => {
    if (useRedux === "true") {
      setUserRedux(e.target.value);
    } else {
      setUser(e.target.value);
    }
  };

  if (!useRedux) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="page_container">
        <h4>Enter name to proceed</h4>
        <div className="form_container">
          <form onSubmit={handleSudmit}>
            <input
              type="text"
              placeholder="enter username"
              required={true}
              value={useRedux === "true" ? userRedux : user}
              onChange={handleChange}
            />
            <button type="sudmit">
              <img src="https://static.thenounproject.com/png/114836-200.png" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
