import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const PRODUCTS = [
  {
    id: 1,
    tag: "Earbuds",
    title: "Earbud Y168A",
    price: "$270.00 USD",
    rating: 4.8,
    reviews: 124,
    badge: "Hot",
    img: "https://i.pinimg.com/736x/85/e3/74/85e3747ae5979af34fa0e4335f6397f3.jpg"
  },
  {
    id: 2,
    tag: "Headphones",
    title: "Pro X168A Wireless",
    price: "$250.00 USD",
    rating: 4.9,
    reviews: 89,
    badge: "Sale",
    img: "https://i.pinimg.com/736x/5d/ce/40/5dce402ceb8dea184ff10f9e8c5ce1c2.jpg"
  },
  {
    id: 3,
    tag: "Phones",
    title: "Apex Phone Pro Max 15",
    price: "$999.00 USD",
    rating: 5.0,
    reviews: 310,
    badge: "New",
    img: "https://i.pinimg.com/736x/4c/92/7b/4c927b48a896626d70b6d60d374e5115.jpg"
  },
  {
    id: 4,
    tag: "Laptops",
    title: "Ultrabook Air 14-inch",
    price: "$1,299.00 USD",
    rating: 4.7,
    reviews: 65,
    badge: null,
    img: "https://i.pinimg.com/736x/bd/8c/c9/bd8cc91f0dbab90de8cc3a9bfa078960.jpg"
  },
  {
    id: 5,
    tag: "Watches",
    title: "ChronoFit Smart Watch 2",
    price: "$199.00 USD",
    rating: 4.6,
    reviews: 210,
    badge: "Popular",
    img: "https://i.pinimg.com/736x/51/f0/43/51f043cce6130715ca4df3a6cd44a8ee.jpg"
  },
  {
    id: 6,
    tag: "Monitors",
    title: "Curved Gaming Monitor 34\"",
    price: "$549.00 USD",
    rating: 4.9,
    reviews: 142,
    badge: "Top Rated",
    img: "https://i.pinimg.com/1200x/08/69/cc/0869cc39256cdb8650c7b76ea08c3a18.jpg"
  },
  {
    id: 7,
    tag: "Speakers",
    title: "Speaker P168A Boom",
    price: "$240.00 USD",
    rating: 4.5,
    reviews: 98,
    badge: null,
    img: "https://i.pinimg.com/736x/c4/5e/15/c45e15f05498964f93e3b5b1636000c9.jpg"
  },
  {
    id: 8,
    tag: "Laptops",
    title: "Studio Book Pro 16",
    price: "$1,899.00 USD",
    rating: 4.8,
    reviews: 44,
    badge: "New",
    img: "https://i.pinimg.com/736x/62/8a/9d/628a9dd593eec37395f2884e1c73a013.jpg"
  },
  {
    id: 9,
    tag: "Phones",
    title: "Nexus Phone Lite Edition",
    price: "$499.00 USD",
    rating: 4.4,
    reviews: 175,
    badge: "Sale",
    img: "https://i.pinimg.com/736x/3c/59/e8/3c59e81de3aaf780de2f6b0a15cb18dd.jpg"
  },
  {
    id: 10,
    tag: "Watches",
    title: "Luxury Titanium Edition",
    price: "$399.00 USD",
    rating: 4.9,
    reviews: 52,
    badge: null,
    img: "https://i.pinimg.com/736x/45/da/62/45da62cbc8c1f55a242071be3f84e8d9.jpg"
  }
];

const Product = () => {
  let navigate = useNavigate();
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-slate-50/30">
      <section>
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-600">
              New Arrivals
            </span>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Featured <span className="text-blue-600">Products</span>
            </h2>
            <p className="max-w-md text-slate-500 text-sm">
              Discover our curated selection of high-performance tech gadgets designed for the modern lifestyle.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(8,112,184,0.07)]"
            >
              {/* Image Container - Full Size Cover */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                {/* Product Badge */}
                {prod.badge && (
                  <span className="absolute left-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm backdrop-blur-sm">
                    {prod.badge}
                  </span>
                )}

                {/* Favorite Button */}
                <button className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-400 opacity-0 transition-all duration-300 hover:text-red-500 group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                
                <img
                  src={prod.img}
                  alt={prod.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Quick Action Overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="w-full rounded-2xl bg-slate-900 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-blue-600 active:scale-95">
                    Add to Cart
                  </button>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Details Container */}
              <div className="flex flex-col p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600/80">
                    {prod.tag}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-amber-400">★</span>
                    <span className="text-xs font-bold text-slate-700">{prod.rating}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <button onClick={()=>{
                  navigate("/productsDetails/", {
                    state: { prod }
                  });
                  }} className="text-lg font-bold text-slate-800 transition-colors group-hover:text-blue-600">
                    {prod.title}
                  </button>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    Premium quality {prod.tag.toLowerCase()} for professionals.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-black text-slate-900">
                    {prod.price.split(' ')[0]}
                    <span className="ml-1 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">USD</span>
                  </span>
                  
                  <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" title="In Stock" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;