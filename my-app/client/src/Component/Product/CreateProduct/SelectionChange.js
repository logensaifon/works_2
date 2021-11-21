import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, message } from "antd";
import { Redirect, useRouteMatch } from "react-router-dom";
import {
  Catogory,
  LinkProduct,
  Model,
  Brand,
  Discount,
  Wear,
  Price,
  Stock,
  Address,
  Type,
  Height,
  Width,
  Diameter,
  BestsellerSwitch,
  Season,
  Thorns,
  PhotoUpload,
  Descriptions,
  ButtonSendDischarge,
  ChreatArticul,
  NumberOfBoltHoles,
  DiscType,
  RimWidth,
  DiameterOfHolesPosition,
  DepartureET,
  HubDIA
} from "./SelectionComponents";

function SelectionChange(props) {
  const { url } = useRouteMatch();
  const [redirectstate, setRedirectstate] = useState([]);

  const linkProduct = () => {
    let link = "";

    props.selectionLink.map((key) =>
      key !== "undefined" ? (link += `/${key}`) : null
    );

    return link;
  };

  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const onFinish = (values) => {

    const jsonStrongiy = JSON.stringify(values);

    const xhr = new XMLHttpRequest();
    xhr.open("post", `${url}/addProduct`, true);
    xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
    xhr.send(jsonStrongiy);
    xhr.onload = async () => {
      if (xhr.status === 200) {
        message.success("гатов");
        let jsonparse = JSON.parse(xhr.response);

        setRedirectstate([jsonparse.linkProduct, jsonparse._id]);
      } else {
        console.error(xhr.response);
        message.warning("что то пошло не так");
      }
    };
  };

  const SelectionSwitch = () => {
    if (props.selection[0] === "Зимние шины бу"
     || props.selection[0] === "Легкогрузовые шины бу"
     || props.selection[0] === "Грузовые шины бу"
     || props.selection[0] === "Летние шины бу"
     || props.selection[0] === "Мотошины бу") {
      return (
        <>
          <Catogory />
          <LinkProduct />
          <ChreatArticul />
          <Model />
          <Brand />
          <Discount />
          <Price />
          <Wear />
          <Stock />
          <Address />
          <Type />
          <Height />
          <Width />
          <Diameter />
          <BestsellerSwitch />
          <Season />
          <Thorns />
          <PhotoUpload />
          <Descriptions />
          <ButtonSendDischarge />
        </>
      );
    } else if (props.selection[0] === "Диски и колеса бу") {
      return (
        <>
          <Catogory />
          <LinkProduct />
          <ChreatArticul />
          <Diameter />
          <Discount />
          <Price />
          <Stock />
          <Address />
          <Wear />
          <Model />
          <Brand />
          <NumberOfBoltHoles />
          <DiscType />
          <RimWidth />
          <DiameterOfHolesPosition />
          <DepartureET />
          <HubDIA />
          <BestsellerSwitch />
          <PhotoUpload />
          <Descriptions />
          <ButtonSendDischarge />
        </>
      );
    } else {
      return null;
    }
  };

  const fields = [
    {
      name: "categoryPraduct",
      value: `${props.selection[0]}`,
    },
    {
      name: "linkProduct",
      value: linkProduct(),
    },
    {
      name: "diameter",
      value: (props.selection[0] === "Диски и колеса бу") ? "R" : `${props.selection[1]}`,
    },
    {
      name: "discType",
      value: `${props.selection[1]}`,
    },
  ];

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      fields={fields}
      initialValues={{
        "bestsellerSwitch": false
      }}
    >
      <SelectionSwitch />
      {redirectstate.length !== 0 ? (
        <Redirect
          to={`/ShowProduct?product=${redirectstate[0]}&id=${redirectstate[1]}`}
        />
      ) : null}
    </Form>
  );
}

export default SelectionChange;
