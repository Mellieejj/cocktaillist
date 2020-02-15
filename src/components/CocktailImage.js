import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function CocktailImages(props) {
  return (
    <div>
      <h1>Cocktail Images</h1>
      This page will show images of a {props.match.params.categorie} .
      <Link to="/">Go back to the index</Link>
    </div>
  );
}
