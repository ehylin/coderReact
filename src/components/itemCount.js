import React, {useState} from 'react'

const ItemCount = () => {

    const [stock, setStock] = useState(5)
    const [initial, setInitial]= useState(1)


    const aunCont = () =>{
        if(initial < stock)  {
            setInitial(initial + 1)
        }    
    }
    const disCount = () =>{
        if(initial > 1){
            setInitial(initial - 1)
        }  
    }

    return ( 
        <>
         <button type='button' onClick={aunCont} > +</button>
         <button type='button' onClick={disCount} > -</button>
            <span>{initial}</span>
 
        </>
     );
}
 
export default ItemCount;