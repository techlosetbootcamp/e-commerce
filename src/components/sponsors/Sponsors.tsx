import React from 'react'
import brand8 from "../../assets/images/brand-8.png"
import brand7 from "../../assets/images/brand-7.png"
import brand6 from "../../assets/images/brand-6.png"
import brand5 from "../../assets/images/brand-5.png"
import brand4 from "../../assets/images/brand-4.png"







const brands=[
    brand8,brand7,brand6,brand5,brand4
]
const Sponsors = () => {
  return (
    <div className='grid grid-cols-1 lg:w-[1328px]  w-full overflow-hidden place-items-center gap-4 mt-44 md:mx-auto' >

    <div className='flex flex-col  md:flex-row   h-full justify-center py-4 items-center gap-12 bg-[#E2F4FF]  w-full  md:h-32'>


{brands.map((brand)=>(
    <img src={brand} key={brand} alt="brand" className='w-28 object-contain lg:w-44 h-12'/>

))}
    </div>

    </div>
  )
}

export default Sponsors



