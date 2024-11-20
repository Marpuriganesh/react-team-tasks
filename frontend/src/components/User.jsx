import "./User.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Context";

export default function User() {
  const { user, setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const handleSudmit = (e) => {
    e.preventDefault();
    navigate("/counter");
  };

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
              value={user}
              onChange={(e) => setUser(e.target.value)}
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
