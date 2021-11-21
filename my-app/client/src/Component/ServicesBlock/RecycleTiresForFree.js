import React from "react";
import "antd/dist/antd.css";
import {Row, Col} from "antd";
import freeTransportation from "./image/Share21521dScreenshot.png";
import allDocument from "./image/Share5154dScreenshot.png";
import expresTime from "./image/SharedS2creenshot.png";
import basket from "./image/SharedScreenshot.png";
import MenuBlockSecond from "../MenuBreadcrumb/MenuBreadcrumb";

function RecycleTiresForFree() {
    const PathPageName = ["/recycle-tires-for-free", "Утилизация шин бесплатно" ]

  return (
    <Row gutter={[0, 32]} style={{marginTop: 0}}>
        <Col span={22} offset={1}>
            <MenuBlockSecond PathPageName={[PathPageName]}/>
        </Col>
      <Col span={22} offset={1}>
        <h3>Вывоз шин на утилизацию бесплатно</h3>
        <p>
        Компания «Shintekh» предлагает услуги по бесплатному вывозу старых шин для утилизации и переработки. Если на вашей даче или в гараже хранятся старые уже ненужные шины, мы готовы избавить вас от проблем с их утилизацией.
        </p>
      </Col>
      <Col span={22} offset={1}>
        <Row gutter={[0, 24]} style={{marginTop: "50px", marginBottom: "50px"}}>
            <Col md={6} sm={12} xs={24}>
                <img src={freeTransportation} alt="" style={{width: "20%", marginLeft: "40%", paddingBottom: "25px"}}/>
                <p style={{fontWeight: 500, textAlign: "center"}}>БЕСПЛАТНЫЙ ВЫВОЗ ШИН</p>
            </Col>
            <Col md={6} sm={12} xs={24}>
                <img src={allDocument} alt="" style={{width: "20%", marginLeft: "40%", paddingBottom: "20px"}}/>
                <p style={{fontWeight: 500, textAlign: "center"}}>ВСЕ НЕОБХОДИМЫЕ ДОКУМЕНТЫ</p>
            </Col>
            <Col md={6} sm={12} xs={24}>
                <img src={expresTime} alt="" style={{width: "20%", marginLeft: "40%", paddingBottom: "17px"}}/>
                <p style={{fontWeight: 500, textAlign: "center"}}>РАБОТАЕМ 24/7</p>
            </Col>
            <Col md={6} sm={12} xs={24}>
                <img src={basket} alt="" style={{width: "20%", marginLeft: "40%", paddingBottom: "26px"}}/>
                <p style={{fontWeight: 500, textAlign: "center"}}>ПОГРУЗИМ СВОИМИ СИЛАМИ</p>
            </Col>
        </Row>
      </Col>
      <Col md={10} xs={{span: 22, offset: 1}}>
        <strong>Бесплатный вывоз — шин преимущества услуги</strong>
        <ul style={{listStyleType: "none"}}>
            <li>
                <strong>
                {"1)"} Мы принимаем и вывозим любые шины в любом объеме в день обращения!
                </strong>
            </li>
            <li>
                <strong>
                {"2)"} Вывоз шин на утилизацию — прием шин в любом состоянии
                </strong>
            </li>
            <li>
                <strong>
                {"3)"} Для организаций предоставляем все необходимые документы (договор, акты, лицензии)
                </strong>
            </li>
            <li>
                <strong>
                {"4)"} Приедем за вашими автошинами уже сегодня, а также вы можете сами привезти их по нашим адресам
                </strong>
            </li>
        </ul>
      </Col>
      <Col md={{span: 10, offset: 2}} xs={{span: 22, offset: 1}}>
        <strong>что делать</strong>
        <ul style={{listStyleType: "none"}}>
            <li>
                <strong>
                {"1)"} Отправьте фото Б У шин на Whatsapp, Telegram, Viber или
                E-mail.
                </strong>
            </li>
            <li>
                <strong>
                {"2)"} Мы оценим ваши покрышки и назовем цену в течение 5 минут
                (Покупаем с износом до 50%)
                </strong>
            </li>
            <li>
                <strong>
                {"3)"} Приедем за вашими автошинами, а также вы можете сами
                привезти их по нашим адресам
                </strong>
            </li>
            </ul>
      </Col>
      <Col span={20} offset={2}>
        <p style={{color: "#e20606"}}>
        Изношенные старые покрышки относятся к отходам. Такие предметы представляют собой опасность для экологии. Чтобы они разложились естественным образом, понадобится не менее ста лет. Все это время они будут портить окружающую среду. Конечно, вы вправе решать, куда самостоятельно деть старые шины. Но учитывайте, что выброшенные покрышки приносят вред экологии.

        Многих автовладельцев смущает мысль, что за утилизацию шин придется много платить. Ведь в цену новых покрышек не заложена стоимость доставки изношенных автошин на заводы, где ее перерабатывают. Чтобы сдать одну шину в некоторых автосервисах нужно заплатить до 100 рублей, а шипованная резина обходится еще дороже. Наша компания «Shintekh» предлагает вам немного сэкономить средства и утилизировать изношенные покрышки по самым низким ценам.

        Мы заботимся об экологическом состоянии своего города и о комфорте автовладельцев. Поэтому предлагаем привозить нам старые покрышки. У нас также предусмотрен вывоз шин на утилизацию бесплатно. Мы к вам приедем и установим контейнер, куда вы сможете сгрузить ненужные автошины.
        </p>
      </Col>
    </Row>
  );
}


export default RecycleTiresForFree
