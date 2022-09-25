import React, { createContext, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [item, setItem] = useState([]);
    const addProduct = (product, quantity) => {
        // debugger;
        const actualProduct = { id: product.id, price: product.price, quantity: quantity, src: product.src, title: product.title, description: product.description }
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
    // const clearCart = ()  => {
    //     return clear(item);
    // }
    const totalCart = () => {
        let total = 0;
        item.forEach(actual => {
             actual.quantity >1 ? total += (actual.quantity*actual.price) : total += actual.price
        })
        return total;
    }
    const getProducts = () =>{
        return item;
    }
    return (<CartContext.Provider value={{ item, addProduct, isInCart, removeItem, getProducts, totalCart }}>
        {children}
    </CartContext.Provider>)
}