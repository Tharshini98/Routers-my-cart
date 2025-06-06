function CartPage({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalPrice = total * 0.9;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map((item) => (
        <div key={item.id} className="border-b py-4">
          <h4 className="font-semibold">{item.title.slice(0, 30)}...</h4>
          <p>
            Price: ${item.price} × {item.quantity} = ${(
              item.price * item.quantity
            ).toFixed(2)}
          </p>
          <div className="space-x-2 mt-2">
            <button
              onClick={() => updateQuantity(item.id, -1)}
              className="px-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <button
              onClick={() => updateQuantity(item.id, 1)}
              className="px-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      {cart.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Total: ${total.toFixed(2)}</h3>
          <h3 className="text-lg font-semibold text-green-700">
            After 10% Discount: ${finalPrice.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
}

export default CartPage;