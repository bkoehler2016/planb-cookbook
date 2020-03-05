import React from "react";
import Recipe from "../components/Recipe";
import Navigation from "../components/Navigation";
import RecipeSidebar from "../components/RecipeSidebar";

const SingleRecipe = props => {
  return (
    <div className="full-recipe-wrapper">
      <Navigation />
      <Recipe recipeID={props.match.params.id} />
      {/* <RecipeSidebar /> */}
    </div>
  );
};

export default SingleRecipe;
