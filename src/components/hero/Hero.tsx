import { RefObject, useRef } from "react";
import camera from "../../assets/images/camera.png"
import laptop from "../../assets/images/laptop.png"
import speaker from "../../assets/images/speaker.png"
import Slider from "react-slick";
const Hero = () => {



  return (
<>



    <section>
  <div className="mx-auto max-w-screen-xl mt-14 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
  
    <div key={1} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-64">
      <div className="relative ml-4 h-64 overflow-hidden  sm:h-80 md:order-last lg:h-full ">
        <img
          alt=""
          src={camera}
          className="absolute -top-[13px] inset-0 h-80 w-full object-contain"
        />
      </div>

      <div className=" flex flex-col justify-center items-center lg:items-start  lg:py-24 overflow-y-hidden">
        <h2 className="text-3xl font-bold text-[#1B5A7D] sm:text-4xl">Cnanon Camera</h2>
       <div className="flex gap-2 ">


        <button
          
          className="mt-8 inline-block w-[144px] h-[61px] rounded-[20px] bg-[#EDA415]  py-3 text-sm font-medium text-white transition-all  hover:bg-yellow-500  ease-in 0.5s focus:outline-none focus:ring focus:ring-yellow-400"
          >
          Shop Now
        </button>
        <button
          
          className="mt-8 inline-block w-[144px] h-[61px] border border-[#316887] rounded-[20px]   py-3 text-sm font-medium     "
          >
          View more
        </button>
          </div>
      </div>
    </div>
    
   
  </div>
</section>
  
          </>
  )
}

export default Hero


