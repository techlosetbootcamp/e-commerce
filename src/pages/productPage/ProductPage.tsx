import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/productcard/ProductCard'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/hooks/Hooks';
import { RootState } from '../../redux/store/store';
import { fetchProducts } from '../../redux/Slice/productSlice';
import CategoryList from '../../components/categoryList/CategoryList';





const ProductPage = () => {

    const categories: string[] = ['all', 'electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'];

    const dispatch = useAppDispatch();
    const products = useSelector((state: RootState) => state.products.items);
    const status = useSelector((state: RootState) => state.products.status);
    
    useEffect(() => {
        if (status === 'IDLE') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(products.length / itemsPerPage);
    
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  return (
   <>

<div className=" text-[#1B5A7D] font-semibold flex flex-col items-center lg:flex-row lg:justify-between  w-full  mx-auto px-4">
  <h2 className="text-2xl lg:text-3xl pl-2">Popular Products</h2>
  <CategoryList categories={categories} /> 
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 w-full  mx-auto px-4">
  {currentProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>

<div className="flex justify-center mt-8 ">
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className="px-4 py-2 bg-blue-500 text-white rounded-l-lg disabled:opacity-50"
  >
    Previous
  </button>
  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index + 1}
      onClick={() => handlePageChange(index + 1)}
      className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-700' : 'bg-blue-500'} text-white`}
    >
      {index + 1}
    </button>
  ))}
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="px-4 py-2 bg-blue-500 text-white rounded-r-lg disabled:opacity-50"
  >
    Next
  </button>
</div>



        </>
              )}

              export default ProductPage