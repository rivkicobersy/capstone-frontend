import axios from "axios";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";
import { IngredientsNew } from "./IngredientsNew";
import { PantryItemsIndex } from "./PantryItemsIndex";

export function Home() {
  const [ingredients, setIngredients] = useState([]);

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };

  const handleCreateIngredient = (params, successCallback) => {
    console.log("handleCreateIngredient", params);
    axios.post("http://localhost:3000/ingredients.json", params).then((response) => {
      setIngredients([...ingredients, response.data]);
      successCallback();
    });
  };

  const [pantryItems, setPantryItems] = useState([]);

  const handleIndexPantryItems = () => {
    console.log("handleIndexPantryItems");
    axios.get("http://localhost:3000/pantry_items.json").then((response) => {
      console.log(response.data);
      setPantryItems(response.data);
    });
  };

  const handleCreatePantryItem = (params, successCallback) => {
    console.log("handleCreatePantryItem", params);
    axios.post("http://localhost:3000/pantry_items.json", params).then((response) => {
      setPantryItems([...pantryItems, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexIngredients, []);
  useEffect(handleIndexPantryItems, []);

  return (
    <div>
      <PantryItemsIndex pantryItems={pantryItems} />
      <IngredientsNew onCreateIngredient={handleCreateIngredient} />
      <IngredientsIndex ingredients={ingredients} onCreatePantryItem={handleCreatePantryItem} />
    </div>
  );
}
