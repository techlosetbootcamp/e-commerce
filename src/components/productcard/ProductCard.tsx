import React from 'react';
import {  addToCart } from '../../redux/Slice/cartSlice';
import { Link } from 'react-router-dom';
import  toast  from 'react-hot-toast';
import { useAppDispatch } from '../../redux/hooks/Hooks';
const ProductCard = ( {product}: {product:Product }) => {
  const dispatch = useAppDispatch();
const quantity=1
  const addProducttoCart = () => {
    dispatch(addToCart({product,quantity}));
    toast('Item added to cart')
  };

  return (
    <div className="border p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="w-fit h-56 lg:h-64 object-fill inline-block" />
      <h2 className="mt-2 lg:text-lg text-center">{product.title.split(" ").slice(0, 3).join(" ")}</h2>
      <p>${product.price}</p>
      <p>{product.quantity}</p>
      <p>{product.category}</p>
     
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


