import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
  <>
    <header id='contenedorHeader'>
      <div className='contenedor'>
      <NavBar/>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>
    </header>
    <FontAwesomeIcon icon={["fal", "coffee"]} />
    <ItemListContainer greeting={'Proyecto Tienda React'}/>   

  </>
  );
}

export default App;
