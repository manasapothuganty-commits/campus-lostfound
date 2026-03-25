import React from "react";

function ItemList({ items, onMatch }) {

  return (
    <div>

      <h2>Items List</h2>

      {items.map((i) => (
        <div key={i.id}>

          <h3>{i.name}</h3>
          <p>{i.description}</p>
          <p>{i.location}</p>
          <p>Status: {i.status}</p>
          <p>Contact: {i.contact}</p>

          <button onClick={() => onMatch(i.name)}>
            Match
          </button>

          <hr/>

        </div>
      ))}

    </div>
  );
}

export default ItemList;