import { useState, useEffect } from "react";
import arrayProductos from "./json/productos.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "./Loading";


const ItemDetailContainer = () =>{
    const[item,setItem]= useState([])
    const [visible, setVisible]= useState(true)
    const {id} =useParams()

    useEffect(()=>{
        const db= getFirestore()
        const docRef= doc(db, "productos", id);
        getDoc(docRef).then(product=>{
            if(product.exists()) {
                setItem({id:product.id, ...product.data()});
                setVisible(false)
            }
        })
    },[id])

    //Acceso a un producto por id con json como proveedor.
    //useEffect(()=>{
        //const promise = new Promise(resolve=>{
            //setTimeout(()=>{
                //const producto = arrayProductos.find(item=>item.id === parseInt(id))
                //resolve(producto);
            //},2000)
        //})

        //promise.then(respuesta=>{
            //setItem(respuesta);
        //})
    //},[id])


    return(
        <div className="container">
            <div className="row my-5">
                {visible?<Loading/>:<ItemDetail item={item} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer;