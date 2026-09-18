import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const save = localStorage.getItem("cart")
        return save ? JSON.parse(save) : []
    })

    const addToCart = (Thisproduct) => {
        const alreadyInCart = cart.some(item => item.id === Thisproduct.id)

        if (alreadyInCart) { return }

        setCart([...cart, { ...Thisproduct, quantity: 1 }])
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    // ----------------------quantity-------------------

    const piusQuantity = (id) => {
        setCart(cart.map(item => item.id === id ? { ...item , quantity: item.quantity + 1 } : item)
        )
    }

    const manfiQuantity = (id) => {
        setCart(cart.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item))
    }


    // ----------------------DELET-------------------

    const remove = (id)=>{
        setCart(cart.filter(item => item.id !== id))
    }



    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, manfiQuantity, piusQuantity, remove }}>
            {children}
        </CartContext.Provider>
    )

}