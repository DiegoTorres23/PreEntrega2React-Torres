import { useState, useEffect } from "react";
//import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, getFirestore, collection, query, where } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () =>{
    const[items,setItems]= useState([]);
    const [visible, setVisible]= useState(true)
    const {id} =useParams()

    useEffect(()=>{
        const db= getFirestore()
        const productosCollection= collection(db, "productos");
        const queryCollection = id? query(productosCollection,(where("category","==",id))):productosCollection;
        getDocs(queryCollection).then(products=>{
            if(products.size>0) {
                setItems(products.docs.map(item=>({id:item.id, ...item.data()})));
                setVisible(false)
            }
        })
    },[id])
    //Productos via json
    //useEffect(()=>{
        //const promise = new Promise(resolve=>{
            //setTimeout(()=>{
                //resolve(id ? arrayProductos.filter(item=>item.category==id): arrayProductos)
            //},2000)
        //})

        //promise.then(respuesta=>{
            //setItems(respuesta);
        //})
    //},[id])


    return(
        <div className="container">
            <div className="row">
                {visible? <Loading />: <ItemList items={items} />}
            </div>
        </div>
    )
}

export default ItemListContainer;