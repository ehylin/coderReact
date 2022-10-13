import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";
import { Container, Card, Button, Row, Col } from 'react-bootstrap'

export const CartContainer = () => {
    const { productCartList, removeItem, clear, getTotalPrice } = useContext(CartContext);
    console.log(productCartList)
    return (
        <Container className='mt-4'>
            <Row>
                {
                    productCartList.length > 0 ?
                        <>
                            {productCartList.map(item => (
                                <Col md={4}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <p>Cantidad: {item.quantity}</p>
                                            <p>Precio unitario: {item.price}usd</p>
                                            <p>Precio productos: {item.quantityPrice}</p>
                                            <Button variant="primary" onClick={() => removeItem(item.id)}>Eliminar producto</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                            <div className='mt-3 text-center'>
                                <Button onClick={clear}>Vaciar el carrito</Button>
                                <p>Precio total: {getTotalPrice()}</p>
                            </div>

                        </>
                        :
                        <>
                            <p>El carrito esta vacio, Agrega algun producto</p>
                            <Link to="/">
                                Ir al listado de productos
                            </Link>
                        </>
                }
            </Row>
        </Container>
    )
}
