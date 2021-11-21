import React, { useEffect, useState } from 'react';
import "antd/dist/antd.css";
import { Menu, Row, Col } from "antd";
import { Switch, Route, Redirect, useRouteMatch, Link, useLocation } from "react-router-dom";
import MenuBreadcrumb from "../../MenuBreadcrumb/MenuBreadcrumb";
import { MenuBlockSecondStyle } from "./MenuBlockSecondStyle";
import { universalRequest } from "../../Admin/ControlLinkMessengers";
import BuShinRansom from './TireFitting/BuShinRansom';
import ForLegalEntities from './TireFitting/ForLegalEntities';
import PassengerTireFitting from './TireFitting/PassengerTireFitting';
import TireStorage from './TireFitting/TireStorage';
import TruckTireFitting from './TireFitting/TruckTireFitting';
import ArgonWelding from './Services/ArgonWelding';
import Curing from './Services/Curing';
import EditingDiscs from './Services/EditingDiscs';
import Vacancies from './Contacts/Vacancies';
import Address from './Addresses/Address';

const { SubMenu } = Menu

function NavigationBlockSecond() {
  const [widthstate, setWidthstate] = useState((window.innerWidth) > 768 ? "vertical" : "inline")
  window.onresize = (event)=>{(event.target.window.innerWidth) > 768 ? setWidthstate("vertical") : setWidthstate("inline")}
  const [addressState, setAddressState] = useState("")
  const { pathname } = useLocation()

  const AddressMenuItem = () => {

    let arr = [];

    for (const key in addressState) {

      arr.push(
        <Menu.Item key={addressState[key].textBody}>
          <Link to="/addresses/address">{addressState[key].textBody}</Link>
        </Menu.Item>
      )
    }

    return arr
  }

  useEffect(() => {
    window.scrollTo(0, 200);

    universalRequest("get", "/admin/address-contacts").then((result)=>{
      if (result) {

        setAddressState(result)
      }
    })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const PrimaryUrlMenu = () => {
    switch(pathname) {
      case "/tire-fitting":
        return (
          [
            <Menu mode={"inline"} key={"primaryUrlMenustate"} style={{background: "rgb(234 234 234 / 13%)"}}>
              <Menu.Item key={"/tire-fitting/passenger-tire-fitting"}>
                <Link to="/tire-fitting/passenger-tire-fitting">
                  Легковой шиномонтаж
                </Link>
              </Menu.Item>
              <Menu.Item key={"/tire-fitting/truck-tire-fitting"}>
                <Link to="/tire-fitting/truck-tire-fitting">
                  Грузовой шиномонтаж
                </Link>
              </Menu.Item>
              <Menu.Item key={"/tire-fitting/for-legal-entities"}>
                <Link to="/tire-fitting/for-legal-entities">
                  Шиномонтаж для юридических лиц. Обслуживание автопарков
                </Link>
              </Menu.Item>
            </Menu>
          ]
        )

      case "/services":
        return (
          [
            <Menu mode={"inline"} key={"primaryUrlMenustate"} style={{background: "rgb(234 234 234 / 13%)"}}>
              <Menu.Item key={"/services/argon-welding"}>
                <Link to="/services/argon-welding">Аргоновая сварка</Link>
              </Menu.Item>
              <Menu.Item key={"/services/curing"}>
                <Link to="/services/curing">Вулканизация</Link>
              </Menu.Item>
              <Menu.Item key={"/services/editing-discs"}>
                <Link to="/services/editing-discs">Правка дисков</Link>
              </Menu.Item>
            </Menu>
          ]
        )

      case "/contacts":
        return (
          [
            <Menu mode={"inline"} key={"primaryUrlMenustate"} style={{background: "rgb(234 234 234 / 13%)"}}>
              <Menu.Item key={"/contacts/vacancies"}>
                <Link to="/contacts/vacancies">Вакансии</Link>
              </Menu.Item>
            </Menu>
          ]
        )

      case "/addresses":
        return (
          [
            <Menu mode={"inline"} key={"primaryUrlMenustate"} style={{background: "rgb(234 234 234 / 13%)"}}>
              {AddressMenuItem()}
            </Menu>
          ]
        )

      default:

        return (null)
    }
  }
  

  const GetMenuBreadcrumb = ()=>{
    let MenuBlockSecondProps 

    switch(pathname) {
      case "/tire-fitting":  
      MenuBlockSecondProps = [["//tire-fitting","Шиномонтаж"]]
      break;
      case "/tire-fitting/passenger-tire-fitting":  
      MenuBlockSecondProps = [["//tire-fitting","Шиномонтаж"],["//tire-fitting/passenger-tire-fitting","Легковой шиномонтаж"]]
      break;
      case "/tire-fitting/truck-tire-fitting":  
      MenuBlockSecondProps = [["//tire-fitting","Шиномонтаж"],["//tire-fitting/truck-tire-fitting","Грузовой шиномонтаж"]]
      break;
      case "/tire-fitting/for-legal-entities":  
      MenuBlockSecondProps = [["//tire-fitting","Шиномонтаж"],["//tire-fitting/for-legal-entities","Шиномонтаж для юридических лиц. Обслуживание автопарков"]]
      break;
      case "/tire-fitting/bu-shin-ransom":  
      MenuBlockSecondProps = [["//tire-fitting","Шиномонтаж"],["//tire-fitting/bu-shin-ransom","Выкуп бу Шин"]]
      break;
      case "/tire-fitting/tire-storage":  
      MenuBlockSecondProps = [["//tire-fitting","Шиномонтаж"],["//tire-fitting/tire-storage","Хранение шин"]]
      break;

      case "/services":  
      MenuBlockSecondProps = [["//services","Услуги"]]
      break;
      case "/services/argon-welding":  
      MenuBlockSecondProps = [["//services","Услуги"],["//services/argon-welding","Аргоновая сварка"]]
      break;
      case "/services/curing":  
      MenuBlockSecondProps = [["//services","Услуги"],["//services/curing","Вулканизация"]]
      break;
      case "/services/editing-discs":  
      MenuBlockSecondProps = [["//services","Услуги"],["//services/editing-discs","Правка дисков"]]
      break;

      case "/contacts":  
      MenuBlockSecondProps = [["//contacts","Контакты"]]
      break;
      case "/contacts/vacancies":  
      MenuBlockSecondProps = [["//contacts","Контакты"],["//contacts/vacancies","Вакансии"]]
      break;

      case "/addresses":  
      MenuBlockSecondProps = [["//addresses","Адреса"]]
      break;
      case "/addresses/address":  
      MenuBlockSecondProps = [["//addresses","Адреса"],["//addresses/address", "карта"]]
      break;

      default:  
      MenuBlockSecondProps = [[pathname, pathname]]
      break;
    }

    return MenuBlockSecondProps
  }


  
  
  const MenuBlockSecond = ()=>{    
    return (
      <MenuBlockSecondStyle>
        <Menu
          mode={widthstate}
          selectedKeys={window.location.pathname.slice(1)}
          key={"MenuBlockSecondStyle"}
        >
          <SubMenu title={<Link to="/tire-fitting">Шиномонтаж</Link>}>
            <Menu.Item>
              <Link to="/tire-fitting/passenger-tire-fitting">
                Легковой шиномонтаж
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/tire-fitting/truck-tire-fitting">
                Грузовой шиномонтаж
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/tire-fitting/for-legal-entities">
                Шиномонтаж для юридических лиц. Обслуживание автопарков
              </Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item>
            <Link to="/tire-fitting/bu-shin-ransom">Выкуп бу Шин</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/tire-fitting/tire-storage">Хранение шин</Link>
          </Menu.Item>

          <SubMenu title={<Link to="/services">Услуги</Link>}>
            <Menu.Item>
              <Link to="/services/argon-welding">Аргоновая сварка</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/services/curing">Вулканизация</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/services/editing-discs">Правка дисков</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu title={<Link to="/contacts">Контакты</Link>}>
            <Menu.Item>
              <Link to="/contacts/vacancies">Вакансии</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu title={<Link to="/addresses">Адреса</Link>}>
            {AddressMenuItem()}
          </SubMenu>
        </Menu>
      </MenuBlockSecondStyle>
    );
  }

  const NavigationBlockSecondRouter = () => {
    const { path } = useRouteMatch()

    return (
      <Switch>
        <Route exact path={`${path}`}/>
        <Route path={`${path}/passenger-tire-fitting`} component={PassengerTireFitting} />
        <Route path={`${path}/truck-tire-fitting`} component={TruckTireFitting} />
        <Route path={`${path}/for-legal-entities`} component={ForLegalEntities} />

        <Route path={`${path}/bu-shin-ransom`} component={BuShinRansom} />
        <Route path={`${path}/tire-storage`} component={TireStorage} />
        
        <Route path={`${path}/argon-welding`} component={ArgonWelding} />
        <Route path={`${path}/curing`} component={Curing} />
        <Route path={`${path}/editing-discs`} component={EditingDiscs} />
        
        <Route path={`${path}/vacancies`} component={Vacancies} />
        
        <Route path={`${path}/address`} component={()=> <Address addressState={addressState} />} />
        <Route children={<Redirect to="/" />} />
      </Switch>
    );
  };


  return (
    <Row gutter={[0, 24]} style={{marginTop: 0}}>
      <Col span={23} offset={1}>
        <MenuBreadcrumb PathPageName={GetMenuBreadcrumb()} />
      </Col>
      <Col md={{span: 5, offset: 1}} xs={{span: 22, offset: 1}}>
        <MenuBlockSecond />
      </Col>
      <Col md={{span: 16, offset: 1}} xs={{span: 22, offset: 1}}>
        <Row>
          <Col span={24}>
            <PrimaryUrlMenu />
          </Col>
          <Col span={24} style={{minHeight: "400px"}}>
            <NavigationBlockSecondRouter />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default NavigationBlockSecond
