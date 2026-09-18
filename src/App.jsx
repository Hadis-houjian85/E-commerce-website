import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import ProductDetails from './page/ProductDetails';
import Producs from './page/Products';
import { CartProvider } from './context/CartContext';
import Cart from './page/Cart';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/producs' element={<Producs />} />
          <Route path='/producsDetails/:slug' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
