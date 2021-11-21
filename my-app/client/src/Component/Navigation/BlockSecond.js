import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { MyLink } from "./MyLink";
import { universalRequest } from "../Admin/ControlLinkMessengers";


const { SubMenu } = Menu;

function BlockSecond(iconParams, changeStateClppaps) {
  const [addressState, setAddressState] = useState("")
  let cleanupFunction = true

  useEffect(()=>{

    universalRequest("get", "/admin/address-contacts").then((result)=>{
      if (cleanupFunction)
      if (result) {

        setAddressState(result)
      }
    })

    return ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanupFunction = false
    }
  }, [])

  const AddressMenuItem = () => {
    let arr = [];

    for (const key in addressState) {

      arr.push(
        <Menu.Item key={`kry_${addressState[key].textBody}`}>
          <MyLink to="/addresses/address">{addressState[key].textBody}</MyLink>
        </Menu.Item>
      )
    }

    return arr
  }
  

  return (
    <>
      <SubMenu
        title={<MyLink onClick={changeStateClppaps} to="/tire-fitting">Шиномонтаж</MyLink>}
        icon={iconParams ? <CaretDownOutlined /> : false}
      >
        <Menu.Item>
          <MyLink to="/tire-fitting/passenger-tire-fitting">Легковой шиномонтаж</MyLink>
        </Menu.Item>
        <Menu.Item>
          <MyLink to="/tire-fitting/truck-tire-fitting">Грузовой шиномонтаж</MyLink>
        </Menu.Item>
        <Menu.Item>
          <MyLink to="/tire-fitting/for-legal-entities">
            Шиномонтаж для юридических лиц. Обслуживание автопарков
          </MyLink>
        </Menu.Item>
      </SubMenu>

      <Menu.Item>
        <MyLink to="/tire-fitting/bu-shin-ransom">Выкуп бу Шин</MyLink>
      </Menu.Item>
      <Menu.Item>
        <MyLink to="/tire-fitting/tire-storage">Хранение шин</MyLink>
      </Menu.Item>

      <SubMenu
        title={<MyLink onClick={changeStateClppaps} to="/services">Услуги</MyLink>}
        icon={iconParams ? <CaretDownOutlined /> : false}
      >
        <Menu.Item>
          <MyLink to="/services/argon-welding">Аргоновая сварка</MyLink>
        </Menu.Item>
        <Menu.Item>
          <MyLink to="/services/curing">Вулканизация</MyLink>
        </Menu.Item>
        <Menu.Item>
          <MyLink to="/services/editing-discs">Правка дисков</MyLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        title={<MyLink onClick={changeStateClppaps} to="/contacts">Контакты</MyLink>}
        icon={iconParams ? <CaretDownOutlined /> : false}
      >
        <Menu.Item>
          <MyLink to="/contacts/vacancies">Вакансии</MyLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        title={<MyLink onClick={changeStateClppaps} to="/addresses">Адреса</MyLink>}
        icon={iconParams ? <CaretDownOutlined /> : false}
      >
        {AddressMenuItem()}
      </SubMenu>
    </>
  );
}

export default BlockSecond;
