import React, { Component } from "react".
import CocktailImage from "./CocktailImage"

export default class CocktailImageContainer extends Component {
  state = {
    images: null
  }
  componentDidMount() {
    const categorie = this.props.match.params.categorie;
      fetch()
  }
}