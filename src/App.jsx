import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import Register from './pages/Register';

function App() {
  return (
   <BrowserRouter>
      <Header />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
             <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App
