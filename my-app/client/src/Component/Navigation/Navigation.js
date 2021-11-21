import React, { useState } from "react";
import ProductCategoryList from "../PopularCategories/ProductCategoryList";
import "antd/dist/antd.css";
import { Row, Col, Menu, Layout } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import { StyleComponent } from "./NavigationStyle";
import { MyLink } from "./MyLink";
import BlockSecond from "./BlockSecond";

const { SubMenu } = Menu;
const { Header } = Layout;

const SizeList = (param, _href, changeStateClppaps) => {
  let arr = [];
  let link;

  arr.push(
    param.map((it) => {
      // if (typeof it === "object") {
      //   link = `${_href}/${it[0]}`;
      //   return (
      //     <SubMenu title={<MyLink to={`/${link}`} onClick={changeStateClppaps}>{it[0]}</MyLink>} key={link}>
      //       {SizeList(it[1], link)}
      //     </SubMenu>
      //   );
      // } else {
        switch (it) {
          case "Литые":
            link = `${_href}/AlloyWheels`;
            break;
          case "Штампованные":
            link = `${_href}/Stamped`;
            break;
          case "На Matiz":
            link = `${_href}/onMatiz`;
            break;
          case "Шины на УАЗ":
            link = `${_href}/TiresForUAZ`;
            break;
          case "на Ниву":
            link = `${_href}/ToTheNiva`;
            break;

          default:
            link = `${_href}/${it}`;
            break;
        }

        return (
          <Menu.Item key={link}>
            <MyLink to={`/${link}`} key={it}>
              {it}
            </MyLink>
          </Menu.Item>
        );
      // }
    })
  );

  return arr;
};

const ProductList = (param, changeStateClppaps) => {
  let arr = [];
  for (const key in ProductCategoryList) {
    let link;

    switch (ProductCategoryList[key][1]) {
      case "Зимние шины бу":
        link = `${param}/WinterTires`;
        break;

      case "Легкогрузовые шины бу":
        link = `${param}/LightTruckTires`;
        break;

      case "Грузовые шины бу":
        link = `${param}/TruckTires`;
        break;

      case "Диски и колеса бу":
        link = `${param}/DiscsAndWheels`;
        break;

      case "Летние шины бу":
        link = `${param}/SummerTires`;
        break;

      case "Мотошины бу":
        link = `${param}/MotorcycleTires`;
        break;

      default:
        break;
    }

    arr.push(
      <SubMenu
        title={<MyLink to={`/${link}`} onClick={changeStateClppaps}>{ProductCategoryList[key][1]}</MyLink>}
        key={link}
      >
        {SizeList(ProductCategoryList[key][2], link, changeStateClppaps)}
      </SubMenu>
    );
  }
  return arr;
};

const BlockFirst = (windowWidth, changeStateClppaps) => {
  let link = "category";

  return (
    <SubMenu
      title={<span className="insideTitle">Каталог товаров</span>}
      icon={<BarsOutlined />}
      key={link}
    >
      {ProductList(link, changeStateClppaps)}
      {(windowWidth) ? BlockSecond(false, changeStateClppaps) : null}
    </SubMenu>
  )
};

function Navigation() {
  const [callapsedstate, setCallapsedstate] = useState(false)
  const [windowWidth, setWindowWidth] = useState((window.innerWidth > 768) ? "horizontal" : "inline");
  window.onresize = (event)=>{
    (event.target.window.innerWidth > 768) ? setWindowWidth("horizontal") : setWindowWidth("inline")
  };
 
  window.onclick = (event)=>{
    if (windowWidth === "inline" && document.getElementsByClassName("boxHeader")[0].scrollHeight > 45)
  
    for (const key in event.path) {

      if (event.path[key].className && event.path[key].className.search("boxHeader") > -1) {
        return
          
      } else if (event.path.length - 1 === +key) {
        changeStateClppaps()
        return 
      }
    } 
  }

  function changeStateClppaps() {
    if (callapsedstate) {
      setCallapsedstate(false)
      return
    } else {
      setCallapsedstate(true)
      return
    }
  }

  const CallMenu = () => {
    return (
        <Row wrap="true">
          <Col span={24} className="boxHeader">
            <Header>
              <Menu
                mode={windowWidth}
                subMenuCloseDelay={0.1}
                onSelect={changeStateClppaps}
                inlineIndent="24"
              >
                {BlockFirst((windowWidth === "inline") ? windowWidth : null, changeStateClppaps)}
                {(windowWidth === "horizontal") ? BlockSecond(true, changeStateClppaps) : null}
              </Menu>
            </Header>
          </Col>
        </Row>
    );
  }
  
  return (
    <StyleComponent>
      {callapsedstate ? <CallMenu /> : <CallMenu />}
    </StyleComponent>
  );
}

export default Navigation;