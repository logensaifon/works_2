import React, { useEffect, useContext } from "react";
import "antd/dist/antd.css";
import { Row, Col, Menu } from "antd";
import { FooterPanelStyled } from "./StyleComponent/FooterPanelStyle";
import { Button } from "./StyleComponent/Button";
import { MenuStyle } from "./StyleComponent/MenuStyle";
import { BasketStyle } from "./StyleComponent/BasketStyle";
import {
  IconHeartO,
  IconEye,
  IconSliders
} from "./icon";
import Messengers from "./Messengers";
import { ProductContext } from "../Context";


const readLocalStoragValue = (params, callbackState) => {
  let localStoragValue = localStorage.getItem(params)
  let jsonparser = JSON.parse(localStoragValue);

  if (jsonparser === null || jsonparser === undefined) {
    callbackState(jsonparser = 0);
  } else {
    callbackState(jsonparser.length);
  }
}

const Bar = () => {
  const {
    favorites, setFavoritesstate,
    compareProducts, setCompareProductsstate,
    productsViewed, setProductsViewedstate
  } = useContext(ProductContext)  
  
  useEffect(() => {
    readLocalStoragValue("favorite", setFavoritesstate);
    readLocalStoragValue("comparison", setCompareProductsstate);
    readLocalStoragValue("viewed", setProductsViewedstate);
  }, [setCompareProductsstate, setFavoritesstate, setProductsViewedstate])
  
  
  const MaximumAllowedNumber = (accept, returns) => {
    if (accept >= returns) {
      return returns + "+";
    } else {
      return accept;
    }
  };
  
  return (
    <MenuStyle>
      <Menu mode="horizontal">
        <Menu.Item>
          <Button to={"/favoriteslist"}>
            <IconHeartO size={23} />
            <p>Избранное</p>
            <div className="sews">{MaximumAllowedNumber(favorites, "99")}</div>
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button to={"/comparelist"}>
            <IconSliders size={23} />
            <p>Сравнить товары</p>
            <div className="sews">
              {MaximumAllowedNumber(compareProducts, "99")}
            </div>
          </Button>
        </Menu.Item>
        <Menu.Item danger={true}>
          <Button to={"/viewedlist"}>
            <IconEye size={23} />
            <p>Просмотренные товары</p>
            <div className="sews">
              {MaximumAllowedNumber(productsViewed, "99")}
            </div>
          </Button>
        </Menu.Item>
        <Menu.Item className="BasketItem">
          <BasketStyle size={25} />
        </Menu.Item>
      </Menu>
    </MenuStyle>
  );
};

function FooterPanel() {
  return (
    <FooterPanelStyled>
      <Row>
        <Col className="colMenuMessenger" xs={{span: 3, offset: 21}} sm={{span: 2, offset: 22}} xl={{span: 1, offset: 23}}>
          <Messengers />
        </Col>
        <Col className="colMenuPanel" span={24}>
          <Bar />
        </Col>
      </Row>
    </FooterPanelStyled>
  );
}

export { readLocalStoragValue }
export default FooterPanel;
