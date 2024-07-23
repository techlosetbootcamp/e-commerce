import React from 'react'
import { IoSearch } from "react-icons/io5";
import { AiOutlineUser,AiOutlineShoppingCart } from "react-icons/ai";
import arrow from "../../assets/images/arrow-down.png"
import { IoIosArrowDown } from "react-icons/io";

import logo2 from "../../assets/images/logo2.png"
import { Link }  from 'react-router-dom';
import { useSelector } from 'react-redux';



const Navbar = ({setShowCart}:ShowCartProps) => {
    const cartCount=useSelector((state: { cart: string  })=>state.cart.length)
  return (


    <header className="bg-[#003F62] text-white overflow-x-hidden">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center md:justify-between justify-center">
        <div className="text-white md:flex md:items-center ">
            <img className='w-fit' src={logo2} alt="logo" />
            
        </div>
  
        <div className="hidden md:block">
        <div className='md:flex hidden w-full max-w-[500px] bg-[#EDA415] rounded-md mb-1'>
                 <input className='w-[90%] border-2  rounded-lg px-6 py-2' type="text" placeholder='Search'/>
                 <div className='bg-[#EDA415]   rounded-md text-white text-[26px] grid place-items-center px-2'>
                 <IoSearch />
                 </div>
             </div>
        </div>
  
        <div className="flex items-center gap-4 ml-12 lg:ml-0">
          <div className="flex sm:gap-2 items-center">
          <AiOutlineUser />
          <p className=' px-2 py-2.5 text-sm font-medium  '> signin</p>
            
  
            <div className=" sm:flex">
            <div className=' text-sm text-white bg-red-600 rounded-full w-5 h-5 grid place-items-center'>
         {cartCount}
         </div>
         <div className='text-yellow-500 text-4xl relative' onClick={()=>setShowCart(true)} data-testid="cart-icon">
        <Link to="/cart">
         <AiOutlineShoppingCart />
        </Link>
        </div>

            </div>
          </div>

        </div>
      </div>
    </div>

            
         <div className='flex justify-center lg:justify-between md:pl-8 items-center gap-24 absolute h-[71px] w-full bg-[#F4F4F4] overflow-x-hidden'>
         <Link to={'/productsCategory'} >
             <div className='bg-[#EDA415] h-[70px] w-52 flex justify-center items-center gap-4'>
             <p className='font-semibold text-white text-xs font-sans flex'>Browse By Category</p>
             <img className='w-6 h-6' src={arrow}  alt="image" />
             </div>
     </Link>

         <div className='hidden md:block' >
          <ul className='flex justify-center font-semibold cursor-pointer items-center gap-11 text-[#3A3A3A]'>
            <li className='flex items-center gap-2'>
            <p className=' '>Home</p>
            <IoIosArrowDown/>
            </li>
            <li className='flex items-center gap-2'>
            <p className=' '>Catalog</p>
            <IoIosArrowDown/>
            </li>
            <li >
            Blog
            </li>
            <li className='flex items-center gap-2'>
            <p className=' '>Pages</p>
            <IoIosArrowDown/>
            </li>
            <li>About Us</li>
          </ul>
         </div>
         <div className='font-bold hidden lg:block text-[#3A3A3A] pr-3'>30 Days free return</div>
         </div>
  </header>




)
}

export default Navbar





