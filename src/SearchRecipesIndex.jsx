import axios from "axios";
import { useState, useEffect } from "react";
import Heart from "react-heart";

export function SearchRecipesIndex() {
  const [searchRecipes, setSearchRecipes] = useState([]);
  const [pantryItems, setPantryItems] = useState([]);
  const [searchRecipeName, setSearchRecipeName] = useState("");
  const [active, setActive] = useState(false);

  const handleIndexPantryItems = () => {
    console.log("Going to get all pantry_items...");
    axios.get("http://localhost:3000/pantry_items.json").then((response) => {
      console.log(response);
      setPantryItems(response.data);
    });
  };

  useEffect(handleIndexPantryItems, []);

  const handleCreateSearchRecipes = (params) => {
    console.log(params.get("recipe"));
    axios.get(`http://localhost:3000/search_recipes.json?q=${params.get("recipe")}`).then((response) => {
      console.log("Created search_recipes", response);
      setSearchRecipes(response.data);
    });
  };

  const handleClick = () => {
    console.log(pantryItems);
    var item = pantryItems[Math.floor(Math.random() * pantryItems.length)];
    setSearchRecipeName(item.ingredient.name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateSearchRecipes(params, () => event.target.reset());
  };

  const handleClickHeart = (searchRecipe) => {
    const params = {
      uri: searchRecipe.recipe.uri,
      label: searchRecipe.recipe.label,
      url: searchRecipe.recipe.url,
      image: searchRecipe.recipe.image,
    };
    console.log(params);
    axios.post("http://localhost:3000/fav_recipes", params).then((response) => {
      console.log(response.data);
      setSearchRecipes(
        searchRecipes.map((r) => (r === searchRecipe ? { ...r, favourite: !searchRecipe.favourite } : r))
      );
    });
  };

  return (
    <div id="search_recipes-index">
      <div className="container">
        <h1>Search</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Recipe:{" "}
            <input
              value={searchRecipeName}
              onChange={(event) => setSearchRecipeName(event.target.value)}
              name="recipe"
              className="form-control"
              type="text"
            />
          </div>
          <button onClick={handleClick} className="btn btn-primary mt-3 mr-3">
            Random pantry items
          </button>
          <button className="btn btn-primary mt-3" type="submit">
            Search
          </button>
        </form>
        <div className="row">
          {searchRecipes.map((searchRecipe) => (
            <div key={searchRecipe.recipe.uri} className="col-md-3 mb-4">
              <div className="card">
                <div>{searchRecipe.recipe.label}</div>
                <img src={searchRecipe.recipe.image} className="card-img-top" alt="Card image cap" />
                {searchRecipe.recipe.ingredientLines.map((ingredientLine) => (
                  <div key={ingredientLine}>
                    <p>{ingredientLine}</p>
                  </div>
                ))}
                <div style={{ width: "2rem" }}>
                  <Heart isActive={searchRecipe.favourite} onClick={() => handleClickHeart(searchRecipe)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// fix length of cards

// delete pantry items?
// favourite recipes
// TODO add ingredient and pantry items based on recipe
// add clanedar
