import LivingRoom from "../../assets/Livingroom1.png";
import bedRoom from "../../assets/bedroom1.png";
import DiningRoom from "../../assets/Diningroom1.png";
import Office from "../../assets/Office1.png";
import storage from "../../assets/Storage1.png";
import outDoor from "../../assets/Outdoor 1.png";
import { Link } from "react-router-dom"



export default function ShopByRoom() {

    return (
        <>
            <div className="container">
                <div className="text-ShopByRoom">
                    <h3 className="text1-Shop">__________ Shop By Room __________</h3>
                    <p className="text2-shop">find the perfect for every space in your home</p>
                </div>

                <div className="row gx-3 gy-1">
                    <div className="col-4 col-md-2 col-categori">
                        <div className="img-Shop"><Link><img src={LivingRoom} /></Link></div>
                        <p className="text-categori">Living Room</p>
                        <p className="text2-categori">10 product</p>
                    </div>

                    <div className="col-4 col-md-2 col-categori">
                        <div className="img-Shop"><Link><img src={bedRoom} /></Link></div>
                        <p className="text-categori">bed Room</p>
                        <p className="text2-categori">8 product</p>
                    </div>

                    <div className="col-4 col-md-2 col-categori">
                        <div className="img-Shop"><Link><img src={DiningRoom} /></Link></div>
                        <p className="text-categori">Dining Room</p>
                        <p className="text2-categori">14 product</p>
                    </div>

                    <div className="col-4 col-md-2 col-categori">
                        <div className="img-Shop"><Link><img src={Office} /></Link></div>
                        <p className="text-categori">Office</p>
                        <p className="text2-categori">4 product</p>
                    </div>

                    <div className="col-4 col-md-2 col-categori">
                        <div className="img-Shop"><Link><img src={storage} /></Link></div>
                        <p className="text-categori">Storage</p>
                        <p className="text2-categori">9 product</p>
                    </div>

                    <div className="col-4 col-md-2 col-categori">
                        <div className="img-Shop"><Link><img src={outDoor} /></Link></div>
                        <p className="text-categori">OutDoor</p>
                        <p className="text2-categori">10 product</p>
                    </div>
                </div>
            </div>
        </>
    )
}