import React, { createContext, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [item, setItem] = useState([]);
    const addProduct = (product, quantity) => {
        // debugger;
        const actualProduct = { id: product.id, price: product.costo, quantity: quantity, src: product.imagen, title: product.nombre, description: product.descripcion }
        if (!isInCart(actualProduct.id)) {
            setItem(old => [...old, actualProduct])
        } else {
            let aux = item;
            aux[aux.findIndex(actual => actual.id === actualProduct.id)]["quantity"] = quantity
            setItem([...aux])
        }

    }
    const isInCart = (id) => {
        return item.some(x => x.id === id)
    }
    const removeItem = (itemID)  =>{
        setItem(item.filter(productoABorrar => productoABorrar.id !== itemID))
    } 
    const clearCart = ()  => {
        setItem([]);
    }
    const totalCart = () => {
        let total = 0;
        item.forEach(actual => {
             actual.quantity > 1 ? total += (actual.quantity*actual.price) : total += actual.price
        })
        return total;
    }
    const getProducts = () =>{
        return item;
    }
    const getQuantityCart = () => {
        let aux = 0;
        item.forEach(actual => {
            actual.quantity > 1 ? aux += (actual.quantity+actual.quantity) : console.log(aux)
       })
       return aux;
    }
    return (<CartContext.Provider value={{ item, addProduct, isInCart, removeItem, getProducts, clearCart, totalCart }}>
        {children}
    </CartContext.Provider>)
}