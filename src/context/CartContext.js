
import React from 'react';
import { useState } from 'react';
import { STORAGE_PRODUCTS_CART } from "../utils/constans";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {

    const [productsCart, setProductsCart] = useState([])

    const addProductCart = (id, name) => {
        const idsProducts = productsCart;
        idsProducts.push(id);
        setProductsCart(idsProducts);
        localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);

        console.log("producto anadido")
    };

    const removeArrayDuplicates = array => {
        return Array.from(new Set(array));
    };

    const removeItemArray = (array, item) => {
        const index = array.indexOf(item);

        if (index > -1) {
            array.splice(index, 1);
        }
        return array;
    };

    return (
        <CartContext.Provider value={{ addProductCart, removeArrayDuplicates, removeItemArray }}>
            {children}
        </CartContext.Provider>
    )

}