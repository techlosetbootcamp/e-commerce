import React from 'react'





const SideNav: React.FC<CategoryListProps> = ({ categories, onCategoryChange, selectedCategory }) => {
  return (
    <div className='sm:px-4 lg:px-5'>

    <div className=' md:w-[330px]  '>
        <div className='flex justify-between md:mx-4 space-y-2'>

      <h1 className='text-[#003F62] text-xl font-semibold'>Categories</h1>
      <p>Reset</p>
        </div>
        <div className='flex flex-col space-y-3 px-5 mt-3'>

        {categories.map((category) => (
          <div
            key={category.name} 
            className='flex justify-between md:mx-4'
          >
            <div className='flex gap-2 justify-between'>
              <input
                type="checkbox"
                name={category.name} 
                id={category.name} 
                className='w-[30px] h-[30px]'
                checked={category.name === selectedCategory} 
                onChange={() => onCategoryChange(category.name)} 
              />
              <label htmlFor={category.name}>
                {category.name}  
              </label>
            </div>
              <p>({category.count})</p>
          </div>
        ))}
        </div>
        </div>
        <hr  className='mt-5 mx-4'/>
        <div className='flex flex-col space-y-3 mt-3 px-5 text-[#003F62]'>
          <h2 className=' font-semibold text-xl pl-3'>Availabilty</h2>
          <div className='flex justify-between mx-4 font-medium'>
            <p>0 Selected</p>
            <p>Reset</p>
          </div>
          <div className='flex justify-between mx-4'>
            <div className='flex gap-2'>
          

            <input type="checkbox" className='w-7 h-7 ' />
            <p className='font-medium'>In Stock</p>
            </div>
            <p>5</p>
          </div>
          <div className='flex justify-between mx-4 '>
            <div className='flex gap-2'>
          

            <input type="checkbox" className='w-7 h-7 ' />
            <p className='font-medium'>Out of stock</p>
            </div>
            <p>0</p>
          </div>
        </div>
        <hr  className='mt-5 mx-5'/>
        <div className='flex flex-col space-y-3 mt-3 pt-4 px-5 text-[#003F62]'>
          <h2 className=' font-semibold text-xl pl-3'>Product type</h2>
          <div className='flex justify-between mx-4 font-medium'>
            <p>0 Selected</p>
            <p>Reset</p>
          </div>
          <div className='flex justify-between mx-4'>
            <div className='flex gap-2'>
          

            <input type="checkbox" className='w-7 h-7 ' />
            <p className='font-medium'>Smart Watch</p>
            </div>
            <p>5</p>
          </div>
          
        </div>
        <hr  className='mt-7 mx-4'/>
        <div className='flex flex-col space-y-3 mt-3 px-5 pt-4 text-[#003F62]'>
          <h2 className=' font-semibold text-xl pl-3'>Brand</h2>
          <div className='flex justify-between mx-4 font-medium'>
            <p>0 Selected</p>
            <p>Reset</p>
          </div>
          <div className='flex justify-between mx-4'>
            <div className='flex gap-2'>
          

            <input type="checkbox" className='w-7 h-7 ' />
            <p className='font-medium'>Smart Watch</p>
            </div>
            <p>5</p>
          </div>
          
        </div>
        <hr  className='mt-7 mx-4'/>
        <div className='flex flex-col space-y-3 mt-3 px-5 pt-4 text-[#003F62]'>
          <h2 className=' font-semibold text-xl pl-3'>Colors</h2>
          <div className='flex justify-between  mx-4 font-medium'>
            <p>0 Selected</p>
            <p>Reset</p>
          </div>
        <div className='flex  items-center justify-between px-3 mt-2'>
          <div className='w-[15px] h-[15px] rounded-full bg-[#EDA415]'>

          </div>
          <div className='w-[15px] h-[15px] rounded-full bg-[#E42424]'>

          </div>
          <div className='w-[15px] h-[15px] rounded-full bg-[#ACACAC]'>

          </div>
          <div className='w-[15px] h-[15px] rounded-full bg-[#1D5F23]'>

          </div>
          <div className='w-[15px] h-[15px] rounded-full bg-[#2E56A3]'>

          </div>
          <div className='w-[15px] h-[15px] rounded-full bg-[#8131A7]'>

          </div>
          <div className='w-[15px] h-[15px] rounded-full bg-[#BC2944]'>

          </div>
          <div className='w-[15px] h-[15px] rounded-full bg-[#9BC14C]'>

</div>

          
        </div>
          
        </div>
        <hr  className='mt-7 mx-4'/>

        <div className='flex flex-col space-y-3 mt-3 px-5 text-[#003F62]'>
          <h2 className=' font-semibold text-xl pl-3'>Size</h2>
          <div className='flex justify-between mx-4 font-medium'>
            <p>0 Selected</p>
            <p>Reset</p>
          </div>
          <div className='flex justify-between mx-4'>
            <div className='flex gap-2'>
          

            <input type="checkbox" className='w-7 h-7 ' />
            <p className='font-medium'>M</p>
            </div>
            <p>5</p>
          </div>
          <div className='flex justify-between mx-4 '>
            <div className='flex gap-2'>
          

            <input type="checkbox" className='w-7 h-7 ' />
            <p className='font-medium'>S</p>
            </div>
            <p>5</p>
          </div>
          <div className='flex justify-between mx-4'>
            <div className='flex gap-2'>
          

            <input type="checkbox" className='w-7 h-7 ' />
            <p className='font-medium'>X</p>
            </div>
            <p>5</p>
          </div>
          <div className='flex justify-between mx-4'>
            <div className='flex gap-2'>
          

            <input type="checkbox" className='w-7 h-7 ' />
            <p className='font-medium'>XX</p>
            </div>
            <p>5</p>
          </div>
        </div>
    </div>
  )
}

export default SideNav
