import React, { useState, useContext } from "react";
import "antd/dist/antd.css";
import { Row, Col, Cascader } from "antd";
import ProduCtategory from "../../PopularCategories/ProductCategoryList";
import SelectionChange from "./SelectionChange"
import { CreateContext } from "./Context"

const WidthHeightType = (params) => {
  let arr = [];

  for (const key in params) {
    arr.push({
      value: params[key],
      label: params[key],
    });
  }

  return arr;
};

const Radius = (params) => {
  let arr = [];

  for (const key in params) {
    if (typeof params[key] !== "object") {
      arr.push({
        value: params[key],
        label: params[key],
      });
    } else {
      arr.push({
        value: params[key][0],
        label: params[key][0],
        children: WidthHeightType(params[key][1]),
      });
    }
  }

  return arr;
};

const linkPart_1 = () => {
  let arr = [];

  for (const key in ProduCtategory) {
    let ProduCtategoryKey = ProduCtategory[key];

    for (const key_2 in ProduCtategoryKey) {
      if (key_2 === "1") {
        arr.push({
          value: ProduCtategoryKey[1],
          label: ProduCtategoryKey[1],
          children: Radius(ProduCtategoryKey[2]),
        });
      }
    }
  }

  return arr;
};

function SelectionCategory() {
  const { selection, setSelection } = useContext(CreateContext);
  const [selectionLink, setSelectionLink] = useState([]);
  
  const onChange = (value) => {
    let linkPart_1;
    let linkPart_2;
    let linkPart_3;

    switch (value[0]) {
      case "Зимние шины бу":
        linkPart_1 = "WinterTires";
        break;

      case "Легкогрузовые шины бу":
        linkPart_1 = "LightTruckTires";
        break;

      case "Грузовые шины бу":
        linkPart_1 = "TruckTires";
        break;

      case "Диски и колеса бу":
        linkPart_1 = "DiscsAndWheels";
        break;

      case "Летние шины бу":
        linkPart_1 = "SummerTires";
        break;

      case "Мотошины бу":
        linkPart_1 = "MotorcycleTires";
        break;

      default:
        break;
    }

    switch (value[1]) {
      case "Литые":
        linkPart_2 = "AlloyWheels";
        break;
      case "Штампованные":
        linkPart_2 = "Stamped";
        break;

      default:
        linkPart_2 = `${value[1]}`;
        break;
    }

    switch (value[2]) {
      case "Литые":
        linkPart_3 = "AlloyWheels";
        break;
      case "Штампованные":
        linkPart_3 = "Stamped";
        break;
      case "На Matiz":
        linkPart_3 = "onMatiz";
        break;
      case "Шины на УАЗ":
        linkPart_3 = "TiresForUAZ";
        break;
      case "на Ниву":
        linkPart_3 = "ToTheNiva";
        break;

      default:
        linkPart_3 = `${value[2]}`;
        break;
    }

    if (linkPart_1) {
      setSelection([value[0], value[1], value[2]]);
      setSelectionLink([linkPart_1, linkPart_2, linkPart_3]);
    }
  };

  
  return (
    <Row gutter={[0, 16]}>
      <Col span={24} style={{textAlign: "center"}}>
        <Cascader
          allowClear={false}
          value={selection}
          style={{width: "67%"}}
          placeholder="выберите"
          options={linkPart_1()}
          onChange={onChange}
        />
      </Col>
      <Col span={24}>
        <SelectionChange selection={selection} selectionLink={selectionLink}/>
      </Col>
    </Row>
  );
}

export default SelectionCategory;
