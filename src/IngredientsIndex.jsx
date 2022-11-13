export function IngredientsIndex(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePantryItem(params, () => event.target.reset());
  };

  return (
    <div id="ingredients-index">
      <div className="container">
        <h1>All ingredients</h1>
        <div className="row">
          {props.ingredients.map((ingredient) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
