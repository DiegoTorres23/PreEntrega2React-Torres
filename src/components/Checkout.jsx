import { useEffect, useState } from "react"
//import arrayProductos from "./json/productos.json"
import { getFirestore, addDoc, collection } from "firebase/firestore"
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


const Checkout = () =>{
    const {cart, getCountProducts, getSumPriceProducts, clear}= useContext(CartContext)
    const[nombre, setNombre]= useState("");
    const[apellido, setApellido]= useState("");
    const[email, setEmail]= useState("");
    const[telefono, setTelefono ]= useState("");
    const[orderId, setOrderId]= useState("");
    
    //Renderizar los productos via json
    //useEffect(()=>{
        //const promise = new Promise(resolve=>{
            //setTimeout(()=>{
                //resolve(productos.filter(item=>item.price<200000));
            //},2000)
        //})

        //promise.then(respuesta=>{
            //setCart(respuesta);
        //})
    //},[])


    const generarOrden= () => {
        if(nombre==""){
            return false;
        } else if (apellido==""){
            return false;
        } else if (email==""){
            return false;
        } else if (telefono==""){
            return false;
        }

        const buyer = { nombre:nombre, apellido:apellido, email:email, telefono:telefono};
        const items = cart.map(item=>({id:item.id, title:item.title, price:item.price}))
        const date= new Date();
        const fecha=`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} a las ${date.getHours()} Hrs`;
        const order = { Comprador:buyer, Productos:items, fechaCompra:fecha,  TotalPagar:getSumPriceProducts()}
        console.log(order)
        const db = getFirestore()
        const ordersCollection = collection(db,"orders");
        addDoc(ordersCollection, order).then(data=>{
            setOrderId(data.id)
        })


        //Codigo para cargar Productos a la db
        //const db = getFirestore()
        //const productosCollection = collection(db, "productos");
        //arrayProductos.forEach(item=>{
        //    addDoc(productosCollection ,item)
        //})
        //console.log("Productos Cargados correctamente")
    }

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
                    <form className="m-5">
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" placeholder="Ingresa tu Nombre" className="form-control" onInput={(e)=>{setNombre(e.target.value)}} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Apellido</label>
                            <input type="text" placeholder="Ingresa tu Apellido" className="form-control" onInput={(e)=>{setApellido(e.target.value)}} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" >Email</label>
                            <input type="email" placeholder="ejemplo@.com.ar" className="form-control" onInput={(e)=>{setEmail(e.target.value)}} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono</label>
                            <input type="number" placeholder="Numero de Telefono" className="form-control" onInput={(e)=>{setTelefono(e.target.value)}} required/>
                        </div>
                        <button type="button" className="btn text-white bg-black rounded-2" onClick={generarOrden}>Generar Orden</button>
                        </form>
                </div>
                <div className="col">
                <table className="table mt-5">
                    <tbody>
                        {cart.map(item =>(
                            <tr key={item.id}>
                                <td><img src={item.image} alt={item.title} width={80} /> </td>
                                <td className="align-middle text-center">{item.title}</td>
                                <td className="align-middle text-center">x{item.contador}</td>
                                <td className="align-middle text-end"><b>${item.price}</b></td>
                            </tr>
                        ))}
                         <tr>
                            <td colSpan={3} className="align-middle text-center" ><b>Total a Pagar:</b></td>
                            <td className="align-middle text-end"><b>${getSumPriceProducts()}</b></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {orderId?<div className="alert alert-secondary m-5 text-center" role="alert">Felicidades por la Compra, tu identificacion de orden es:<b> {orderId}</b><Link to={"/"} onClick={clear} className="btn bg-black text-white rounded-2 text-center ms-5">Ir al Inicio</Link></div>:""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;