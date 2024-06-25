import React from 'react'
import team1 from "../../assets/images/team1.png"
import team2 from "../../assets/images/team2.png"
import team3 from "../../assets/images/team3.png"
const Team = () => {
  return (
    
    <section >
    <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
  

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className=' h-fit rounded-2xl flex flex-col p-2 space-y-6 border w-full
         border-gray-400'>

        

            <div className='flex  mt-3 ml-3'>

            <img src={team1} alt=""  className='h-16 w-16 rounded-full '/>
          
  
          <h2 className="mt-4 text-xl font-bold ml-3">Savannah Nguyen</h2>
            </div>
            <div className='bg-[#E2F4FF] rounded-lg mx-auto p-3 mb-2  w-fit  '>

          <p className="mt-1 text-sm text-[#003F62] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
            </div>
        {/* </a> */}
          </div>
  
          <div className=' h-fit rounded-2xl flex flex-col p-2 space-y-6 border w-full
         border-gray-400'>

      

            <div className='flex  mt-3 ml-3'>

            <img src={team2} alt=""  className='h-16 w-16 rounded-full '/>
          
  
          <h2 className="mt-4 text-xl font-bold ml-3">Esther Howard</h2>
            </div>
            <div className='bg-[#E2F4FF] rounded-lg mx-auto p-3 mb-2  w-fit '>

          <p className="mt-1 text-sm text-[#003F62] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
            </div>
          </div>
  
          <div className=' h-fit rounded-2xl flex flex-col  p-2 space-y-6 border w-full
         border-gray-400'>

        


            <div className='flex  mt-3 ml-3'>

            <img src={team3} alt=""  className='h-16 w-16 rounded-full '/>
          
  
          <h2 className="mt-4 text-xl font-bold ml-3">Savannah Nguyen</h2>
            </div>
            <div className='bg-[#E2F4FF] rounded-lg mx-auto p-3 mb-2  w-fit '>

          <p className="mt-1 text-sm text-[#003F62] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
            </div>
          </div>
  
        
      </div>
  
      
    </div>
  </section>


  )
}

export default Team