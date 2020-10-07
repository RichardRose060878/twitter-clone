import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    //BEM
    <div className="app">
      <h1>Hey Clever Programmers... Let's build a twitter Clone!</h1>

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}

      {/* Widgets */}
    </div>
  );
}

export default App;
