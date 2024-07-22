type ShowCartProps = {
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  };



  type  Product= {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    quantity: number;
    category: string;
    
}  

interface ProductsState {
    items: Product[];
    status: 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'FAILED';
    error: string | null;
  }

  interface CategoryProps {
    category: string;
}

 interface CartProductProps {
  id: number;
  img: string;
  title: string;
  
  price: number;
  quantity: any;
}

interface CategoryListProps {
  categories: { name: string; count: number }[]
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}
interface Category {
  name: string;
  count: number;
}


