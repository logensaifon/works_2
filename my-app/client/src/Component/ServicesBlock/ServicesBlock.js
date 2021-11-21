import  React from "react";
import "./ServicesBlock.css";
import { Link } from "react-router-dom";
import imageShinomontaj from "./image/promo_5ee236484e1fb675437760.gif";
import imageUtilisatia from "./image/promo_5ee235c313b7f014180405.gif";
import imageXranilish from "./image/promo_5ee23545a2d4a343477412.gif";
import imageSvarka from "./image/promo_5ee234eaf01ac670744736.gif";

function ServicesBlock () {
    return (
        <div className="ServicesBlock">
            <div className="container-fluid">
                <div className="row p-5">
                    <div className="col-6 col-sm-6 col-md-3 p-1">
                        <div className="block">    
                            <Link to="/tire-fitting">
                            
                                <img src={imageShinomontaj} alt="Шиномонтаж"/>
                            
                                <div className="divText">
                                    <h5 className="hiddenH5">
                                        Шиномонтаж
                                    </h5>
                                    <p className="hiddenP">
                                        Шиномонтаж
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 p-1">
                        <div className="block">    
                            <Link to="/recycle-tires-for-free">
                            
                                <img src={imageUtilisatia} alt="Утилизация шин бесплатно"/>
                            
                                <div className="divText">
                                    <h5 className="hiddenH5">
                                    Утилизация шин бесплатно
                                    </h5>
                                    <p className="hiddenP">
                                    Утилизация шин бесплатно
                                    </p>
                                    <p className="pText">Вывоз шин на утилизацию</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 p-1">
                        <div className="block">    
                            <Link to="/tire-fitting/tire-storage">
                            
                                <img src={imageXranilish} alt="Хранение шин"/>
                            
                                <div className="divText">
                                    <h5 className="hiddenH5">
                                        Хранение шин
                                    </h5>
                                    <p className="hiddenP">
                                        Хранение шин
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 p-1">
                        <div className="block">    
                            <Link to="/services/argon-welding">
                            
                                <img src={imageSvarka} alt="Сварка Аргоном"/>
                            
                                <div className="divText">
                                    <h5 className="hiddenH5">
                                        Сварка Аргоном
                                    </h5>
                                    <p className="hiddenP">
                                        Сварка Аргоном
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesBlock