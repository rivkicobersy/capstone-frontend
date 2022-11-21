import axios from "axios";
import { useState, useEffect } from "react";
import { EmailShareButton, TwitterShareButton } from "react-share";
import { EmailIcon } from "react-share";

export function PantryItemsIndexPage(props) {
  const [pantryItems, setPantryItems] = useState([]);

  const handleIndexPantryItems = () => {
    console.log("Going to get all pantry_items...");
    axios.get("http://localhost:3000/pantry_items.json").then((response) => {
      console.log(response);
      setPantryItems(response.data);
    });
  };

  const handleUpdatePantryItem = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleUpdatePantryItem", params);
    axios.patch(`http://localhost:3000/pantry_items/${params.get("id")}.json`, params).then((response) => {
      console.log(response.data);
      // setPantryItems(
      //   pantryItems.map((pantryItem) => {
      //     if (pantryItem.id === response.data.id) {
      //       return response.data;
      //     } else {
      //       return pantryItem;
      //     }
      //   })
      // );
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePantryItem(props.pantryItem.ingredient.id, params, () => event.target.reset());
  };
  useEffect(handleIndexPantryItems, []);

  return (
    <div id="pantryItems-index">
      <div className="container">
        <EmailShareButton subject="hello">
          <EmailIcon size={32} round={true} /> Share
        </EmailShareButton>

        <h1>My pantry items</h1>
        <div className="row">
          {pantryItems.map((pantryItem) => (
            <div className="col-md-3 mb-4" key={pantryItem.id}>
              <div className="card">
                <img src={pantryItem.ingredient.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-name">{pantryItem.ingredient.name}</h5>
                </div>
                <form onSubmit={handleUpdatePantryItem}>
                  <input type="hidden" name="id" defaultValue={pantryItem.id} />
                  <div>
                    <input name="amount" defaultValue={pantryItem.amount} className="form-control" type="number" />
                  </div>
                  <button className="btn btn-primary mt-3" type="submit">
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
