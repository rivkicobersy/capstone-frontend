import axios from "axios";
import { useState, useEffect } from "react";

export function PantryItemsIndexPage() {
  const [pantryItems, setPantryItems] = useState([]);

  const handleIndexPantryItems = () => {
    console.log("Going to get all pantry_items...");
    axios.get("http://localhost:3000/pantry_items.json").then((response) => {
      console.log(response);
      setPantryItems(response.data);
    });
  };

  useEffect(handleIndexPantryItems, []);

  return (
    <div id="pantryItems-index">
      <div className="container">
        <h1>My pantry items</h1>
        <div className="row">
          {pantryItems.map((pantryItem) => (
            <div className="col-md-3 mb-4" key={pantryItem.id}>
              <div className="card">
                <img src={pantryItem.ingredient.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-name">{pantryItem.ingredient.name}</h5>
                </div>
                <div>Amount: {pantryItem.amount}</div>
                <form action="">
                  <div>
                    <input name="amount" DefaultValue={pantryItem.amount} className="form-control" type="number" />
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
                    Update
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
