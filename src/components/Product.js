import {Button, Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Product = (props) => {
    const { product} = props

   

    return ( 
        <>
        <Col className='product'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>  
                {product.price} $ / Unidad
                </Card.Text>
                <Link to={`/item/${product.id}`}>
                    <Button variant="primary" >Ver producto</Button>
                </Link>
            </Card.Body>
            <Card.Footer className="text-muted">Stock disponible: {product.stock}</Card.Footer>
            </Card>
        </Col>
        </>
     );
}
 
export default Product;