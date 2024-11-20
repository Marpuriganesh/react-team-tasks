import "./App.css";
import Counter from "./components/counter";
import User from "./components/User";
import PageNotFound from "./components/PageNotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";

import { MyContext } from "./components/Context";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <div className="App">
        <MyContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route path="/counter" element={<Counter user={user} />} />
              <Route path="/" element={<User />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
