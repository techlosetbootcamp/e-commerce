import React from 'react'
import blog1 from "../../assets/images/blog1.png"
import blog2 from "../../assets/images/blog2.png"

const News = () => {
  return (
    <section className='text-[#003F62] my-24 cursor-pointer' >
      <h1 className='ml-6 font-bold text-2xl mb-10'>Latest News</h1>
      <div className=' md:flex gap-2 mx-6'>

  <div className="  w-fit h-1/3 mx-auto flex  p-4 md:flex-row flex-col rounded-lg items-center border-2">
  <div className='flex flex-col md:flex-row sm:items-center sm:justify-center'>
    

    <div className="  md:w-fit  mb-10 md:mb-0">
      <img className="object-cover  rounded" alt="hero" src={blog1}/>
    </div>
    <div className="lg:flex-grow sm:w-fit lg:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <div className='font-medium border-2  text-xl p-2 rounded-3xl'>
    22,oct,2021
    </div>
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">Who avoids a 
      pain that produces?
        
      </h2>
      <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>
      
  </div>
    </div>
  </div>
  <div className="container  w-fit h-auto mx-auto flex  p-4 md:flex-row flex-col rounded-lg items-center border-2">
  <div className='flex flex-col md:flex-row sm:items-center'>
    

    <div className="  md:w-fit   md:mb-0">
      <img className="object-cover  rounded" alt="hero" src={blog2}/>
    </div>
    <div className="lg:flex-grow sm:w-fit lg:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <div className='font-medium border-2  text-xl p-2 rounded-3xl'>
    22,oct,2021
    </div>
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">Who avoids a 
      pain that produces?
        
      </h2>
      <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>
      
  </div>
    </div>
  </div>
      </div>
</section>
  )
}

export default News



