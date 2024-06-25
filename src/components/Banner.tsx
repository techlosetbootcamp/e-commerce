

import Button from './Button'

const Banner = () => {
  return (
    
    
    <section
      className="   banner  w-full bg-center overflow-x-hidden my-20   bg-no-repeat"
    >
     
      <div
        className=" mx-auto w-full px-4 py-32 sm:px-6 lg:flex   justify-end lg:items-center lg:px-8"
      >
        
        <div className='mb-12  flex flex-col space-y-3 justify-center items-center md:justify-end ' >
         
    
        <Button text="Shop Now"/>
        <div className='flex flex-col flex-wrap gap-3  items-center '>
          <p className='text-[#2E8FC5] font-bold text-4xl lg:text-5xl   mt-2 '>
          Sale up to 50% off
          </p>
          <p className='text-white  ml-6'>12 inch hd display</p>
        </div>
          <Button text='New laptop '/>
    
        </div>
      </div>
    </section> 
)
}
export default Banner


