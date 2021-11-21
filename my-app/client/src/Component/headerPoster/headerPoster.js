import React from "react";
import "./headerPoster.css";
import { Link } from "react-router-dom";
import headerImg from "./image/8.1250x0.jpg"

function HeaderPoster() {
    return (
        <div className="headerPoster">
            <div className="container-fluid ">
                <div className="row pt-4 pl-5 pr-5">
                    <div className="col-12 p-0">
                        <Link to="/" className="headImg">
                            <img src={headerImg} alt="Img"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderPoster