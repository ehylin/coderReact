import React, {useEffect, useState} from "react";
import ItemListContainer from '../components/ItemListContainer'
import axios from 'axios';
const HomeStart = () => {
    const [products, setProducts] = useState([])
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
    return (
        <>
            <h1 className="text-center">Dashboard</h1>
            <ItemListContainer products={products} />
        </>
    );
}
export default HomeStart;