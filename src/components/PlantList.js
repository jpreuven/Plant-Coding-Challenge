import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ data }) {
  const plantArr = data.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        id={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
      />
    );
  });

  return <ul className="cards">{plantArr}</ul>;
}

export default PlantList;
