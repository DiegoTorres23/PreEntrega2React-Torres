import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const ItemCount = ({stock,onAdd}) => {
    const[contador,setContador] = useState(1)
    const[itemStock,setItemStock] = useState(stock)
    const[visible,setVisible] = useState(true)

    const incrementar = ()=>{
        if (contador < itemStock ) {
            setContador(contador + 1);
        }
    }

    const decrementar =()=>{
        if (contador>1){
            setContador(contador-1);
        }
    }

    const addToCart=()=>{
        if(contador <= itemStock){
            setItemStock(itemStock-contador)
            onAdd(contador)
            setContador(1)
            setVisible(false)
        }
    }

    useEffect(()=>{
        setItemStock(stock);
    },[stock])

    return(
        <div className="container">
            <div className="row">
                <div className="btn-group col-md-3 ms-3 rounded-2" role="group">
                    <button type="button" className="btn bg-black text-white" onClick={decrementar}>-</button>
                    <button type="button" className="btn bg-black text-white ">{contador}</button>
                    <button type="button" className="btn bg-black text-white" onClick={incrementar}>+</button>
                </div>
            </div>
            <div className="row my-2">
                <div className="col">
                    {visible?<button type="button" className="btn bg-black text-white rounded-2" onClick={addToCart}>Agregar al Carrito</button>:<Link to={"/cart"} className="btn bg-black text-white rounded-2">Finalizar Compra!</Link>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;