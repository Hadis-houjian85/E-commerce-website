import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export default function Cart() {

    const { cart, piusQuantity, manfiQuantity , remove} = useContext(CartContext)




    return (
        <>
            <div className="container">
                <div className="row">
                    {cart.map((item) => {
                        return (
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="div-cart text-center">
                                    <img src={item.image} className="img-cart" />
                                    <p className="nameproducts-cart">{item.nameProduct}</p>

                                    {/* ----------------------- quantity ---------------------*/}

                                    <div className="quantity-cart">
                                        <button className="btn-decreases" onClick={() => manfiQuantity(item.id)}>-</button>
                                        <pre className="quantity-number">{item.quantity}</pre>
                                        <button className="btn-increases" onClick={() => piusQuantity(item.id)}>+</button>
                                    </div>
                                        <button className="btn-remove" onClick={()=>remove(item.id)}>remove</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}