import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Categories from './Components/Categories/index'; // Correct casing
import Products from './Components/Products';
import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <main>
          <Categories />
          <Products />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
