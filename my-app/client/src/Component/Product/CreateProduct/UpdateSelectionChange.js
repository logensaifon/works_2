import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, message } from "antd";
import { useRouteMatch, Redirect } from "react-router-dom";
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
  ButtonUpdateDischange,
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
  const responseProduct = props.responseProduct;

  const linkProduct = () => {
    let link = "";
    props.selectionLink.map((key) =>
      key !== undefined ? (link += `/${key}`) : null
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

  const requestupdate = async(values) => {
      let veluesFilterObject = await Object.assign(
        {
          categoryPraduct: values.categoryPraduct,
          linkProduct: values.linkProduct,
          model: values.model,
          brand: values.brand,
          discount: values.discount,
          wear: values.wear,
          price: values.price,
          stock: values.stock,
          address: values.address,
          type: values.type,
          width: values.width,
          diameter: values.diameter,
          bestsellerSwitch: values.bestsellerSwitch,
          season: values.season,
          thorns: values.thorns,
          photoUpload: values.photoUpload,
          descriptions: values.descriptions,
          height: values.height,
          articul: values.articul,
          numberOfBoltHoles: values.numberOfBoltHoles,
          discType: values.discType,
          rimWidth: values.rimWidth,
          diameterOfHolesPosition: values.diameterOfHolesPosition,
          departureET: values.departureET,
          hubDIA: values.hubDIA
        }
      )

    return new Promise((resolve, reject) => {
      const jsonStrongiy = JSON.stringify(veluesFilterObject);
      const xhr = new XMLHttpRequest();

  
      const xhronload = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
          message.success("гатов");
          resolve(xhr.response);
        } else {
          message.warning("что то пошло не так");
          reject(xhr.statusText);
        }
      };
  
      xhr.open("put", `${url}`, true);
      xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
      xhr.onload = xhronload;
      xhr.send(jsonStrongiy);
    });
  }
  

  const onFinish = (values) => {

    requestupdate(values).then((result)=>{
      let jsonparse = JSON.parse(result)
      setRedirectstate(jsonparse)
    })
  };

  const SelectionSwitch = () => {
    if (responseProduct.categoryPraduct === "Зимние шины бу"
     || responseProduct.categoryPraduct === "Легкогрузовые шины бу"
     || responseProduct.categoryPraduct === "Грузовые шины бу"
     || responseProduct.categoryPraduct === "Летние шины бу"
     || responseProduct.categoryPraduct === "Мотошины бу") {
    return (
      <>
          <Catogory />
          <LinkProduct />
          <ChreatArticul />
          <Model />
          <Brand />
          <Discount />
          <Wear />
          <Price />
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
          <ButtonUpdateDischange setRedirectstate={setRedirectstate} responseProduct={responseProduct} />
        </>
      );
    } else if (responseProduct.categoryPraduct === "Диски и колеса бу") {
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
          <ButtonUpdateDischange setRedirectstate={setRedirectstate} responseProduct={responseProduct} />
        </>
      );
    } else {
      return null;
    }
  };

  const fields = [
    {
      name: "categoryPraduct",
      value: props.selection[0],
    },
    {
      name: "linkProduct",
      value: linkProduct(),
    },
    {
      name: "diameter",
      value: responseProduct.diameter,
    },
    {
      name: "bestsellerSwitch",
      value: responseProduct.bestsellerSwitch,
    },
    {
      name: "model",
      value: responseProduct.model,
    },
    {
      name: "brand",
      value: responseProduct.brand,
    },
    {
      name: "discount",
      value: responseProduct.discount,
    },
    {
      name: "wear",
      value: responseProduct.wear,
    },
    {
      name: "price",
      value: responseProduct.price,
    },
    {
      name: "stock",
      value: responseProduct.stock,
    },
    {
      name: "type",
      value: responseProduct.type,
    },
    {
      name: "width",
      value: responseProduct.width,
    },
    {
      name: "height",
      value: responseProduct.height,
    },
    {
      name: "season",
      value: responseProduct.season,
    },
    {
      name: "thorns",
      value: responseProduct.thorns,
    },
    {
      name: "photoUpload",
      value: responseProduct.photoUpload,
    },
    {
      name: "address",
      value: responseProduct.address,
    },
    {
      name: "descriptions",
      value: responseProduct.descriptions,
    },
    {
      name: "articul",
      value: responseProduct.articul,
    },
    {
      name: "numberOfBoltHoles",
      value: responseProduct.numberOfBoltHoles,
    },
    {
      name: "discType",
      value: responseProduct.discType,
    },
    {
      name: "rimWidth",
      value: responseProduct.rimWidth,
    },
    {
      name: "diameterOfHolesPosition",
      value: responseProduct.diameterOfHolesPosition,
    },
    {
      name: "departureET",
      value: responseProduct.departureET,
    },
    {
      name: "hubDIA",
      value: responseProduct.hubDIA,
    },
  ];

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      fields={fields}
    >
      <SelectionSwitch />
      {redirectstate.length !== 0 ? (
        <Redirect
          to={`/ShowProduct?product=${redirectstate.linkProduct}&id=${redirectstate._id}`}
        />
      ) : null}
    </Form>
  );
}

export default SelectionChange;
