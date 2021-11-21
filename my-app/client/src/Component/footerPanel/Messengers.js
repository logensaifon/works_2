import React, { useEffect, useState } from "react";
import { Popover, Row, Col, BackTop } from "antd";
import { MassengersStyle } from "./StyleComponent/MassengersStyle";
import { IconRiTelegramLine, IconWhatsapp, IconFaViber } from "./icon";
import { MassengersContentStyle } from "./StyleComponent/MassengersContentStyle";
import iconSmartphone from "./image/icons8-сенсорный-смартфон-64.png";
import { IconAngleDoubleUp } from "./icon";
import { universalRequest } from "../Admin/ControlLinkMessengers";

function Messengers() {
  const [telegramstate, setTelegramstate] = useState("not found");
  const [whatsappstate, setWhatsappstate] = useState("not found");
  const [viberstate, setViberstate] = useState("not found");

  
  useEffect(()=>{
    universalRequest("get", "/Admin/massengers-contacts/telegram").then((result)=>{
      if (result) {
        
        setTelegramstate(result.textBody)
      }
    })
    universalRequest("get", "/Admin/massengers-contacts/whatsapp").then((result)=>{
      if (result) {
       setWhatsappstate(result.textBody)

      }
    })
    universalRequest("get", "/Admin/massengers-contacts/viber").then((result)=>{
      if (result) {
        setViberstate(result.textBody)
      }
    })

  }, [])

  const telegramContent = (
    <div>
      <MassengersContentStyle>
        <Row>
          <Col span={4}>
            <IconRiTelegramLine className="iconRiTelegramLine" size={40} />
          </Col>
          <Col span={20}>
            <h6>Написать в Telegram:</h6>
            <p>
              Если у вас на компьютере установлено приложение Telegram, то
              просто перейдите по этой{" "}
              <a href={`https://t.me/${telegramstate}`}>ссылке</a> и напишите
              нам.
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <img src={iconSmartphone} alt={iconSmartphone} width="90%" />
          </Col>
          <Col span={20}>
            <h6>Альтернативный способ:</h6>
            <p>
              Внесите этот номер в адресную книгу своего телефона:
              Установите и откройте <strong>Telegram</strong>, найдите созданный
              контакт и напишите нам.{" "}
            </p>
            <div className="messegeContact">{telegramstate}</div>
          </Col>
        </Row>
      </MassengersContentStyle>
    </div>
  );

  const whatsappContent = (
    <div>
      <MassengersContentStyle>
        <Row>
          <Col span={4}>
            <IconWhatsapp className="iconwhatsapp" size={40} />
          </Col>
          <Col span={20}>
            <h6>Написать в whatsapp:</h6>
            <p>
              Если у вас на компьютере установлено приложение whatsapp, то
              просто перейдите по этой{" "}
              <a href={`https://wa.me/${whatsappstate}`}>ссылке</a> и напишите
              нам.
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <img src={iconSmartphone} alt={iconSmartphone} width="90%" />
          </Col>
          <Col span={20}>
            <h6>Альтернативный способ:</h6>
            <p>
              Внесите этот номер в адресную книгу своего телефона:
              Установите и откройте <strong>whatsapp</strong>, найдите созданный
              контакт и напишите нам.{" "}
            </p>
            <div className="messegeContact">{whatsappstate}</div>
          </Col>
        </Row>
      </MassengersContentStyle>
    </div>
  );

  const viberContent = (
    <div>
      <MassengersContentStyle>
        <Row>
          <Col span={4}>
            <IconFaViber className="iconviber" size={40} />
          </Col>
          <Col span={20}>
            <h6>Написать в viber:</h6>
            <p>
              Если у вас на компьютере установлено приложение viber, то просто
              перейдите по этой{" "}
              <a href={`https://viber.click/${viberstate}`}>ссылке</a> и напишите
              нам.
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <img src={iconSmartphone} alt={iconSmartphone} width="90%" />
          </Col>
          <Col span={20}>
            <h6>Альтернативный способ:</h6>
            <p>
              Внесите этот номер в адресную книгу своего телефона:
              Установите и откройте <strong>viber</strong>, найдите созданный
              контакт и напишите нам.{" "}
            </p>
            <div className="messegeContact">{viberstate}</div>
          </Col>
        </Row>
      </MassengersContentStyle>
    </div>
  );

  return (
    <MassengersStyle>
      <Popover placement="right" content={telegramContent} trigger="click">
        <button
          style={telegramstate === "not found" ? { display: "none" } : null}
        >
          <IconRiTelegramLine className="iconRiTelegramLine" size={30} />
        </button>
      </Popover>
      <Popover placement="rightBottom" content={whatsappContent} trigger="click">
        <button
          style={whatsappstate === "not found" ? { display: "none" } : null}
        >
          <IconWhatsapp className="iconwhatsapp" size={30} />
        </button>
      </Popover>
      <Popover placement="rightBottom" content={viberContent} trigger="click">
        <button 
          style={viberstate === "not found" ? { display: "none" } : null}
        >
          <IconFaViber className="iconviber" size={30} />
        </button>
      </Popover>
      <BackTop>
        <IconAngleDoubleUp className="BackTopContent" size={35} />
      </BackTop>
    </MassengersStyle>
  );
}

export default Messengers;
