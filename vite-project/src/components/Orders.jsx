import React from "react";

const Orders = () => {
  const orders = [
    { id: "ORD-1001", date: "2025-05-01", total: 2799, status: "Delivered" },
    { id: "ORD-1002", date: "2025-06-10", total: 4999, status: "On the way" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Previous Orders</h2>

      {orders.length === 0 ? (
        <p className="text-slate-600">You have no previous orders.</p>
      ) : (
        <div className="space-y-3">
          {orders.map((o) => (
            <div key={o.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
              <div>
                <div className="font-semibold">{o.id}</div>
                <div className="text-sm text-slate-500">{o.date} • {o.status}</div>
              </div>
              <div className="font-bold">₹{o.total}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;

