import promo1 from "../../assets/promo1.png"
import promo2 from "../../assets/promo2.png"
import promo3 from "../../assets/promo3.png"

export default function PromoBanner() {

    return (
        <>
            <div className="container">
                <div className="row g-2">
                    <div className="col-12 col-md-4">
                        <img src={promo1} className="img-promoBanner" />
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={promo2} className="img-promoBanner" />
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={promo3} className="img-promoBanner" />
                    </div>
                </div>
            </div>

        </>
    )
}