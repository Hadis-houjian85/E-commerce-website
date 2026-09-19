import { createContext, useEffect, useState } from "react";

export const WishContext = createContext()

export const  WishProvider  = ({ children }) => {

    const [wish, setWish] = useState(() => {
        const savewish = localStorage.getItem("wish")
        return savewish ? JSON.parse(savewish) : []
    }
    )


    const addToWish = (Thisproduct) => {
        const alredyInWish = wish.some(item => item.id === Thisproduct.id)

        if (alredyInWish) {
            return
        }

        setWish([...wish, Thisproduct]);
    }

    useEffect(() => {
        localStorage.setItem("wish", JSON.stringify(wish))
    }, [wish])


    // ------------------remove----------------

    const removeWish = (id) => {
        setWish(wish.filter(item => item.id !== id))
    }



    return (
        <WishContext.Provider value={{ wish, setWish, addToWish, removeWish }}>
            {children}
        </WishContext.Provider>
    )

}

