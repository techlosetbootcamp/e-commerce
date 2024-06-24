import camera from "../assets/images/camera.png"
const Hero = () => {
  return (



    <section>
  <div className="mx-auto max-w-screen-xl mt-14 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-64">
      <div className="relative ml-4 h-64 overflow-hidden  sm:h-80 lg:order-last lg:h-full ">
        <img
          alt=""
          src={camera}
          className="absolute -top-[13px] inset-0 h-80 w-full object-contain"
        />
      </div>

      <div className="text-center lg:py-24 overflow-y-hidden">
        <h2 className="text-3xl font-bold sm:text-4xl">Cnanon Camera</h2>

        

        <a
          href="#"
          className="mt-8 inline-block  rounded-2xl bg-[#EDA415] px-10 py-3 text-sm font-medium text-white transition-all  hover:bg-yellow-500  ease-in 0.5s focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Shop Now
        </a>
      </div>
    </div>
  </div>
</section>
  
  )
}

export default Hero


