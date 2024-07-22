

import Button from '../button/Button'

const Banner = () => {
  return (
    
    
    <section
      className="   banner  w-full lg:[1315px] h-full lg:h-[417px] bg-center overflow-x-hidden bg-cover md:bg-contain my-20   bg-no-repeat"
    >
     
      <div
        className=" mx-auto  px-4 py-20 sm:px-6 lg:flex   justify-end lg:items-center lg:px-8"
      >
        
        <div className='  flex flex-col space-y-3 justify-center items-center  ' >
         
    
        <Button text="Shop Now"/>
        <div className='flex flex-col flex-wrap gap-3 lg:w-[660px] items-center '>
          <p className='text-[#2E8FC5] font-bold text-3xl lg:text-4xl   mt-2 '>
          Sale up to 50% off
          </p>
          <p className='text-white  '>12 inch hd display</p>
        </div>
          <Button text='New laptop '/>
    
        </div>
      </div>
    </section> 
)
}
export default Banner


