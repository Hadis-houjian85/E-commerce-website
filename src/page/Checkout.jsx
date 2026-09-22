import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function Checkout() {

    const { cart } = useContext(CartContext);
    const pricesss = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
    return (

        <>
            <div className="container div-checkout">
                <div className="chechout">

                    <label for="inputName">FullName : </label>
                    <br></br>
                    <input id="inputName" placeholder="enter your full name" className="inputChechout" />
                    <br></br>
                    <br></br>
                    <label for="inputAddress" >Address : </label>
                    <br></br>
                    <input id="inputAddress" placeholder="enter your address" className="inputChechout" />
                    <br></br>
                    <br></br>
                    <label for="inputTell">tellnumber : </label>
                    <br></br>
                    <input id="inputTell" placeholder="09*********" className="inputChechout" />
                    <br></br>
                    <br></br>
                    <div className="row">
    
                        {cart.map((item) => {
                            return (
                                <>
                                    <div className="product-checkout">
                                        <p>{item.nameProduct} :</p>
                                        <p>{item.quantity}</p>
                                    </div>                                
                                    <p>price :{pricesss}$</p>
                                    <button className="btn payEnd btn-light">pay</button>
                                </>
                            )
                        })}

                    </div>

                </div>
            </div>
        </>
    )
}