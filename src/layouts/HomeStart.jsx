import { useEffect, useState } from "react";
import { productosDB } from "../baseDeDatos";
import { ItemList } from "../components/ItemList";
import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {
    const { categoryId } = useParams();
    console.log('categoryId', categoryId)
    const [productos, setProductos] = useState([]);

    console.log(productos)

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productosDB);
        }, 1000);
    })

    useEffect(() => {
        promesa.then(resultado => {
            console.log(resultado)
            if (categoryId) {
                const newProducts = resultado.filter(item => item.categoria === categoryId);
                setProductos(newProducts)
            } else {
                setProductos(resultado)
            }
        })
    }, [categoryId])

    return (
        <div className="item-list-container">
            <p>Productos</p>
            <ItemList items={productos} />
        </div>
    )
}