import React, { useEffect, useState } from 'react'
import eye from "../../assets/images/eye.png"
import heart from "../../assets/images/heart.png"
import { useAppDispatch } from '../../redux/hooks/Hooks'
import { fetchProductsByCategory } from '../../redux/Slice/fetchprodslice'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'


const RelatedProducts = ({category}: {category: string}) => {
    console.log(category) 
    const dispatch = useAppDispatch()
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const products = useSelector((state:RootState) => state.products.items);

useEffect(() => {
  dispatch(fetchProductsByCategory(category));
  setRelatedProducts(products.filter((product: any) => product.category === category));
}, [category, dispatch]);


  return (
    <div className='mt-16 mb-28 lg:pl-4 pl-0'>
        <div className='pl-24 mb-14'>

      <h1 className=' text-[#1B5A7D] font-bold text-3xl '>Related Products</h1>
        </div>
      <div className=' flex flex-col lg:flex-row gap-4 justify-center items-center'>
{relatedProducts.map((product:Product ) => (
    
    <div className=''>
            <div className='  w-[308px] h-[313px]  space-y-14 border border-[#B6B6B6] flex flex-col  items-center rounded-[19px]'>
                <div className='pt-3 flex'>
                    <img src={product.image}  alt="img" className='lg:w-[187px] w-fit h-[173px] object-fill' />
                    <img src={heart} alt="" className='w-[30px] h-[30px]'/>
                </div>
                <div className='flex gap-3'>
            <div className='  flex flex-col  space-y-2 justify-center '>
                <p className='text-xs lg:text-[18px] font-semibold'>{product.title.split(" ").slice(0, 3).join(" ")}</p>
                <p className='text-xs lg:text-[18px] font-semibold'>${product.price}</p>

               

            </div>
            <div className='w-[65px] h-[55px] rounded-full bg-[#87BCD9] flex items-center justify-center'>
                <img src={eye} alt="" />

            </div>
        </div>

            </div>

        </div>
        ))}
   
        </div>
      
    </div>
  )
}

export default RelatedProducts
