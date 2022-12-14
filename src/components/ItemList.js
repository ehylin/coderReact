import { Item } from "./Item"


export const ItemList = ({ items }) => {

    return (

        <div className="estilos-listado">
            <div style={{ width: "100%" }}>item list</div>
            {
                items.map(producto => (
                    <Item key={producto.id} item={producto} />
                ))
            }
        </div>

    )
}