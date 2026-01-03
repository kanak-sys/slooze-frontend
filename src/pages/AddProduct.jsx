import { useState } from "react";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Product Added: ${name} - ₹${price}`);
    setName("");
    setPrice("");
  };

  return (
    <div>
      <h2>Add Product (Manager Only)</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
