import React from 'react';
import CartWidget from "./CartWidget"
function NavBar(){
  return (
    <>
        <nav>
            <ul className='listaNav'>
            <li><a href='/'>Home</a></li>
            <li><a href='/allProducts'>Productos</a></li>
            <li><a className='botonCarrito' href='/Cart'><CartWidget/></a></li>
            </ul>
        </nav>
      

    </>
  )
}
export default NavBar;