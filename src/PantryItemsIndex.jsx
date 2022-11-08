export function PantryItemsIndex(props) {
  return (
    <div className="container">
      <h1>All pantry items</h1>
      {props.pantryItems.map((pantryItem) => (
        <div key={pantryItem.id}>
          <h1>{pantryItem.ingredient.name}</h1>
          <img src={pantryItem.ingredient.image_url} alt="" />
          <p>Quantity: {pantryItem.amount}</p>
        </div>
      ))}
    </div>
  );
}

// TODO change to seperate page
