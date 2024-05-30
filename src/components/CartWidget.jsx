import { Link } from "react-router-dom";
import cart from "../assets/images/cart.svg"
import ItemListContainer from "./ItemListContainer";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const CartWidget=()=>{
    const {getCountProducts} = useContext(CartContext)

    if(getCountProducts()>0){
    return(
            <Link to={"/cart"} className="btn position-relative cartStyle me-2">
                <img src={cart} alt="img-carrito" width={19} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{getCountProducts()}</span>
            </Link>
    
    )
    }
}

export default CartWidget;