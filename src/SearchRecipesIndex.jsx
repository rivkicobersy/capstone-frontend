import axios from "axios";
import { useState, useEffect } from "react";

export function SearchRecipesIndex() {
  const [searchRecipes, setSearchRecipes] = useState([]);
  const handleCreateSearchRecipes = (params) => {
    console.log(params.get("recipe"));
    axios.get(`http://localhost:3000/search_recipes.json?q=${params.get("recipe")}`).then((response) => {
      console.log("Created search_recipes", response);
      setSearchRecipes(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateSearchRecipes(params, () => event.target.reset());
  };

  return (
    <div id="search_recipes-index">
      <div className="container">
        <h1>Search</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Recipe: <input name="recipe" className="form-control" type="text" />
          </div>
          <button className="btn btn-primary mt-3" type="submit">
            Searh
          </button>
        </form>
        <div className="row">
          {searchRecipes.map((searchRecipe) => (
            <div key={searchRecipe.recipe} className="col-md-3 mb-4">
              <div className="card">
                <div>{searchRecipe.recipe.label}</div>
                <img src={searchRecipe.recipe.image} className="card-img-top" alt="" />
                {searchRecipe.recipe.ingredientLines.map((ingredientLine) => (
                  <div key={ingredientLine}>
                    <p>{ingredientLine}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// change to new so can fill form
// fix length of cards
