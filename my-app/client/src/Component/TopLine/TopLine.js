import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Row, Col, Menu } from "antd";
import Payment from "./Payment/Payment";
import Refound from "./refund/Refund";
import Delivery from "./Delivery/Delivery";
import { StyleComponent, ReturnComponentStyle } from "./TopLineStyle";
import { Switch, Route, Link } from "react-router-dom";
import MenuBreadcrumb from "../MenuBreadcrumb/MenuBreadcrumb";
import AdminPanel from "../Admin/AdminTopLinePanel/AdminPanel";
import { AdminContext } from "../Context";



const Receiving = (param) => {
  const ReturnComponent = (Content, pageName) => {
    return (
			<ReturnComponentStyle>
        <Row gutter={[0, 20, 0]}>
          <Col md={{span: 23, offset: 1}} xs={{span: 22, offset: 2}}>
            <MenuBreadcrumb PathPageName={[pageName]}/>
          </Col>
					<Col md={{span: 5, offset: 1, pull: 0, push: 0}} xs={{span: 20, pull: 2, push: 2}}>
						<MenuTopLine inline="inline" />
					</Col>
					<Col md={{span: 12, offset: 2, pull: 0, push: 0}} xs={{span: 20, pull: 2, push: 2}}>
						<Content />
					</Col>
        </Row>
			</ReturnComponentStyle>
    );
  };

  if (param === "/payment") {
    return ReturnComponent(Payment, ["/payment", "Оплата"]);
  } else if (param === "/refound") {
    return ReturnComponent(Refound, ["/refound", "Возврат"]);
  } else if (param === "/delivery") {
    return ReturnComponent(Delivery, ["/delivery", "Доставка"]);
  }
};

const MenuAdminTopLine = () => {
  const { userAdmin } = useContext(AdminContext)

  const Authorization = ()=>{
    if (userAdmin) {
      return (
        <AdminPanel />
      )
    } else {
      return (
        <Switch>
          <Route exact path="/admin" component={AdminPanel}/>
          <Route component={null} />
        </Switch>
      )
    }
  }

  return (    
  <Menu mode={"horizontal"} selectedKeys={window.location.pathname.slice(1)} style={{float: "right"}}>
    <Menu.Item key="my office">
      { userAdmin ? <Link to="/admin">мой кабинет</Link> : null }
    </Menu.Item>
    <Menu.Item key="authorization">
        {Authorization()} 
    </Menu.Item>
  </Menu>

);
}


const MenuTopLine = (props) => {
  return (
    <Menu mode={props.inline ? props.inline : "horizontal"} selectedKeys={window.location.pathname.slice(1)}>
      <Menu.Item key="Payment">
        <Link to="/payment" className="LinkPayment">Оплата</Link>
      </Menu.Item>
      <Menu.Item key="Refound">
        <Link to="/refound">Возврат</Link>
      </Menu.Item>
      <Menu.Item key="Delivery">
        <Link to="/delivery">Доставка</Link>
      </Menu.Item>
    </Menu>
  );
};

function TopLine() {
  return (
    <StyleComponent>
      <Row justify={"start"}>
        <Col sm={{ span: 11, offset: 1 }}  xs={{ span: 18 }}>
          <MenuTopLine />
        </Col>
        <Col sm={{ span: 11 }}  xs={{ span: 6 }}>
          <MenuAdminTopLine />
          </Col>
      </Row>
    </StyleComponent>
  );
}

export { Receiving };
export default TopLine;
