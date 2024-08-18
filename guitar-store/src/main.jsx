import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ProductPage from './pages/ProductPage';
import Confirmation from './pages/Confirmation';
import AdminAccount from './pages/AdminAccount';
import Navigation from './components/Navigation'; 

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Navigation /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/admin-account" element={<AdminAccount />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
