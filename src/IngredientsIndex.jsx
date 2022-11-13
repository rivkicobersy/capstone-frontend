import { useState, useEffect } from "react";

export function IngredientsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePantryItem(params, () => event.target.reset());
  };

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
          {props.ingredients
            .filter((ingredient) => ingredient.name.toLowerCase().includes(searchFilter.toLowerCase()))
            .map((ingredient) => (
              <div className="col-md-3 mb-4" key={ingredient.id}>
                <div className="card">
                  <h2>{ingredient.name}</h2>
                  <img src={ingredient.image_url} alt="" />
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input name="ingredient_id" defaultValue={ingredient.id} type="hidden" />
                    </div>
                    <div>
                      Amount: <input name="amount" className="form-control" type="number" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                      Add to pantry
                    </button>
                  </form>
                  <a className="btn btn-primary mt-3" href={`/ingredients/${ingredient.id}`}>
                    More info
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
