import React, { useContext, useEffect } from "react";
import "antd/dist/antd.css";
import { Row, Col, Empty } from "antd";
import FormSendingUserData from "./FormSendingUserData";
import CardsProduct from "./CardsProduct";
import { ProductContext } from "../../Context";
import MenuBreadcrumb from "../../MenuBreadcrumb/MenuBreadcrumb";
import { Link } from "react-router-dom";

function ListBasket() {
  const pageName = ["/basket", "Корзина"];
  const { addBasket } = useContext(ProductContext);

  useEffect(() => {
    window.scrollTo(0, 200);
    
  }, [])

  return (
    <Row gutter={[0, 16]} style={{marginTop: "32px"}}>
      <Col span={23} offset={1}>
        <MenuBreadcrumb PathPageName={[pageName]}/>
      </Col>
      <Col span={23} offset={1}>
        {addBasket ? <h4>Оформление</h4> : <h4>Корзина 0</h4>}
      </Col>
      <Col xs={{ span: 22, offset: 1 }} >
        {addBasket ? (
          null
        ) : (
          <Empty
            style={{
              textAlign: "center",
              marginTop: "150px",
              paddingBottom: "150px",
              color: "rgba(0, 0, 0, 0.85)",
              marginBottom: "250px"
            }}
            description={"Ваша корзина пуста."}
          >
            вернутся <Link to="/">главной</Link> страницы
          </Empty>
        )}
      </Col>
      <Col xs={{ span: 22 }} lg={{ span: 11}}>
        {addBasket ? <FormSendingUserData /> : null}
      </Col>
      <Col xs={{ span: 22, offset: 1 }} lg={{ span: 11, offset: 1 }}>
        <CardsProduct />
      </Col>
    </Row>
  );
}

export default ListBasket;
