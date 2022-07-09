import React, {useState} from "react";

function PlantCard({plant, handleDelPlant, priceSubmitHandle}) {
  const {name, image, price} = plant

  const [isInStock, setIsInStock] = useState(true)

  function plantInStock(){
    setIsInStock((prevState) => !prevState) 
  }

  function handlePriceUpdate(event){
    event.preventDefault()
    console.log(plant)
    // console.log(event.target[0].value)
    const newPrice = event.target[0].value

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({price: newPrice}),
    })
      .then((r) => r.json())
      .then((newPrice) => priceSubmitHandle(newPrice));


  }  

  function handleDeleteClick() {
    // console.log(plant);
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDelPlant(plant));
  }

  return (
    <div className="card">
      <li >
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>Price: {price}</p>

        <br></br>

        <form onSubmit={handlePriceUpdate}>
          <label htmlFor="price">Edit Price (0.01-100.00):</label>
          <input type="number" className="price" name="price"
          min="0.01" max="100.00" step="0.01" defaultValue={price} placeholder={price}/>
          <small>(Press Enter to Edit)</small>
        </form> 

        {isInStock ? (
          <button className="primary" onClick={plantInStock}>In Stock</button>
        ) : (
          <button onClick={plantInStock}>Out of Stock</button>
        )}
        <br></br>
        <button className="trash" onClick={handleDeleteClick}>🗑</button>
      </li>

    </div>

  );
}

export default PlantCard;
