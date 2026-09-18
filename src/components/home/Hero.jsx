import { Link } from "react-router-dom"
import HeroImage from "../../assets/Hero.png"

export default function Hero() {

    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide container" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active img-hero">
                        <img src={HeroImage} className="d-block w-100" alt=""/>
                        <Link className="btn btn-hero">Shop Now <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )



}