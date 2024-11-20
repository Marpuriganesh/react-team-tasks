import "./App.css";
import Counter from "./components/counter";
import User from "./components/User";
import UserSelect from "./components/UserSelect";
import PageNotFound from "./components/PageNotFound";
import { useSelector } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";

import { MyContext } from "./components/Context";

function App() {
  const [user, setUser] = useState("");
  const reduxUser = useSelector((state) => state.state.user);

  return (
    <>
      <div className="App">
        <MyContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              {/* <Route
                path="/counter"
                element={<Counter user={!reduxUser ? user : reduxUser} />}
              />
              <Route path="/" element={<UserSelect />} />
              <Route path="/user" element={<User />} />
              <Route path="*" element={<PageNotFound />} /> */}
              <Route path="/" element={<Counter user={"test"} />} />
            </Routes>
          </BrowserRouter>
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
