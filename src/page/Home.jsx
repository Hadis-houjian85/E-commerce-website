import Hero from "../components/home/Hero";
import PopularProducts from "../components/home/PopularProducts";
import PromoBanner from "../components/home/PromoBanner";
import Services from "../components/home/Services";
import ShopByRoom from "../components/home/ShopByRoom";

export default function Home(){
    return(
         <>
            <Hero/>  
            <ShopByRoom/>
            <PromoBanner/>
            <PopularProducts/>
            <Services/>
        </>
    )
}