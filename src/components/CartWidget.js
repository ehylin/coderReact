import  icoCart  from "../assets/img/cart.svg";

const CartWidget = () => {
    return ( 
        <>
        <div className="icoCart">
        <img className="imgIco" src={icoCart} alt="icono cart"></img>
        <span className="icoSpan">4</span>
        </div>
        </>
     );
}
 
export default CartWidget;