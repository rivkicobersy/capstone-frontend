import axios from "axios";
import { useState, useEffect } from "react";

export function IngredientsIndexPage() {
  const [searchFilter, setSearchFilter] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const handleIndexIngredients = () => {
    console.log("Going to get all ingredients...");
    axios.get("/ingredients.json").then((response) => {
      console.log(response);
      setIngredients(response.data);
    });
  };

  useEffect(handleIndexIngredients, []);

  return (
    <div id="ingredients-index">
      <div className="container">
        <h1>All ingredients</h1>
        Search filter:{" "}
        <input
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          type="text"
          className="form-control"
          list="names"
        />
        <datalist id="names">
          {ingredients.map((ingredient) => (
            <option key={ingredient.id}>{ingredient.name}</option>
          ))}
        </datalist>
        <div className="row">
          {ingredients
            .filter((ingredient) => ingredient.name.toLowerCase().includes(searchFilter.toLowerCase()))
            .map((ingredient) => (
              <div className="col-md-3 mb-4" key={ingredient.id}>
                <div className="card">
                  <img src={ingredient.image_url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-name">{ingredient.name}</h5>
                    <a className="btn btn-primary mt-3" href={`/ingredients/${ingredient.id}`}>
                      More info
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
