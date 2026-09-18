import article1 from "../../assets/article1.png"
import article2 from "../../assets/article2.png"
import article3 from "../../assets/article3.png"
import article4 from "../../assets/article4.png"

export default function () {
    return (
        <>
            <div className="container">
                <div className="services">
                    <div className="row">
                        <div className="col-6 col-md-3">
                            <img src={article1} className="img-service" />
                        </div>
                        <div className="col-6 col-md-3">
                            <img src={article2} className="img-service" />
                        </div>
                        <div className="col-6 col-md-3">
                            <img src={article3} className="img-service" />
                        </div>
                        <div className="col-6 col-md-3">
                            <img src={article4} className="img-service" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}