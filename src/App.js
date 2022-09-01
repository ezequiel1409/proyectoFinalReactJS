import React from 'react';
import './index.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
  <>
    <header id='contenedorHeader'>
        <nav>
          <NavBar/>
            
        </nav>
    </header>
    <section>
    <ItemListContainer title={'Proyecto Tienda React'}/>   
    </section>

  </>
  );
}

export default App;
