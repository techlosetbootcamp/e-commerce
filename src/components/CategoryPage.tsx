import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import  fetchProducts, { fetchProductsByCategory }  from '../redux/Slice/productSlice'; // Assuming a new action creator
import ProductCard from './ProductCard';
import { RootState } from '../redux/store';
import { useAppDispatch } from '../redux/Hooks';

const CategoryPage: React.FC = () => {
  const { category}  = useParams<{ category: string }>(); // Get category from route params
    const dispatch = useAppDispatch();
    const products = useSelector((state: RootState) => state.products.items.filter((product: { category: string | undefined; }) => product.category === category));
  const status = useSelector((state: RootState) => state.products.status);

     useEffect(() => {
        if (status === 'IDLE' && category) {
          dispatch(fetchProductsByCategory(category)); 
        }
      }, [status, dispatch, category]);
      console.log(products)

     

    return (
        <div className="grid grid-cols-1  w-full sm:w-[1300px] gap-4 mt-44 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default CategoryPage;
