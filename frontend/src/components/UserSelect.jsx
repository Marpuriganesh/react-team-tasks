import "./UserSelect.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUseRedux } from "../state_management/stateSlice";

function UserSelect() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    const buttonId = event.target.id;
    if (buttonId === "redux") {
      dispatch(setUseRedux({ useRedux: "true" }));
      navigate("/user");
    } else {
      dispatch(setUseRedux({ useRedux: "false" }));
      navigate("/user");
    }
  };

  return (
    <>
      <div className="page_container">
        <div className="content">
          <h4>Please select which one you want to use</h4>
          <div className="buttons">
            <button id="redux" onClick={handleClick}>
              Redux
            </button>
            <button id="context_api" onClick={handleClick}>
              Context Api
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSelect;
