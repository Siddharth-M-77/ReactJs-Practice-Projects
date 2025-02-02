import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/productSlice';
import { Link } from 'react-router-dom';

const EccomerceApp = () => {
  const { products } = useSelector((store) => store.products);
  const { cartItems } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  return (
    <div className="relative flex flex-col items-center p-10 justify-center bg-gray-100 min-h-screen">
      <h1 className="text-5xl text-center font-extrabold mb-4 text-indigo-600">E-Commerce</h1>

      {/* Floating Cart Button */}
      <Link
        to="/cart"
        className="fixed z-40 top-5 right-10 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
      >
        🛒 Cart: {cartItems.length}
      </Link>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border-2 border-indigo-500 w-80 h-96 flex flex-col items-center bg-white rounded-3xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="w-60 h-60 overflow-hidden rounded-xl bg-gray-200">
              <img
                className="w-full h-full object-cover"
                src={p.image}
                alt={p.name}
              />
            </div>

            {/* Product Details */}
            <h1 className="text-xl font-bold text-center text-gray-800 mt-4">{p.name}</h1>
            <h2 className="text-lg text-indigo-600 font-semibold">{p.price} ₹</h2>

            {/* Add to Cart Button */}
            <button
              onClick={() => dispatch(addToCart({ p }))}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EccomerceApp;
