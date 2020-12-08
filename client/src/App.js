import { SearchBar, UserDetails, Toolbar } from "./components";
import { ThemeContext } from "./contexts/ThemeContext";
import { UserContext } from "./contexts/UserContext";
import React, { useState } from "react";

import "./scss/style.scss";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className="container">
        <Toolbar />
        <main className="display-flex flex-justify-center mg-tp-4 flex-d-col flex-align-center">
          <UserContext.Provider value={[username, setUsername]}>
            <SearchBar />
            <UserDetails />
          </UserContext.Provider>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
