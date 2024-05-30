import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";


const ItemDetail= ({item})=>{
    const {addItem} = useContext(CartContext)

    const onAdd=(contador)=>{
        addItem(item, contador)
        console.log(`Se Agrego ${contador} Articulo/s al Carrito correctamente`)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.image} className="img-fluid" alt={item.title} />
                </div>
                <div className="col-md-5">
                    <h1 className="display-5 text-uppercase">{item.title}</h1>
                    <br />
                    <p>{item.description}</p>
                    <p className="detailPrice"><b>Precio: ${item.price}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;