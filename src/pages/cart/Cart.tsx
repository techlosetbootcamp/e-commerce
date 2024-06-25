import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { RxCross1 } from "react-icons/rx";
import CartProduct from '../../components/cartProduct/CartProduct';
import { Link } from 'react-router-dom';
const Cart = ({setShowCart}:ShowCartProps) => {
    const products=useSelector((state: RootState) => state.cart);
    const gettotal=() => {
      let total=0
      products.forEach((item: { price: number; quantity: number; })=>(total+=item.price * item.quantity).toFixed(2))
        return total
        
      }


   
  return (
    <div className='bg-black min-h-screen w-full fixed left-0 top-0 z-20 overflow-y-scroll'>
        <div className='max-w-md w-full min-h-full absolute top-0 left-0 p-6 bg-white'>
            <Link to="/">
            <RxCross1
            className='absolute m-6 top-0 left-0 text-[24px] cursor-pointer'
            onClick={() => setShowCart(false)}
            />
            </Link>
            
            <h3 className='pt-6 text-lg font-medium uppercase text-gray-500'>
                Your Cart
            </h3>
    <div className='mt-6 space-y-2'>
    {products?.map((item) => (
        <CartProduct
        key={item.id}
        id={item.id}
        img={item.image}
        title={item.title}
        price={item.price}
        quantity={item.quantity}

        
        />
       
        ))}
    </div>
    <div className='flex justify-between items-center font-medium text-xl py-4'>
        <p>Total :</p>
        <p>
            ${gettotal()}
        </p>
        <button className='bg-black text-white text-center w-full rounded-3xl py-2 my-4'>
        View Cart
        </button>
        <button className='bg-black text-white text-center w-full rounded-3xl py-2 my-4'>
        CheckOut
        </button>
    </div>
        </div>

    </div>
  )
}

export default Cart