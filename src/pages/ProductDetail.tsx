// src/pages/ProductDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/Slice/cartSlice';
import { useAppDispatch } from '../redux/Hooks';
import { RootState } from '../redux/store';


const ProductDetail = () => {
  const { productId } = useParams();
  const products = useSelector((state: RootState) => state.products.items);
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useAppDispatch();


  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(productId));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      const fetchProduct = async () => {
        try {
          const response = await axios.get<Product>(`https://fakestoreapi.com/products/${productId}`);
          setProduct(response.data);
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      };
      fetchProduct();
    }
  }, [productId, products]);



  if (!product) return <div>Loading...</div>;

  return (
    <div className=' text-center mt-40'>
      <img src={product.image} alt={product.title} className="w-fit h-64 object-cover inline-block" />
      <h2 className="mt-2 text-lg">{product.title}</h2>
      <p className='p-4'>{product.description}</p>
      <p>${product.price}</p>
      <button 
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 bg-[#EDA415] text-white p-2"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
