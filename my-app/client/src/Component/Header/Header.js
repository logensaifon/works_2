import React, { useEffect, useState } from "react";
import "./Header.css";
import delivery from "./icon/delivery icon delivery icon.png";
import creditCards from "./icon/credit-cards.png";
import like from "./icon/like.png";
import { Link } from "react-router-dom";
import { ItBasket } from "./ItBasket";
import { IconVnvelope } from "./icon";
import imgLogo from "./image/IMG-20210604-WA0002.jpg";
import { universalRequest } from "../Admin/ControlLinkMessengers";
import Search from "./Search/Search";


const TopPart = ()=>{
    const [phoneState, setPhoneState] = useState("")
    const [emailState, setEmailState] = useState("")

    useEffect(()=>{
        universalRequest("get", "/admin/massengers-contacts/phone").then((result)=>{
            if (result && result.textBody.length === 11) {
                let phone = result.textBody
                setPhoneState(`${phone[0]}(${phone[1]}${phone[2]}${phone[3]})${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}-${phone[9]}${phone[10]}`)
            }
        })
        universalRequest("get", "/admin/massengers-contacts/email").then((result)=>{
            if (result) {
                setEmailState(result.textBody)
            }
        })
    }, [])

    return (
        <div className="row justify-content-center">
            <div className=" col-sm-7 col-md-7 p-0">
                <div className="contactHeader">

                    <div className="topDiv">
                        <a 
                            href={`tel: ${phoneState}`} 
                            className="phoneHeader"
                        >
                            {phoneState}
                        </a>
                        <div className="bot"></div>
                        <p>Пн—Вс Круглосуточно</p>
                    </div>

                    <div className="bottomDiv">
                        <IconVnvelope/>
                        <a href={`mailto: ${emailState}`} className="mailHeader">{emailState}</a>
                    </div>
                </div>
            </div>

            <div className="col-md-5">
                <ItBasket size={30}/>
            </div>
        </div>
    )
}

const BottomPart = ()=>{



    return (
        <div className="BottomPart">
            <div className="row">
                <div className="col-lg-6 col-md-4 col-sm-12">
                    <Search />
                </div>
                <div className="col-md-8 col-lg-6">
                    <div className="row iconHeader">
                        <div className="col-md-4 p-0">
                            <div  className="delivery">
                                <div><img src={delivery} alt=""/></div>
                                <p>Быстрая доставка</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-0">
                            <div className="creditCards">
                                <div><img src={creditCards} alt=""/></div>
                                <p>Доступные способы оплаты</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-0">
                            <div className="like">
                                <div><img src={like} alt=""/></div>
                                <p>Свыше 10 000+ товаров</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Header (){
    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row justify-content-center pt-3">

                    <div className=" col-lg-3 col-md-3 pt-4">
                        <div className="divLogo">
                            <Link to="/">
                            <img src={imgLogo} alt="shintekh"/>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-9 col-md-9">
                        <TopPart />
                        <BottomPart />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header