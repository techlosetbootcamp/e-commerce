import React from 'react'
import speaker from "../../assets/images/speaker1.png"
import { MdOutlineStarPurple500 } from "react-icons/md";
import shopping from "../../assets/images/view1.png"
import eye from "../../assets/images/eye.png"
import controller from "../../assets/images/controller.png"
import laptop from "../../assets/images/laptop.png"
import { FaCircle } from "react-icons/fa";
import { GoCircle } from "react-icons/go";
const Text=[{
    id:1,
    text:"57"
},
{
    id:2,
    text:"11"
},
{
    id:3,
    text:"33"
},
{

    id:4,
    text:"59"
}


]
const MostViewed = () => {
  return (

    <div className='md:flex-row flex flex-col gap-2 space-y-3 justify-center '>
        <div className='lg:w-[803px] w-full h-[505px] border-2 rounded-lg'>
            <div className='flex gap-3 items-center'>
                <div>
                    <img src={speaker} alt=""  className='w-[345px] h-[380px]'/>
                </div>
                <div className='w-[338px] h-[316px] space-y-6  flex flex-col'>
                    <div className=' text-[#003F62]  '>

                    <p className='text-xl font-semibold mb-2'>JBL bar 2.1 deep bass</p>
                    <p>$11,70</p>
                    </div>
                    <div className='flex flex-wrap gap-1 text-[#ACACAC]'>

                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                        
                    </div>

        <div className='flex gap-3 '>
            {Text.map((text)=>(
                <div className='font-bold text-xl flex items-center justify-center rounded-full w-[77px]
 text-[#EDA415] bg-[#E2F4FF] h-[78px]'>{text.text}</div>
            ))}
       
        </div>
        <div className='md:flex-row flex flex-col gap-3 space-y-2 items-center'>
            <div className='bg-[#87BCD9] flex items-center gap-4 justify-evenly rounded-3xl border w-[204px] h-[60px]'>
                <p className='font-semibold'>Add to cart</p>
                <div>
                    <img src={shopping} alt="" />
                </div>

            </div>
            <div className='w-[70px] h-[60px] rounded-full bg-[#87BCD9] flex items-center justify-center'>
                <img src={eye} alt="" />

            </div>
        </div>

                </div>
                
            </div>

    <div className='flex gap-1 justify-center'>
        <div className='text-[#EDA415]'>
        <FaCircle />
        </div>
        <div className='text-[#ADADAD]'>
        <GoCircle />
        </div>
    </div>
        </div>
        <div >

        <div className=' w-[493px] h-[241px] border-2 rounded-lg flex items-center'>
            <div className='flex gap-3  justify-center items-center '>
                <div>
                    <img src={controller} alt=""  className='w-[283px] h-[168px] object-contain'/>
                </div>
                <div className='w-[338px] h-[316px] space-y-4  flex flex-col  justify-center'>
                    <div className=' text-[#003F62]  '>

                    <p className='text-xl font-semibold mb-2'>Play game</p>
                    <p>$11,70</p>
                    </div>
                    <div className='flex gap-1 text-[#ACACAC]'>

                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                        
                    </div>

        
       

                </div>
                
            </div>

    
        </div>
        <div className='mt-3 w-[493px] h-[241px] border-2 rounded-lg flex items-center'>
            <div className='flex gap-3  justify-center items-center '>
                <div>
                    <img src={laptop} alt=""  className='w-[283px] h-[168px] object-contain'/>
                </div>
                <div className='w-[338px] h-[316px] space-y-4  flex flex-col  justify-center'>
                    <div className=' text-[#003F62]  '>

                    <p className='text-xl font-semibold mb-2'>Play game</p>
                    <p>$11,70</p>
                    </div>
                    <div className='flex gap-1 text-[#ACACAC]'>

                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                        
                    </div>

        
       

                </div>
                
            </div>

    
        </div>
        </div>

      
    </div>
  )
}

export default MostViewed
