import products from "../../data/Product"
import { Link } from "react-router-dom";

export default function () {

    const discount = products.filter((item) => { return item.discount === true })

    return (
        <>
            {/* ------------------------ title ------------------------ */}
            <div className="title-Deal">
                <h3 className="title-Deal-text">Deal Of The Week </h3>
                <p className="p-Deal">limited tim offer don`t want to miss</p>
            </div>

            {/* ------------------------ product ------------------------ */}

            <div className="container">
                <div className="product-deal-overfiow my-4">
                    <div className="row flex-nowrap">
                        {discount.map((item) => {
                            return (
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <div className="product-deal">
                                        <img src={item.image} className="img-DealProduct" />
                                        <p className="nameproduct-deal">{item.nameProduct}</p>
                                        <p className="oldpriceproduct-deal">old price :<del style={{ textDecorationColor: "red"}}> {item.oldPrice} $</del></p>
                                        <p className="priceproduct-deal">price : {item.price} $ </p>
                                        <Link className="text-detailpoducts" to={`/producsDetails/${item.slug}`} >products Details<i className="bi bi-arrow-right-short"></i></Link>
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