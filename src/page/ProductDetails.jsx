import { Link, useNavigate, useParams } from "react-router-dom";
import products from "../data/Product";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
    const { slug } = useParams();
    const Thisproduct = products.find((item) => item.slug === slug);

    // Navigation for back
    const navigate = useNavigate();
    function navigation() {
        navigate(-1);
    }

    // use context
    const {addToCart} = useContext(CartContext);





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
                    <button className="btn btn-wish" > wish</button>
                    <button className="btn btn-cart" onClick={() =>addToCart(Thisproduct)}> add to cart </button>
                    <button className="btn btn-back" onClick={navigation} > back </button>
                </div>
            </div>
        </>
    );
}

