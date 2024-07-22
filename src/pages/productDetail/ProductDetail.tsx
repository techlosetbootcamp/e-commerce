// src/pages/ProductDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity } from '../../redux/Slice/cartSlice';
import { RootState } from '../../redux/store/store';
import toast from 'react-hot-toast';
import { BsStar } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { useAppDispatch } from '../../redux/hooks/Hooks';
import heart from '../../assets/images/heart.png';
import google from "../../assets/images/google.png"
import facebook from "../../assets/images/facebook.png"
import whatsapp from "../../assets/images/whatsapp.png"
import RelatedProducts from '../../components/relatedProducts/RelatedProducts';
import { Oval } from 'react-loader-spinner';
const ProductDetail = () => {
  const { productId } = useParams();
  const products = useSelector((state: RootState) => state.cart);
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

// fetch products according to the selected category and display as related products





  const addProductToCart = (product: Product) => {
    if (quantity > 0) {
      dispatch(addToCart({ product, quantity }));
      toast('Item added to cart');
    } else {
      toast.error('Quantity must be greater than 0');
    }
  };

  const incrementProductQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

   const decrementProductQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const foundProduct = products.find((p) => p.id === Number(productId));
        if (foundProduct) {
          setProduct(foundProduct);
          setQuantity(foundProduct.quantity);
        } else {
          const response = await axios.get<Product>(`https://fakestoreapi.com/products/${productId}`);
          setProduct({ ...response.data, quantity: 0 });
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError('Error fetching product details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId, products]);



  if (error) {
    return <div>Error: {error}</div>;
  }

 
// const category=product?.category
// console.log(category)
  return (
    <>
 {!product || isLoading ?   (
         <div className='flex justify-center  relative top-[400px] h-[600px]'>
          <Oval
            visible={true}
            height="150"
            width="150"
            color="#EDA415"
            ariaLabel="oval-loading"
            wrapperStyle={{
            }}
            wrapperClass=""
          />
         </div> 
       ) :( 
         <> 

        
        <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-4 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex  flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/3 w-full lg:h-auto h-60 object-fill object-center p-6 border rounded-lg"
            src={product.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <p className="text-xl font-semibold mt-2">{product.price}</p>

            <div className="text-[#D4A80A] flex gap-2 mt-4 items-center">
              <BsStar />
              <BsStar />
              <BsStar />
              <BsStar />
              <BsStar />
              <p className="text-black font-semibold text-xs ml-2">No reviews</p>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <p className="font-semibold">Availability:</p>
              <div className="text-[#30BD57] flex gap-2 items-center">
                <FaCheck />
                <p>In stock</p>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-[#5D5D5D]">Hurry up! only 34 product left in stock!</p>
            </div>
            <hr className="mt-5" />

            <div className="flex flex-col justify-center space-y-8 mt-6 pb-5  border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>
              <div className="flex items-center">
                <div className="flex gap-2 items-center">
                  <p className="font-semibold">Size :</p>
                  <div className="flex items-center gap-3">
                    <div className="w-14 font-semibold h-8 bg-[#EEEEEE] border rounded-md flex items-center justify-center">30</div>
                    <div className="w-14 font-semibold h-8 bg-[#EEEEEE] border rounded-md flex items-center justify-center">56</div>
                    <div className="w-14 font-semibold h-8 bg-[#EEEEEE] border rounded-md flex items-center justify-center">42</div>
                    <div className="w-14 font-semibold h-8 bg-[#EEEEEE] border rounded-md flex items-center justify-center">48</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
            <p>Quantity :</p>
            <div className='flex' >

              <button
                className=" w-9 h-8 bg-[#EEEEEE] border-0  focus:outline-none  rounded"
                onClick={decrementProductQuantity}
                >
                -
              </button>
              <div className='w-16 flex items-center justify-center font-semibold h-8 bg-[#EEEEEE] border-0 '>{quantity}</div>
              <button
                className=" w-9 h-8 bg-[#EEEEEE] border-0  focus:outline-none  rounded"
                onClick={incrementProductQuantity}
                >
                +
              </button>
                </div>
              </div>
              <div className='sm:flex-row items-center gap-4 mt-8 flex flex-col'> 

              <button
                className="flex justify-center items-center w-full sm:w-[200px] h-[70px] text-xl text-white bg-[#EDA415] border-0 py-2 px-5 hover:bg-yellow-500 transition-all ease-in  rounded-full"
                onClick={() => addProductToCart(product)}
                >
                Add to Cart
              </button>
              <button
                className="flex justify-center items-center w-full sm:w-[200px] h-[70px] text-xl  text-white bg-[#EDA415] border-0 py-2 px-5 hover:bg-yellow-500 transition-all ease-in   rounded-full"
                >
                Buy it now
              </button>
              <div>
                <img src={heart} alt="" />
              </div>
                </div>
                <hr className='mt-9' />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-10 space-y-8'>

          <div className='flex justify-center items-center font-semibold text-xl sm:mr-[170px]  gap-4'>
            <p>Sku:</p>
            <p>01133-9-9</p>
        </div>
        <div className='flex font-semibold text-xl justify-center items-center sm:ml-14 gap-4 mt-4'>
          <p>Category</p>
          <p>20% off,  49% off  Allex remote</p>
        </div>
        <div className='flex gap-3 justify-center items-center mt-8 sm:mr-[150px]'>
          <p className='font-semibold text-xl'>Share</p>
          <div className='flex gap-3 justify-center items-center'>
            <img src={google} alt="" />
            <img src={facebook} alt="" />
            <img src={whatsapp} alt="" />
          </div>
        </div>
          </div>
          <div className='flex justify-center mt-20 mr-48 sm:text-xl font-semibold gap-3 '>
            <button className='w-[187px] h-[60px] border font-semibold border-[#8F8F8F] rounded-[20px]'>Description</button>
            <button className='w-[187px] h-[60px] bg-[#003F62] text-white border border-[#8F8F8F] rounded-[20px]'>Reviews</button>

          </div>
      </div>
    </section>
    <div className='lg:w-[1314px]  lg:h-[223px] h-auto border border-[#B8B8B8] rounded-lg mx-2 sm:mx-auto'>
      <div className='flex flex-col space-y-6 pl-8 justify-center mt-4'>
        <p className='text-[#003F62] font-bold text-xl '>Cutomer reviews</p>
        <p className='text-[#003F62] font-semibold'>No reviews yet</p>
        <button className='bg-[#003F62] w-[180px] h-[40px] text-white  mt-4'>Write a review</button>
      </div>
    </div>
{/* <RelatedProducts /> */}
<RelatedProducts category={product.category?.toString()} />
    </>

)

}
 </>
  );
};

export default ProductDetail;



  {/* // <div className=' text-center mt-40'>
  //   <img src={product.image} alt={product.title} className="w-fit h-64 object-cover inline-block" />
  //   <h2 className="mt-2 text-lg">{product.title}</h2>
  //   <p className='p-4'>{product.description}</p>
  //   <p>${product.price}</p>
  //   <button 
  //     onClick={addProducttoCart.bind(null, {product})}
  //     className="mt-2 bg-[#EDA415] text-white p-2"
  //   >
  //     Add to Cart
  //   </button>
  // </div> */}