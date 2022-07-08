import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const displayedPlants = plants.map((plant) => {    
    return (
    <PlantCard
    key={plant.id}
    plant={plant}
    // name={plant.name}
    // image={plant.image}
    // price={plant.price}
    />)
  })

  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {displayedPlants}
    </ul>
  );
}

export default PlantList;
