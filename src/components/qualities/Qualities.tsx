import React from 'react'
import delivery from "../../assets/images/box-tick.png"
import crown from "../../assets/images/crown.png"
import warrenty from "../../assets/images/shield-security.png"

const qualities=[
    {
        id:1,
        text1:"Free Delivery",
        text2:"on order above $50,00",
        img:delivery
    },
    {
        id:2,
        text1:"Best quality",
        text2:"best quality in low price",
        img:crown
    },
    {
        id:3,
        text1:"1 year warranty",
        text2:"Available Warranty",
        img:warrenty
    }

]





const Qualities = () => {
  return (
    <div className='grid grid-cols-1 lg:w-[1328px]  w-full overflow-hidden place-items-center gap-4 mt-44 md:mx-auto' >

    <div className='flex flex-col  md:flex-row   h-full justify-evenly py-4 items-center gap-12 bg-[#E2F4FF] rounded-2xl  w-full  md:h-32'>


{qualities.map((quality)=>(
    <div className='flex gap-2 '>

    <img src={quality.img} key={quality.id} alt="brand" className=' object-contain  h-12'/>
    <div className=' text-[#003F62]'>

    <p className='font-bold text-xl'>{quality.text1}</p>
    <p className='font-medium'>{quality.text2}</p>
    </div>
    </div>

))}
    </div>

    </div>
  )
}

export default Qualities
