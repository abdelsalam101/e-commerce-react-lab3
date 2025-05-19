import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import ProductList from './pages/ProductList';
// import Cart from './pages/Cart';
// import NotFound from './pages/NotFound';
// import ProductDetail from './pages/ProductDetail';
// import Register from './pages/Register';
import { useState, useEffect, lazy, Suspense } from 'react';
import LanguageContext from './context/language';

const Cart=lazy(() => (import('./pages/Cart')) )
const NotFound=lazy(() => (import('./pages/NotFound')) )
const ProductDetail=lazy(() => (import('./pages/ProductDetail')) )
const Register=lazy(() => (import('./pages/Register')) )
function App() {
  const [language, setLanguage] = useState("en");
    useEffect(() => {
    document.body.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);
  return (
    <BrowserRouter>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Header />
        <div className="container my-5">
          <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/productDetail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
           </Suspense>
        </div>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App
