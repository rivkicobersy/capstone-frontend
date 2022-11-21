import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function FavRecipesShowPage() {
  const [favRecipe, setFavRecipe] = useState({});
  const params = useParams();

  const handleShowFavRecipe = () => {
    axios.get(`http://localhost:3000/fav_recipes/${params.id}.json`).then((response) => {
      console.log(response.data);
      setFavRecipe(response.data);
    });
  };

  useEffect(handleShowFavRecipe, []);

  return (
    <div className="container">
      <div className="row">
        <h1>fav_recipe info</h1>
        <div className="col-md-3 mb-4" key={favRecipe.id}>
          <div className="card">
            <p className="card-name">Name: {favRecipe.name}</p>
            <img src={favRecipe.image} className="card-img-top" alt="" />
            <a className="btn btn-primary" href="/fav_recipes">
              Back to all recipes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
