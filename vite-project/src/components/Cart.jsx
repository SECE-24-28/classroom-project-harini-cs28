import React from "react";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Smartphone", price: 25000, qty: 1 },
    { id: 2, name: "Smart Headphones", price: 2000, qty: 2 },
  ];

  const total = cartItems.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-slate-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((it) => (
            <div key={it.id} className="flex justify-between items-center bg-white p-3 rounded shadow">
              <div>
                <div className="font-semibold">{it.name}</div>
                <div className="text-sm text-slate-500">Qty: {it.qty}</div>
              </div>
              <div className="text-right">
                <div className="font-bold">₹{it.price * it.qty}</div>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center font-bold text-lg">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="w-full py-2 bg-green-600 text-white rounded">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};
export default Cart;
