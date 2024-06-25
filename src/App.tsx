import  {  useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import CategoryPage from './pages/categoryPage/CategoryPage';
import ProductDetail from './pages/productDetail/ProductDetail';
import Footer from './components/footer/Footer';
import ProductPage from './pages/productPage/ProductPage';
import { Toaster } from 'react-hot-toast';

function App() {

const [showCart, setShowCart]= useState<boolean>(false);

  return (
    <div >
    <Provider store={store}>
    <Toaster toastOptions={{
      style: {
        backgroundColor: '#EDA415',
        color: 'white',
      },
    }} />
      <Router>
        <Navbar setShowCart={setShowCart} />
        <Routes>

        <Route>
  {showCart && <Route path="/Cart" element={<Cart setShowCart={setShowCart} />} />}
</Route>
          <Route path="/" element={<Home />} />
          <Route path='/productsCategory' element={<ProductPage/>}/>

          <Route path="/category/:category" element={<CategoryPage />} />

          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
        
      <Footer/>
      </Router>
    </Provider>
  </div>
  );
}

export default App;

