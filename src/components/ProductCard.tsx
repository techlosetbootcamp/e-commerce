// src/components/ProductCard.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Product, addToCart } from '../redux/Slice/carSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const ProductCard = ( {product}: {product:Product }) => {
  const dispatch = useDispatch();
  console.log(product)

  const addProducttoCart = () => {
    dispatch(addToCart(product));
    toast.success("Item added to cart")
  };

  return (
    <div className="border p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="w-fit h-64 object-fill inline-block" />
      <h2 className="mt-2 text-lg text-center">{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.quantity}</p>
      <p>{product.category}</p>
      {/* button to view detail
       */}
       <div className='flex space-x-2 items-end h-full'>

       <Link to={`/product/${product.id}`}>
       <button className="mt-2 bg-[#EDA415]  text-white p-2">
        View Details
       </button>
       </Link>
      <button 
        onClick={addProducttoCart}
        className="mt-2 bg-[#EDA415]  text-white p-2"
        >
        Add to Cart
      </button>
          </div>
    </div>
  );
}

export default ProductCard;


// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Product, addToCart } from '../redux/Slice/carSlice';

// const Productcard= ({ product }: {product:Product}) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div className="rounded overflow-hidden shadow-md bg-white border border-gray-200 p-4 flex flex-col items-center justify-between">
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-full h-64 object-cover rounded-t-lg" // Apply rounded top for a smooth transition
//       />
//       <div className="flex flex-col space-y-2 mt-4">
//         <h2 className="text-lg font-medium text-gray-900">{product.title}</h2>
//         <p className="text-base text-gray-700">${product.price}</p>
//         <p className="text-sm text-gray-500">{product.quantity}</p>
//       </div>
//       <button
//         onClick={handleAddToCart}
//         className="mt-4 px-4 py-2 rounded bg-blue-500 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default Productcard;
