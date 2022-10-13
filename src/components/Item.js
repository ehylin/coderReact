import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
    return (
        <Card>
            <img src={item.pictureUrl} alt={item.title} />
            <h4>{item.title}</h4>
            <p>$ {item.price}</p>
            <div className='text-center'>
                <Link to={`/item/${item.id}`}>
                    <Button>Ver detalle</Button>
                </Link>
            </div>
        </Card>
    )
}