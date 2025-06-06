import { useEffect, useState } from "react";

function ProductsPage({ cart, addToCart, removeFromCart, searchTerm }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => {
          const inCart = cart.find((item) => item.id === product.id);

          return (
            <div key={product.id} className="border p-4 rounded shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="h-32 mx-auto object-contain"
              />
              <h4 className="text-sm font-semibold mt-2">{product.title.slice(0, 30)}...</h4>
              <p className="text-gray-600">${product.price}</p>
              <button
                onClick={() =>
                  inCart ? removeFromCart(product.id) : addToCart(product)
                }
                className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
              >
                {inCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;