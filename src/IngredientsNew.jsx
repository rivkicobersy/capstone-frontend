import axios from "axios";

export function IngredientsNew() {
  const handleCreateIngredient = (params) => {
    axios.post("http://localhost:3000/ingredients.json", params).then((response) => {
      console.log("Created ingredients", response);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateIngredient(params, () => event.target.reset());
  };

  return (
    <div className="container">
      <h1>New Ingredient</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" className="form-control" type="text" />
        </div>
        <div>
          Image: <input name="image_url" className="form-control" type="text" />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Create ingredient
        </button>
      </form>
    </div>
  );
}
