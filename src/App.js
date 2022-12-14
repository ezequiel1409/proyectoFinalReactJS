import React from 'react';
import './index.css';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { CartProvider } from './context/CartContext';
function App() {
  return (
  <>
    <header id='contenedorHeader'>
          <NavBar/>
    </header>
    <CartProvider>
        <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={ <ItemListContainer /> } />
                    <Route path="/allProducts'" exact element={ <ItemListContainer />} />
                    <Route path="/producto/item/:id" exact element={ <ItemDetailContainer/>} />
                    <Route path="/cart"exact element={ <Cart />} />
                </Routes>
        </BrowserRouter >
    </CartProvider>
  </>
  );
}

export default App;
