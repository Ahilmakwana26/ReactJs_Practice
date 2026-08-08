import React from 'react';
import { useParams,useLocation } from 'react-router-dom';
const ProductDetails = () => {
    //current it is static now need to pass data dynamically using route concept
   let param = useParams();
    let location = useLocation();
    let data = location?.state;
    console.log(param,data);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <a to="/products" className="text-sm font-semibold text-blue-600 hover:underline mb-8 inline-block">&larr; Back to Products</a>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-100/50 p-8 rounded-2xl">
        <div className="bg-slate-200/70 rounded-xl h-80 flex items-center justify-center text-slate-400 font-medium">
          <img
                 src={data?.product?.img}
                  alt={data?.product?.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />
        </div>
        
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <span className="text-xs uppercase font-bold text-blue-600 tracking-wider">{data?.product?.tag}</span>
            <h1 className="text-3xl font-bold text-slate-900 mt-1">{data?.product?.title}</h1>
            <p className="text-2xl font-bold text-slate-900 mt-2">{data?.product?.price}</p>
          </div>
          
          <p className="text-slate-600 text-sm leading-relaxed">
            Experience studio-quality audio with advanced active noise cancellation and an ultra-light ergonomic design.
          </p>
          
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;