import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [search , setsearch] = useState("")

    const handleSearch = (e)=>{
        if(!search.trim()){
            return
        }

       window.find(search) 
    }


    return (
        <div className="container">

            {/* -------------------------------- nav-top -------------------------------- */}
            <div className="nav-top">

                <div className="div-searcch-navTop">
                    <input placeholder="search product... " className="input-search" onChange={(e)=>setsearch(e.target.value)}/>
                    <i className="fa-solid fa-magnifying-glass icon-search-navTop" onClick={handleSearch}></i>
                </div>

                <div className="div-text-navTop">
                    <h4 className="text1">FURNITURA</h4>
                    <p className="text2">FURNITURA STORE</p>
                </div>

                <div className="div-icon-navTop">
                    <Link style={{ color: "white" }} to="/login"> <i className="fa-solid fa-user"></i></Link>
                    <Link style={{ color: "white" }} to="/wish">  <i className="fa-solid fa-heart"></i></Link>
                    <Link style={{ color: "white" }} to="/cart">  <i className="fa-solid fa-cart-shopping"></i></Link>
                </div>

            </div>

            {/* -------------------------------- nav-botton -------------------------------- */}

            <nav className="navbar navbar-expand-md navbar-dark nav-botton">
                <div className="container">

                    <p className="navbar-brand"> FURNITURA </p>

                    {/* دکمه همبرگری */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* منو */}
                    <div className="collapse navbar-collapse nav-menu" id="mainNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/producs" className="nav-link">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}