import axios from "axios";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function Home() {
  const [ingredients, setIngredients] = useState([]);
  const [value, onChange] = useState(new Date());

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get("/ingredients.json").then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };

  const [pantryItems, setPantryItems] = useState([]);

  const handleIndexPantryItems = () => {
    console.log("handleIndexPantryItems");
    axios.get("/pantry_items.json").then((response) => {
      console.log(response.data);
      setPantryItems(response.data);
    });
  };

  const handleCreatePantryItem = (params, successCallback) => {
    console.log("handleCreatePantryItem", params);
    axios.post("/pantry_items.json", params).then((response) => {
      setPantryItems([...pantryItems, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexIngredients, []);
  useEffect(handleIndexPantryItems, []);

  return (
    <div>
      <div className="container">
        <Calendar onChange={onChange} value={value} />
      </div>
      <IngredientsIndex ingredients={ingredients} onCreatePantryItem={handleCreatePantryItem} />
    </div>
  );
}
