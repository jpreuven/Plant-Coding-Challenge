import React, { useState } from "react";

function PlantCard({ id, name, price, image }) {
  const [clicked, setClicked] = useState(true);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {clicked ? (
        <button onClick={handleClick} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
