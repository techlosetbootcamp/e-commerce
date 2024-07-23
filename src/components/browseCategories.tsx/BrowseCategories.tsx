import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import ProductCard from '../productcard/ProductCard';
import SideNav from '../sideNav/SideNav';
import { useAppDispatch } from '../../redux/hooks/Hooks';
import { fetchProducts } from '../../redux/Slice/productSlice';
import Banner from '../banner/Banner';




const BrowseCategories = () => {

  const categoriesList: Category[] = [{name:'all',count:0},
    {name: 'electronics',count:0},{name: 'jewelery',count:0},
    {name: 'men\'s clothing',count:0},{name: 'women\'s clothing',count:0}];

const products = useSelector((state: RootState) => state.products.items);
const [selectedCategory, setSelectedCategory] = useState('all')
const [categories, setCategories] = useState<Category[]>(categoriesList);
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 8;

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;

const filteredProducts = selectedCategory === 'all' ? products : products.filter((product) => product.category === selectedCategory);

const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

const handlePageChange = (pageNumber: number) => {
setCurrentPage(pageNumber);
};

const handleCategoryChange = (category: string) => {
setSelectedCategory(category);
};

const dispatch = useAppDispatch();



useEffect(() => {
  dispatch(fetchProducts());

  const updatedCategories = categories.map(category => {
    const categoryCount = products.filter(product => product.category === category.name).length;
    return { ...category, count: categoryCount };
  });

  const totalProducts = products.length;

  const updatedAllCategory = updatedCategories.find(category => category.name === 'all');
  if (updatedAllCategory) {
    updatedAllCategory.count = totalProducts;
  }

  setCategories(updatedCategories);
}, [dispatch, products]);

  

  



  return (
    <>
    <div className='flex flex-col  items-between sm:flex-row mt-24 '>
        <div className='mt-12 w-screen px-2 md:px-0 lg:w-fit'>

 <SideNav categories={categories} onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} /> 
        </div>
        
<div>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 w-full   ">
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
</div>
<div>
</div>
      </div>
      <hr className=' mt-12' />
      <Banner/>
    </>

  )
}

export default BrowseCategories
