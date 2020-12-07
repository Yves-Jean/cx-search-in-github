import { SearchBar, UserDetails, Toolbar } from "./components";

import "./scss/style.scss";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Toolbar />
      <main className="display-flex flex-justify-center mg-tp-4">
        <SearchBar />
        <UserDetails />
      </main>
    </div>
  );
}

export default App;
