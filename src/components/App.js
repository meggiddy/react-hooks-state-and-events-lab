import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = (event) => {
    setDarkMode((current) => !current);
  };


  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button
          className={darkMode ? "App dark" : "App light"}
          onClick={handleDarkMode}
        >
          Dark Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
