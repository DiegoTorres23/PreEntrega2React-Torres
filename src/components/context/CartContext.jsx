import { createContext, useState } from "react";


export const CartContext= createContext()

const CartContextProvider=({children}) => {
    const [cart,setCart]= useState([]);

    const addItem = (item,contador) => {
        if (isInCart(item.id)) {
            let product= cart.find(prod=> prod.id === item.id);
            product.contador += contador;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, contador:contador}]);
        }
    }

    const removeItem = (id) => {
        const items = cart.filter(item => item.id !== id)
        setCart([...items])
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart=(id)=>{
        return cart.some(item=>item.id===id);
    }

    const getCountProducts = () => {
        return cart.reduce((acum, item)=> acum += item.contador,0)
    }
    
    const getSumPriceProducts = () =>{
        return cart.reduce((acum, item) => acum += item.contador * item.price,0)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, getCountProducts, getSumPriceProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;