import { useEffect, useState } from "react"


const ItemCount = ({stock}) => {
    const[contador,setContador] = useState(1)
    const[itemStock,setItemStock] = useState(stock)

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

    const onAdd=()=>{
        if(contador <= itemStock){
            setItemStock(itemStock-contador)
            setContador(1)
            console.log(`Se Agrego ${contador} Articulo/s al Carrito correctamente`)
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
                    <button type="button" className="btn bg-black text-white rounded-2" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;