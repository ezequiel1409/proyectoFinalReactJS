import React from 'react';
import './index.css';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
  <>
    <header id='contenedorHeader'>
          <NavBar/>
    </header>
      <BrowserRouter>
              <Routes>
                  <Route path='/' exact element={ <ItemListContainer />} />
                  <Route path={`/category/00`} exact element={ <ItemListContainer />} />
                  <Route path='/producto/item/:id' exact element={ <ItemDetailContainer/>} />
              </Routes>
      </BrowserRouter >
       
  </>
  );
}

export default App;
