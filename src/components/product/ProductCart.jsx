import products from "../../data/Product"
import { Link, useSearchParams } from "react-router-dom"

export default function ProductCart() {

    const [searchParams] = useSearchParams()
    const category = searchParams.get("category")
    const filteredProducts = category
        ? products.filter((item) => item.category === category)
        : products
        
    return (
        <>
            <article className="container">
                <div className="row">
                    {filteredProducts.map((item) => {
                        return (
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={item.id}>
                                <div className="All-products">
                                    <img src={item.image} className="img-AllProducs" />
                                    <p className="name-AllProducs">{item.nameProduct}</p>
                                    <p className="price-AllProducs">price : {item.price}$</p>
                                    <Link to={`/producsDetails/${item.slug}`} className="detail-AllProducs">see setails <i className="bi bi-arrow-right-short"></i></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </article>
            <br></br>
            <br></br>
        </>
    )
}