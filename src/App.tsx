import React from "react";

import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App container m-auto min-h-screen flex">
      <div className="w-full m-auto">
        <h1 className="font-bold text-2xl text-[#696969] py-4 mb-2">
          オセロ対戦
        </h1>
        <Board></Board>
      </div>
    </div>
    
  );
}

export default App;