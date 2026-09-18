import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import ProductDetails from './page/ProductDetails';
import Producs from './page/Products';

function App() {

  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/producs' element={<Producs/>} />
        <Route path='/producsDetails/:slug' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
