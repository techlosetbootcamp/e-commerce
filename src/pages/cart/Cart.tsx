import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { RxCross1 } from "react-icons/rx";
import CartProduct from '../../components/cartProduct/CartProduct';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { removeFromCart } from '../../redux/Slice/cartSlice';
import { useAppDispatch } from '../../redux/hooks/Hooks';
const Cart = ({setShowCart}:ShowCartProps) => {
    const products=useSelector((state: RootState) => state.cart);
    const id=products.filter((item)=>item.id)
    


      const gettotalall = () => {
        let total = 0;
        products.forEach((item: { price: number; quantity: number; }) => {
          total += item.price * item.quantity;
        });
        return total.toFixed(2);
      }
      const dispatch = useAppDispatch();



   
  return (

     <div className="container md:mx-auto  xl:px-8 my-24">
  <div className="md:flex-row  md:justify-center flex flex-col items-center  md:mx-auto">
    <div className="  w-full  sm:w-3/4 bg-white lg:px-10 ">
      <div className=" hidden lg:flex gap-[9rem] lg:gap-[15rem] xl:gap-[18rem] border-b py-3 px-2 items-center bg-[#E2F4FF] xl:w-[1000px]">
        <h1 className="font-semibold text-xl">Product</h1>
        <div className='flex gap-16 xl:gap-24  '>

        <h2 className="font-semibold text-xl">Price</h2>
        <h2 className="font-semibold text-xl">Quantity</h2>
        <h2 className="font-semibold text-xl">Subtotal</h2>
        </div>

       
      </div>

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

<hr />
    
 <div className=' flex  gap-8 justify-center items-center'>
  <Link to='/'>
<div className='lg:w-[280px] w-[150px] h-[65px] bg-[#EDA415] font-semibold text-xs lg:text-xl text-white flex justify-center items-center  mt-8 rounded-[32px]'>
  <button>Continue Shopping</button>
  </div>   
  </Link>
  <div className='lg:w-[220px] h-[65px] w-[150px] font-semibold text-xs text-[#797979] lg:text-xl flex justify-center items-center border-2 mt-8 rounded-[32px]'>
  <button>Update Cart</button>
  </div> 
  {products?.map((item) => (
  <div key={item.id} className='lg:w-[220px] h-[65px] w-[150px] font-semibold text-[#C33131] text-xs lg:text-xl border-[#C33131] flex justify-center items-center border-2 mt-8 rounded-[32px]'>
    <button onClick={() => dispatch(removeFromCart(item.id))}>
      Clear Cart
    </button>
  </div>
))} 
  
</div>
    </div>
    <div id="summary" className=" w-full  border mt-5 md:ml-0  h-[499px]    md:w-[390px]  ">
    <div className='bg-[#E2F4FF] w-full flex justify-center pt-2 h-[52px] lg:w-[390px]'>

      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
    </div>
    <div className='px-6'>


    <div className='flex justify-between px-9 font-semibold text-[#232323] text-xl mt-4 '>
      <p>Subtotal</p>
      <p>${gettotalall()}</p>
    </div>
      <hr  className='mt-8 w-[338px]  mx-auto'/>
      <div className='flex justify-between w-[338px] px-5  font-medium text-[#232323] text-lg mt-6 border rounded-2xl mx-auto py-2'>
        <p>Enter Coupon Code</p>
        <p>Apply</p>
    </div>
    <hr  className='mt-8 w-[338px]  mx-auto'/>
    <div className='flex justify-between w-[338px] px-5 items-center font-medium text-[#232323] text-lg mt-6 border rounded-2xl mx-auto py-2'>
        <p>Country</p>
        <IoIosArrowDown />
    </div>
    <div className='flex justify-between w-[338px]  font-medium text-[#232323] text-[17px] mt-6  mx-auto py-2'>
      <p>Total Amount</p>
      <p>${gettotalall()}</p>
    </div>
<div className='lg:w-[339px] h-[52px] bg-[#EDA415] font-semibold text-xl text-white flex justify-center items-center mx-auto mt-8 rounded-[32px]'>
  <button>Proceed to checkout</button>
</div>

      </div>


     
    </div>
  </div>
</div>   




   
  )
}

export default Cart