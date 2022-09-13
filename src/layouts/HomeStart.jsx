import React, { useEffect, useState } from "react";
import ItemListContainer from '../components/ItemListContainer'
import axios from 'axios';
import { STORAGE_PRODUCTS_CART } from "../utils/constans";
const HomeStart = () => {
    const [products, setProducts] = useState([])
    const [productsCart, setProductsCart] = useState([])
    useEffect(() => {
        const getOrders = async () => {
            try {
                const { data } = await axios.get("http://myjson.dit.upm.es/api/bins/5my6")
                console.log(data)
                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        }
        getOrders();
    }, []);

    useEffect(() => {
        getProductsCart();
    }, []);

    const getProductsCart = () => {
        const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);

        if (idsProducts) {
            const idsProductsSplit = idsProducts.split(",");
            setProductsCart(idsProductsSplit);
        } else {
            setProductsCart([]);
        }
    };

    const addProductCart = (id, name) => {
        const idsProducts = productsCart;
        idsProducts.push(id);
        setProductsCart(idsProducts);
        localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);

        console.log("producto anadido")
    };



    return (
        <>
            <h1 className="text-center">Dashboard</h1>
            <ItemListContainer products={products} addProductCart={addProductCart} />
        </>
    );
}
export default HomeStart;