import React from "react";
import "./App.css";
import CocktailListContainer from "./components/CocktailListContainer";
import { Route } from "react-router-dom";
import CocktailImage from "./components/CocktailImage";

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path="/" component={CocktailListContainer} />
        <Route
          path="/cocktail-categorie/:categorie"
          component={CocktailImage}
        />
      </main>
    </div>
  );
}

export default App;
