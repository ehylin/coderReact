import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Product from './Product'


const ItemListContainer = (props) => {

    const { products, addProductCart } = props;
    //console.log(products)


    return (
        <Container>
            <Row>
                {
                    products.length === 0 ? (
                        'No hay productos'
                    ) : (
                        products.map((product, index) => (
                            <Product key={index} product={product} addProductCart={addProductCart} />
                        ))
                    )
                }

            </Row>
        </Container>

    );
}

export default ItemListContainer;