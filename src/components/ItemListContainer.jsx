import { useState, useEffect } from "react";
import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList";
import Banner from "./Banner";
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{
    const[items,setItems]= useState([])
    const {id} =useParams()

    useEffect(()=>{
        const promise = new Promise(resolve=>{
            setTimeout(()=>{
                resolve(id ? arrayProductos.filter(item=>item.category==id): arrayProductos)
            },2000)
        })

        promise.then(respuesta=>{
            setItems(respuesta);
        })
    },[id])


    return(
        <div className="container">
            <div className="row">
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;