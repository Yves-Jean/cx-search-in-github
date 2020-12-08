import {
  SearchBar,
  UserDetails,
  Toolbar,
  LoadingProvider,
  Loader,
} from "./components";
import { ThemeContext } from "./contexts/ThemeContext";
import { UserContext } from "./contexts/UserContext";
import React, { useState } from "react";

import "./scss/style.scss";
import "./App.scss";
import logo from "./assets/images/github.png";

function App() {
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <LoadingProvider>
        <Loader />
        <div className="container">
          <Toolbar />
          <main className="display-flex flex-justify-center mg-tp-4 flex-d-col flex-align-center">
            <UserContext.Provider value={[username, setUsername]}>
              <img src={logo} alt="" width="300px" height="300px" />
              <SearchBar />
              <UserDetails />
            </UserContext.Provider>
          </main>
        </div>
      </LoadingProvider>
    </ThemeContext.Provider>
  );
}

export default App;
