import axios from "axios";
import { useState, useEffect } from "react";

export function FavRecipesIndex() {
  const [FavRecipes, setFavRecipes] = useState([]);

  const handleIndexFavRecipes = () => {
    console.log("Going to get all fav_recipes...");
    axios.get("http://localhost:3000/fav_recipes.json").then((response) => {
      console.log(response);
      setFavRecipes(response.data);
    });
  };

  useEffect(handleIndexFavRecipes, []);

  return (
    <div className="container">
      <h1>My favourite recipes</h1>
      {FavRecipes.map((FavRecipe) => (
        <div key={FavRecipe.id}>
          <h4>{FavRecipe.label}</h4>
          <img src={FavRecipe.image} alt="" />
          <div>
            <a target="_blank" href={FavRecipe.url}>
              Link to recipe
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
