function ListGroup() {
  let items = ["madurai", "bglr", "chennai", "cbe"];
  items = [];
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
