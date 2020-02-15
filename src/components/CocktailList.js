import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CocktailList extends Component {
  renderCocktailCategories(categories) {
    return (
      <li key={categories}>
        <Link to={`/cocktail-categorie/${categories}`}>{categories}</Link>
      </li>
    );
  }

  render() {
    const { cocktailCategories } = this.props;
    console.log("categories", cocktailCategories);
    return (
      <div className="cocktail-list">
        <h1>Cocktail List</h1>

        {!cocktailCategories && "Loading..."}
        {cocktailCategories && (
          <ul>{cocktailCategories.map(this.renderCocktailCategories)}</ul>
        )}
      </div>
    );
  }
}
