import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ItemDetallsContainer = () => {
    const {productId}= useParams();
   
    const [item, setItem] = useState({})
     console.log(useParams())
     
     console.log(productId)
     console.log(item)

     const getItem = (id) =>{
         return new Promise((resolve, reject) =>{
             const producto = item.find(item => item.id === parseInt(productId))
             resolve(producto)
         })
     }

     useEffect(() => {
        const getOrders = async (productId) => {
            try {
                const { data } = await axios.get("http://myjson.dit.upm.es/api/bins/5my6")
                console.log(data)
                 //const producto1 = data.find(item => item.id === parseInt(productId))
                 //console.log(producto1)
                const producto = await getItem();
                console.log(producto)
                setItem(producto)
            } catch (error) {
                console.log(error)
            }
        }
        getOrders()
    }, [productId]);


    return ( 
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"  />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>  
                 $ / Unidad
                </Card.Text>
              
            </Card.Body>
            <Card.Footer className="text-muted">Stock disponible:</Card.Footer>
            </Card>
        </>
     );
}
 
export default ItemDetallsContainer;