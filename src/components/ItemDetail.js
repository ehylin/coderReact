import { useState, useContext } from 'react';
import { ItemCount } from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

export const ItemDetail = ({ item }) => {
    console.log(item)
    const { addItem } = useContext(CartContext);
    const [contador, setContador] = useState(0);

    const onAdd = (dato) => {
        console.log("hizo click", dato);
        setContador(dato)
        addItem(item, dato)
    }

    return (
        <Container>
            <Card className='text-center'>
                <p>Detalle del producto</p>
                <div className=''>
                    <img src={item.pictureUrl} alt={item.title} />
                </div>
                <div className='img-container'>
                    <h4>{item.title}</h4>
                    <h5>$ {item.price}</h5>
                    <h6>{contador}</h6>
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
                </div>
                {
                    contador > 0 &&
                    <Link to="/cart">
                        <Button>Ir al carrito</Button>
                    </Link>
                }
            </Card>
        </Container>
    )
}