import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import   { fetchProductsByCategory }  from '../../redux/Slice/fetchprodslice'; 
import ProductCard from '../../components/productcard/ProductCard';
import { RootState } from '../../redux/store/store';
import { useAppDispatch } from '../../redux/hooks/Hooks';

const CategoryPage: React.FC = () => {
  const { category}  = useParams<{ category: string }>(); 
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
