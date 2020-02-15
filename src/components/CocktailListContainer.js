import React, { Component } from "react";
import CocktailList from "./CocktailList";

export default class CocktailListContainer extends Component {
  state = {
    cocktailCategories: null
  };

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(res => res.json())
      .then(response => {
        const categories = response.drinks.map(drink => drink.strCategory);
        console.log("categories Partent", categories);
        this.updateCategories(categories);
      })
      .catch(console.error);
  }

  updateCategories(categories) {
    this.setState({
      cocktailCategories: categories
    });
  }

  render() {
    console.log("categories in state", this.state.cocktailCategories);
    return <CocktailList cocktailCategories={this.state.cocktailCategories} />;
  }
}
