import React from 'react';
import CartWidget from "./CartWidget"
function NavBar(){
  return (
    <>
      <nav>
          <ul className='listaNav'>
            <li><a href='/#'>Home</a></li>
            <li><a href='/#'>Productos</a></li>
            <li><a href='/#'>Contactos</a></li>
            <li><button type='submit ' className='botonCarrito' href='/#'><CartWidget/></button></li>
          </ul>
      </nav>

    </>
  )
}
export default NavBar;