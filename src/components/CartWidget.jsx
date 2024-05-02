import cart from "../assets/images/cart.svg"

const CartWidget=()=>{
    return(
        <>
            <button type="button" className="btn position-relative cartStyle me-2">
                <img src={cart} alt="img-carrito" width={19} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </button>
        </>
    )
}

export default CartWidget;