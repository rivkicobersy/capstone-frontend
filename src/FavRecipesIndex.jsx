import axios from "axios";
import { useState, useEffect } from "react";

export function FavRecipesIndex() {
  const [favRecipes, setFavRecipes] = useState([]);

  const handleIndexFavRecipes = () => {
    console.log("Going to get all fav_recipes...");
    axios.get("http://localhost:3000/fav_recipes.json").then((response) => {
      console.log(response);
      setFavRecipes(response.data);
    });
  };

  const handleDestroyFavRecipe = (favRecipe) => {
    console.log("handleDestroyFavRecipe", favRecipe);
    axios.delete(`http://localhost:3000/fav_recipes/${favRecipe.id}.json`).then((response) => {
      setFavRecipes(favRecipes.filter((p) => p.id !== favRecipe.id));
    });
  };

  useEffect(handleIndexFavRecipes, []);

  return (
    <div className="container">
      <h1>My favourite recipes</h1>
      <div className="row">
        {favRecipes.map((favRecipe) => (
          <div className="col-md-3 mb-4" key={favRecipe.id}>
            <div className="card">
              <h4>{favRecipe.label}</h4>
              <img src={favRecipe.image} alt="" />
              <div>
                <a target="_blank" href={favRecipe.url}>
                  Link to recipe
                </a>
                <button onClick={() => handleDestroyFavRecipe(favRecipe)}>unfavourite</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
