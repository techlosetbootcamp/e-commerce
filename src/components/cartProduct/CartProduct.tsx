// src/components/CartProduct.tsx
import React from 'react';
import { useAppDispatch } from '../../redux/hooks/Hooks';
import { RxCross1 } from 'react-icons/rx';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../../redux/Slice/cartSlice';





const CartProduct: React.FC<CartProductProps> = ({ id, img, title, price, quantity }) => {
  const dispatch = useAppDispatch();

  const total=()=>{
    return (price*quantity).toFixed(2)
  }
  return (

<>

    <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50 gap-4">
      <img src={img} alt="Black Leather Purse" className=" mb-3 h-auto w-full md:w-[136px]   object-contain " />
    <div className="  flex flex-col justify-center items-center  space-y-4">
      <div className="flex items-center justify-center  w-[50%]">
        <p className="text-xl  font-bold leading-none text-[#003F62]">{title.slice(0, 20)}</p>
       
      </div>
      <div className=' lg:w-fit flex flex-col justify-center items-center space-y-4 w-[70%]'>

      <p className="lg:text-xl leading-3 text-[#2F2F2F]  ">Color: green</p>
      <p className=" mr-[36px] lg:mr-0 lg:text-xl leading-3  text-[#2F2F2F] ">Size: 30</p>
      </div>
      
    </div>
    <div className='flex items-center justify-center gap-8 lg:gap-16 mt-4'>
      <p className='text-xl font-semibold leading-none text-[#003F62]' >{price}</p>
      <div className="flex items-center space-x-3">
        
        <div className='flex' >

          <button
            className=" w-9 h-8 bg-[#EEEEEE] border-0  focus:outline-none border-1 rounded"
            onClick={() => dispatch(decrementQuantity({ id }))}
            >
            -
          </button>
          <div className='w-14 flex items-center justify-center font-semibold h-8 bg-[#EEEEEE] '>{quantity}</div>
          <button
            className=" w-8 h-8 bg-[#EEEEEE]  focus:outline-none  rounded border-1"
            onClick={() => dispatch(incrementQuantity({ id }))}

            >
            +
          </button>
            </div>
          </div>

          <p className='hidden lg:block text-xl font-semibold leading-none text-[#003F62] pl-3' >{total()}</p>
        
    </div>
  </div>
 

</>

    
  );
}

export default CartProduct;
