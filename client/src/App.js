import { SearchBar, UserDetails, Toolbar } from "./components";
import { ThemeContext } from "./contexts/ThemeContext";
import React, { useState } from "react";

import "./scss/style.scss";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className="container">
        <Toolbar />
        <main className="display-flex flex-justify-center mg-tp-4">
          <SearchBar />
          <UserDetails />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
