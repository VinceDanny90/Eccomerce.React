import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import SearchPage from './pages/SearchPage';
import Footer from './components/Footer';
import { loadCartHandler } from './features/cart/cartSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartHandler());
  }, [dispatch]);

  return (
    <div className="bg-slate-600 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap overflow-x-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search/:key" element={<SearchPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

