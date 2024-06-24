import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryProps {
    category: string;
}







const Category: React.FC<CategoryProps> = ({ category }) => {
    return (
        <button
            key={category}
            className='border transition-all ease-in duration-200 hover:bg-[#dddbf0] border-[#003F62] rounded-2xl h-12 w-36 px-4'
            
        >
            <Link to={`/category/${category}`}>{category}</Link>
        </button>
    );
};

export default Category;
