import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function IngredientsShowPage() {
  const [ingredient, setIngredient] = useState({});
  const params = useParams();

  const handleShowIngredient = () => {
    axios.get(`http://localhost:3000/ingredients/${params.id}.json`).then((response) => {
      console.log(response.data);
      setIngredient(response.data);
    });
  };

  useEffect(handleShowIngredient, []);

  return (
    <div className="container">
      <div className="row">
        <h1>Ingredient info</h1>
        <div className="col-md-3 mb-4" key={ingredient.id}>
          <div className="card">
            <p className="card-name">Name: {ingredient.name}</p>
            <img src={ingredient.image_url} className="card-img-top" alt="" />
            <a className="btn btn-primary" href="/ingredients">
              Back to all ingredients
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
