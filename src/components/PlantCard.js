import React, {useState} from "react";

function PlantCard({plant}) {
  const {name, image, price} = plant

  const [isInStock, setIsInStock] = useState(true)

  function plantInStock(){
    setIsInStock((prevState) => !prevState) 
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={plantInStock}>In Stock</button>
      ) : (
        <button onClick={plantInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
