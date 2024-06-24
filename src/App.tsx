import React, { Dispatch, SetStateAction, useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';

function App() {
// give type to below use state
interface ShowCartState {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}
type NavbarProps = ShowCartState;
// const [showCart, setShowCart]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
const [showCart, setShowCart]= useState<boolean>(false);

  return (
    <div >
    <Provider store={store}>
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
    // "test": "react-scripts test",

