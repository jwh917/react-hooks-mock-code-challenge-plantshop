import React from "react";

function NewPlantForm({nameInput, imageInput, priceInput, formSumbitHandle}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={formSumbitHandle}>
        <input type="text" name="name" placeholder="Plant name" onChange={nameInput} />
        <input type="text" name="image" placeholder="Image URL" onChange={imageInput} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={priceInput} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
