import { useContext } from "react"
import { WishContext } from "../context/WishlistContext"
import { Link } from "react-router-dom"

export default function Wishlist() {

    const { wish, removeWish } = useContext(WishContext)

    return (
        <div className="container">
            <br></br>
            <div className=" div-title-wish">
                <p className=" title-wish">your wish</p>
            </div>
            <div className="row g-3">
                {wish.map((item) => (
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={item.id}>
                        <div className="div-wishProduct">
                            <img src={item.image} className="img-wish" />
                            <p className="nameproduct-wish">{item.nameProduct}</p>
                            <Link to={`/producsDetails/${item.slug}`} className="details-product">product details <i class="bi bi-arrow-right-short"></i> </Link>
                            <br></br>
                            <button className="btn-remove-wish" onClick={() => removeWish(item.id)}>remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}