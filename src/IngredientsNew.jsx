export function IngredientsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateIngredient(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Ingredient</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image: <input name="image_url" type="text" />
        </div>
        <button type="submit">Create ingredient</button>
      </form>
    </div>
  );
}
