import React, { useContext, useEffect } from 'react';
import { db } from "../../../utils/firebase";
import { doc, getDoc, collection, getDocs, query, where, limit } from "firebase/firestore";

export const ContactoPage = () => {

    useEffect(() => {
        const getData = async () => {
            //creamos la referencia
            const queryRef = query(collection(db, "items"), where("categoria", "==", "camisas"), limit(1))
            //solicitud
            const response = await getDocs(queryRef);
            console.log(response)
            const productos = response.docs.map(doc => {
                const newProduct = {
                    ...doc.data(),
                    id: doc.id
                }
                return newProduct
            })
            console.log(productos);
        }
        getData();
    }, [])

    return (
        <div>
            ContactoPage
        </div>
    )
}
