import Header from "./components/header/Header";
import Search from "./components/Search/Search";

import { useContext } from "react";
import context from "./components/utils/Context";

import "./App.css";

function App() {
  const ctx = useContext(context);
  return (
    <div
      className={`App ${!ctx.sarif ? "sanssarif" : ""} ${
        ctx.darkTheme ? "dark" : ""
      }`}
    >
      <Header />
      <Search />
    </div>
  );
}

export default App;
