export function IngredientsIndex(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePantryItem(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>All ingredients</h1>
      {props.ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <h2>{ingredient.name}</h2>
          <img src={ingredient.image_url} alt="" />
          <form onSubmit={handleSubmit}>
            <div>
              <input name="ingredient_id" defaultValue={ingredient.id} type="hidden" />
            </div>
            <div>
              Amount: <input name="amount" type="number" />
            </div>
            <button>Add to pantry</button>
          </form>
        </div>
      ))}
    </div>
  );
}
