import products from "../data/products";

export default function Products() {
  return (
    <div className="container">
      <h2>Products</h2>

      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} – ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
