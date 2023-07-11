import React, { useState } from "react";

const formInit = {
  name: "",
  image: "",
  price: "",
};

function NewPlantForm({ handleSubmit }) {
  const [formData, setFormData] = useState(formInit);
  function handleFormChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(formData);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleFormChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleFormChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
