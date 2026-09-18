import { Link, useNavigate, useParams } from "react-router-dom";
import products from "../data/Product";
import { useState } from "react";

export default function ProductDetails() {
    const { slug } = useParams();
    const Thisproduct = products.find((item) => item.slug === slug);

    // Navigation for back
    const navigate = useNavigate();
    function navigation() {
        navigate(-1);
    }

    // Disable for cart
    const [disabled, setDisabled] = useState(false);
    // Disable for wish 
    const [disabledWish, setDisabledWish] = useState(false);

    return (
        <>
            <div className="container">
                <div>
                    <img src={Thisproduct.image} className="img-details" alt={Thisproduct.nameProduct} />
                </div>

                <div>
                    <p className="name-detail">{Thisproduct.nameProduct}</p>
                    <p className="discription-detail">{Thisproduct.discription} </p>
                    <p className="price-detail"> price : {Thisproduct.price} $ </p>
                </div>

                <div>
                    <button className="btn btn-wish" disabled={disabledWish} onClick={() => setDisabledWish(true)} > wish</button>
                    <button className="btn btn-cart" disabled={disabled} onClick={() => setDisabled(true)}> add to cart </button>
                    <button className="btn btn-back" onClick={navigation} > back </button>
                </div>
            </div>
        </>
    );
}

