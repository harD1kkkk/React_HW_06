import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './components/FavoritesContext';
import Header from './components/Header';
import HomePage from './components/HomePage';
import FavoritesPage from './components/FavoritesPage';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;