import { Link } from "react-router";

const demoProducts = [
  { id: 1, name: "Smartphone", price: 25000, image: "https://m.media-amazon.com/images/I/61gaGBL+6UL.jpg" },
  { id: 2, name: "Smart Headphones", price: 2000, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQNGg-w2CC8hwWMWlWeFC4ZsIiWMDsGnfk8u-Nd53tCgUIFdRsNpUK7D3bzx5bXnUJlaQNpr3uIWk1yw_nQz5xH4RLSLYeh2RefAK5p5Y24JuNCt7WFX6V5cwxUVAy3TQNWt63_Eu6Btgk&usqp=CAc" },
  { id: 3, name: "Bluetooth Speaker", price: 1499, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR9y8S4_Ah6jTYIa869ZCvb4MxSSnW2Vl9m2qgbYnuX3Yji8iWtqIEORX8ZSONdc8YjfF-BhBlt_7r46uZFLsWXPOCv1Dhvk2Sr6ea8XBfczvuW-FXpPbxReA" },
  { id: 4, name: "Smart Watch", price: 4999, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7nTZcquPhr887S3MKMVaixfus4DarD5uydELBaiKlndWmXOssTMVIdUwUDXzyVhP_i-F8SMn_5BRS3k5t4G6ycvKzqDE2EvB0OlqJY-CqO3mftdNtLUS0" },
];

const Products = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {demoProducts.map((p) => (
          <div key={p.id} className="bg-white rounded-xl shadow p-4 flex flex-col  w-[260px] h-[380px]">
            <div className="h-[170px] flex items-center justify-center mb-3">
              <img src={p.image} alt={p.name} className="max-h-full object-contain"/>
            </div>
            <div className="flex-1 text-center">
              <h3 className="font-semibold text-lg truncate">{p.name}</h3>
              <p className="text-purple-600 font-bold mt-1">₹{p.price}</p>
            </div>
            <div className="mt-auto flex gap-2">
              <button className="flex-1 py-2 rounded bg-purple-600 text-white hover:bg-purple-700">
                Add to Cart
              </button>
              <Link to={`/products/${p.id}`} className="py-2 px-3 border rounded flex items-center justify-center hover:bg-gray-100">
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
