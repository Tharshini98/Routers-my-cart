import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProductsPage from "./ProductsPage";
import CartPage from "./CartPage";
import Navbar from "./Navbar";

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <>
      <Navbar
        cartCount={cart.length}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ProductsPage
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              searchTerm={searchTerm}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
