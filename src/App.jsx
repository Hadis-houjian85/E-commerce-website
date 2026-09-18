import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import ProductCart from './components/product/ProductCart';
import ProductDetails from './page/ProductDetails';

function App() {

  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/producs' element={<ProductCart />} />
        <Route path='/producsDetails/:slug' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
