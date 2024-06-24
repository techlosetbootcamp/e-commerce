import React from 'react';
import Category from './Category';

interface CategoryListProps {
  categories: string[];
}


const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className='flex justify-center flex-wrap mt-4  gap-4'>
      {categories.map((category) => (
        <Category key={category} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
