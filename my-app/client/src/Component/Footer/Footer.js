import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import {
  IconEnvelopeO,
  IconPhone,
  IconMapMarker,
  IconVk,
  IconInstagram,
  IconOdnoklassniki,
  IconFacebook,
  IconTwitter,
} from "./icon";
import { FooterStyle } from "./FooterStyle";
import { universalRequest } from "../Admin/ControlLinkMessengers";


const Block4 = () => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      <h5>ОПЛАТА</h5>
      <div className="divIcon">
        <img
          src="https://mg-group24.ru/wa-plugins/payment/cash/img/cash.png"
          alt="Наличные"
        />
        <img
          src="https://mg-group24.ru/wa-plugins/payment/cash/img/cash.png"
          alt="Банковский перевод"
        />
        <img
          src="https://mg-group24.ru/wa-plugins/payment/robokassa/img/robokassa.png"
          alt="Оплата банковской картой"
        />
      </div>
    </div>
  );
};

const IconContant = () => {
  const [vk, setVkstate] = useState("not found");
  const [instagram, setInstagramstate] = useState("not found");
  const [odnoklassniki, setOdnoklassnikistate] = useState("not found");
  const [facebook, setFacebookstate] = useState("not found");
  const [twitter, setTwitterstate] = useState("not found");


  useEffect(()=>{
    universalRequest("get", "/admin/massengers-contacts/vk").then((result)=>{
      if (result) {
        setVkstate(result.textBody)
      }
    })
    universalRequest("get", "/admin/massengers-contacts/instagram").then((result)=>{
      if (result) {
        setInstagramstate(result.textBody)
      }
    })
    universalRequest("get", "/admin/massengers-contacts/odnoklassniki").then((result)=>{
      if (result) {
        setOdnoklassnikistate(result.textBody)
      }
    })
    universalRequest("get", "/admin/massengers-contacts/facebook").then((result)=>{
      if (result) {
        setFacebookstate(result.textBody)
      }
    })
    universalRequest("get", "/admin/massengers-contacts/twitter").then((result)=>{
      if (result) {
        setTwitterstate(result.textBody)
      }
    })
  }, [])

  return (
    <Row gutter={[8, 0]}>
      <Col>
        <div className="iconbox" 
            style={vk === "not found" ? {display: "none"} : null}
        >
          <Link to="/">
            <IconVk size={20} style={{ marginTop: "1.5px" }} />
          </Link>
        </div>
      </Col>
      <Col>
        <div className="iconbox" 
            style={instagram === "not found" ? {display: "none"} : null}
        >
          <Link to="/">
            <IconInstagram size={20} style={{ marginTop: "1.5px" }} />
          </Link>
        </div>
      </Col>
      <Col>
        <div className="iconbox" 
            style={odnoklassniki === "not found" ? {display: "none"} : null}
        >
          <Link to="/">
            <IconOdnoklassniki size={20} style={{ marginTop: "1.5px" }} />
          </Link>
        </div>
      </Col>
      <Col>
        <div className="iconbox" 
            style={facebook === "not found" ? {display: "none"} : null}
        >
          <Link to="/">
            <IconFacebook size={20} style={{ marginTop: "1.5px" }} />
          </Link>
        </div>
      </Col>
      <Col>
        <div className="iconbox" 
            style={twitter === "not found" ? {display: "none"} : null}
        >
          <Link to="/">
            <IconTwitter size={20} style={{ marginTop: "1.5px" }} />
          </Link>
        </div>
      </Col>
    </Row>
  );
};

const Block3 = () => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div className="block3">
        <h5>СОЦСЕТИ</h5>
        <IconContant />
        <div className="agreed">
          Мы получаем и обрабатываем персональные данные посетителей нашего
          сайта в соответствии с{" "}
          <a href="https://www.nic.ru/help/politika-ispol6zovaniya-cookie-fajlov_889.html">
            официальной политикой
          </a>
          . Если вы не даете согласия на обработку своих персональных данных,вам
          необходимо <a href="https://www.google.com/">покинуть наш сайт</a>
        </div>
      </div>
    </div>
  );
};

const Block2 = () => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div className="block2">
        <h5>РАЗДЕЛЫ</h5>
        <ul>
          <li>
            <i className="fa fa-angle-right" />
            <Link to="/category/WinterTires">Зимние шины бу</Link>
          </li>
          <br />
          <li>
            <i className="fa fa-angle-right" />
            <Link to="/category/LightTruckTires">Легкогрузовые шины бу</Link>
          </li>
          <br />
          <li>
            <i className="fa fa-angle-right" />
            <Link to="/category/TruckTires">Грузовые шины бу</Link>
          </li>
          <br />
          <li>
            <i className="fa fa-angle-right" />
            <Link to="/category/DiscsAndWheels">Диски и колеса бу</Link>
          </li>
          <br />
          <li>
            <i className="fa fa-angle-right" />
            <Link to="/category/SummerTires">Летние шины бу</Link>
          </li>
          <br />
          <li>
            <i className="fa fa-angle-right" />
            <Link to="/category/MotorcycleTires">Мотошины бу</Link>
          </li>
          <br />
        </ul>
      </div>
    </div>
  );
};

const Block1 = () => {
  const [phoneState, setPhoneState] = useState("")
  const [emailState, setEmailState] = useState("")
  const [addressState, setAddressState] = useState("")

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
      universalRequest("get", "/admin/massengers-contacts/address").then((result)=>{
          if (result) {
            setAddressState(result.textBody)
          }
      })
  }, [])

  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 ">
      <div className="block1">
        <h5>КОНТАКТЫ</h5>
        <div className="address">
          <IconMapMarker />
          {addressState}
        </div>
        <div className="phone">
          <IconPhone />
          <a href={`tel: ${phoneState}`}>{phoneState}</a>
          <br />
          Пн—Вс Круглосуточно
        </div>
        <div className="mail">
          <IconEnvelopeO />
          <a href={`mailto: ${emailState}`}>{emailState}</a>
        </div>
      </div>
    </div>
  );
};

function Footer() {
  return (
    <FooterStyle>
      <div className="container-fluid pl-0 pt-5">
        <div className="row divBlock pl-5">
          <Block1 />
          <Block2 />
          <Block3 />
          <Block4 />
          <div className="col-12 textRecommendation">
            При использовании материалов с сайта обязательно указание прямой
            ссылки на источник.
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
