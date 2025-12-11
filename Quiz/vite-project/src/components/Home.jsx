import React from "react";

const topProducts = [
  { 
    id: 1, 
    name: "Smart Watch", 
    price: "₹2499",
    image: "data:image/avif;base64,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"
  },
  { 
    id: 2, 
    name: "Wireless Headphones", 
    price: "₹1999",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbIn8N6yoVVtWRp9KyjBWPm3V7AVJguB86oMe9mAKS_9dz5Xa6cwdYyWF804mRo7AMhSuLZ43V2RlsOPPczS1bvHQQX6ZrkdfD6WwRzOMjAsbKFbNWPgL8kQ"
  },
  { 
    id: 3, 
    name: "Bluetooth Speaker", 
    price: "₹1499",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZ9Ky8CTbrLxRqzVp_YUuBUK8oFBG_DCresvpBs3Ur3a0R7OkyUKOyube0MKmYXsaQL6s0pZF07Sty7O6IJqaDB1GTorC_YZ-muYRXddDN6b8SzGU0VQWQ"
  },
];

const Home = () => {
  return (
    <div className="space-y-8 mt-6">
      <section className="bg-purple-100 p-8 rounded-xl flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-700">Welcome to ShopEasy</h1>
          <p className="text-slate-700">Top Products</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
          {topProducts.map((p) => (
            <div 
              key={p.id} 
              className="bg-white rounded-lg shadow p-4 text-center flex flex-col items-center"
           >
              <div className="h-28 flex items-center justify-center mb-3">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="h-full object-contain"
                />
              </div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-purple-600 font-bold mt-1">{p.price}</p>
            </div>
          ))}

        </div>

      </section>
    </div>
  );
};

export default Home;
