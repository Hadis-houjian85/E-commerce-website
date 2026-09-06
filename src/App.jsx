import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';

function App() {

  return (
    <BrowserRouter>
    <TopBar />
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
