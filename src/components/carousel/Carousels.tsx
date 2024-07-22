import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks/Hooks';
import { fetchProducts } from '../../redux/Slice/productSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

const Carousels = () => {

    const dispatch = useAppDispatch()
    // fetch products from fetchproducts slice and pass it to carousel
//    const sliderproduct =dispatch(fetchProducts())
//    const [products, setProducts] = useState([]); // State to store fetched products
  //  const [products, setProducts] = useState<Product[]>([]);
   const products = useSelector((state: RootState) => state.products.items);


  // Fetch products on component mount (or when needed)
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProductsData =  async() => {
    //   const fetchedProductsAction:any =   dispatch(fetchProducts()); // Dispatch the action
    //   const fetchedProducts: Product[] =await fetchedProductsAction.payload; // Access the data
  
    //   setProducts(fetchedProducts);
    // };
    // fetchProductsData();
  }, [dispatch]);
  
   
   
   
  

    
  return (
    <div className='flex justify-center mb-14'>

    <div className='w-full lg:w-[1222px] h-36'>

    <Carousel
    
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  // infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}

  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>

  
{products.map((product) => (
    <div className='w-full lg:w-[350px] h-36 rounded-lg border flex gap-3 items-center '>

    
   <div className=''>

    <img src={product.image} alt="" className='w-[154px] h-[94px] object-contain' />
   </div>
   <div className=' text-[#1B5A7D] '>
    <p className='font-bold'>{product.title.slice(0,25)}</p>
    <p className='font-semibold '>(6 items)</p>
   </div>
    </div>
))}
   
</Carousel>
    </div>
    </div>
  )
}

export default Carousels
