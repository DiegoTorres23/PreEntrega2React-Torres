import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash3 from "../assets/images/trash3.svg"


const Cart =()=>{
    const {cart, removeItem, clear, getCountProducts, getSumPriceProducts} = useContext(CartContext);

    if(getCountProducts()==0){

        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="alert alert-secondary m-5 text-center" role="alert">
                            <h3>No tienes Productos en el Carrito!</h3>
                            <Link to={"/"} className="btn bg-black text-white rounded-2 m-2"> Volver a la Tienda</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                <table className="table mt-5">
                    <tbody>
                        <tr>
                            <td colSpan={6} className="align-middle text-end"><button className="btn bg-black text-white rounded-2" onClick={clear} >Vaciar Carrito</button></td>
                        </tr>
                        {cart.map(item =>(
                            <tr key={item.id}>
                                <td><img src={item.image} alt={item.title} width={125} /> </td>
                                <td className="align-middle text-center">{item.title}</td>
                                <td className="align-middle text-center">{item.price} </td>
                                <td className="align-middle text-center">x{item.contador} </td>
                                <td className="align-middle text-end" ><a href="#"> <img src={trash3} width={25} title="Eliminar Producto" onClick={()=>{removeItem(item.id)}} /></a></td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={2} className="text-center" ><b>Total a Pagar:</b></td>
                            <td className="align-middle text-center"><b>${getSumPriceProducts()}</b></td>
                            <td>&nbsp;</td>
                            <td className="text-end"><Link to={"/checkout"} className="btn text-white bg-black rounded-2">Ir a Pagar</Link></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;