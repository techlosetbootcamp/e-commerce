import React from 'react'
import { useAppDispatch } from '../redux/Hooks';
import { RxCross1 } from 'react-icons/rx';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/Slice/cartSlice';





  
const CartProduct: React.FC<CartProductProps> = (
  { id, img, title, price, quantity }
) => {
    const dispatch = useAppDispatch();
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
            <img src={img} alt="title" className='h-20' />
        <div className='space-y-2'>
            <h3 className='font-medium'>{title}</h3>
            <div className='flex justify-between items-center'>
      
      <button className='...' onClick={() => dispatch(incrementQuantity({ id }))}>
        +
      </button>
      <p className='text-gray-600 text-[14px]'> {quantity} x ${price} </p>
      <button className='...' onClick={() => dispatch(decrementQuantity({ id }))}>
        -
      </button>
    </div>
            
        </div>
        </div>
    <RxCross1
    className='cursor-pointer'
    onClick={() => dispatch(removeFromCart(id))}
    />

    </div>
  )
}

export default CartProduct


