import { Link } from "react-router-dom";

export default function PopularProducts() {

    return (
        <>
            <div className="title-popular">
                <h3 className="text-title-popularProduct">Popular Product</h3>
            </div>

            <div className="nav-popular">
                <Link className="option-nav-popular">All</Link>
                <Link className="option-nav-popular">living room</Link>
                <Link className="option-nav-popular">Bedroom</Link>
                <Link className="option-nav-popular">Dining room</Link>
                <Link className="option-nav-popular">Office</Link>
                <Link className="option-nav-popular">Storage</Link>
                <Link className="option-nav-popular">outdoor</Link>
            </div>

        </>
    )
}