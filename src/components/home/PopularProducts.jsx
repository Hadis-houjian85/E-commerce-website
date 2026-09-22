import { Link } from "react-router-dom";
import product from "../../data/Product"
export default function PopularProducts() {

    let productPopular = product.filter(function (item) {
        return item.popular === true
    })

    return (
        <>
            <div className="title-popular">
                <h3 className="text-title-popularProduct">Popular Product</h3>
            </div>

            <div className="nav-popular">
                <Link className="option-nav-popular" to="/producs">All</Link>
                <Link className="option-nav-popular" to="/producs?category=livin-room">living room</Link>
                <Link className="option-nav-popular" to="/producs?category=bed-room">Bedroom</Link>
                <Link className="option-nav-popular" to="/producs?category=table">Dining room</Link>
                <Link className="option-nav-popular" to="/producs?category=office">Office</Link>
                <Link className="option-nav-popular" to="/producs?category=storage">Storage</Link>
                <Link className="option-nav-popular" to="/producs?category=outdoor">outdoor</Link>
            </div>
            <br></br>

            <div className="container">
                <div className="popular-products-overflow">
                    <div className="row flex-nowrap">
                        {productPopular.map((item) => {
                            return (
                                <div className="gx-4 gy-3 col-4 col-md-3 col-lg-2 text-center" key={item.id}>
                                    <div className="div-popular-product">
                                        <img src={item.image} className="img-popular" />
                                        <p className="nameProduct-title-popular">{item.nameProduct}</p>
                                        <p className="price-product-popular">price : {item.price}$</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}