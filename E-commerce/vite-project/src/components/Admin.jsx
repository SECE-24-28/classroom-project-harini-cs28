import React, { useState } from "react";
const Admin = () => {
  const [form, setForm] = useState({ name: "", price: "", image: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New product:", form);
    alert("Product created (demo). Check console.");
    setForm({ name: "", price: "", image: "" });
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin - Add Product</h2>
      <form onSubmit={handleSubmit} className="max-w-md bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Price (₹)</label>
          <input name="price" value={form.price} onChange={handleChange} required type="number" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input name="image" value={form.image} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>
        <button type="submit" className="w-full py-2 bg-purple-600 text-white rounded">Save Product</button>
      </form>
    </div>
  );
};
export default Admin;
