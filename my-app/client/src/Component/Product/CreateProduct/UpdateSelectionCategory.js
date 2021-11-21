import React, { useState, useContext, useEffect } from "react";
import "antd/dist/antd.css";
import { Row, Col, Cascader } from "antd";
import ProduCtategory from "../../PopularCategories/ProductCategoryList";
import UpdateSelectionChange from "./UpdateSelectionChange";
import { CreateContext } from "./Context";

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

const requestid = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    const xhronload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.open("get", url, true);
    xhr.onload = xhronload;
    xhr.send();
  });
};

function UpdateSelectionCategory(props) {
  const { selection, setSelection } = useContext(CreateContext);
  const [selectionLink, setSelectionLink] = useState([]);
  const [responseProductState, setResponseProductState] = useState(null);
  let cleanupFunction = true

  useEffect(() => {
    requestid(props.productid).then((result) => {
      if (cleanupFunction) {

        let jsonParse = JSON.parse(result);
        setResponseProductState(jsonParse);
        callDefaultValue(jsonParse.linkProduct);
      }
    });

    
    return ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanupFunction = false
    }
  }, [props.productid]);

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

  const callDefaultValue = (params) => {
    const value = params.slice(1).split("/");
    let linkPart_1;
    let linkPart_2;
    let linkPart_3;

    switch (value[0]) {
      case "WinterTires":
        linkPart_1 = "Зимние шины бу";
        break;

      case "LightTruckTires":
        linkPart_1 = "Легкогрузовые шины бу";
        break;

      case "TruckTires":
        linkPart_1 = "Грузовые шины бу";
        break;

      case "DiscsAndWheels":
        linkPart_1 = "Диски и колеса бу";
        break;

      case "SummerTires":
        linkPart_1 = "Летние шины бу";
        break;

      case "MotorcycleTires":
        linkPart_1 = "Мотошины бу";
        break;

      default:
        break;
    }

    switch (value[1]) {
      case "AlloyWheels":
        linkPart_2 = "Литые";
        break;
      case "Stamped":
        linkPart_2 = "Штампованные";
        break;

      default:
        linkPart_2 = `${value[1]}`;
        break;
    }

    switch (value[2]) {
      case "AlloyWheels":
        linkPart_3 = "Литые";
        break;
      case "Stamped":
        linkPart_3 = "Штампованные";
        break;
      case "onMatiz":
        linkPart_3 = "На Matiz";
        break;
      case "TiresForUAZ":
        linkPart_3 = "Шины на УАЗ";
        break;
      case "ToTheNiva":
        linkPart_3 = "на Ниву";
        break;

      default:
        linkPart_3 = `${value[2]}`;
        break;
    }

    if (linkPart_1) {
      setSelection([linkPart_1, linkPart_2, linkPart_3]);
      setSelectionLink([value[0], value[1], value[2]]);
    }
  };

  if (responseProductState && responseProductState !== "" && selectionLink.length !== 0) {
    return (
      <Row gutter={[0, 16]}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Cascader
            allowClear={false}
            value={selection}
            style={{ width: "67%" }}
            placeholder="выберите"
            options={linkPart_1()}
            onChange={onChange}
            defaultValue={selectionLink}
          />
        </Col>
        <Col span={24}>
          <UpdateSelectionChange
            selection={selection}
            selectionLink={selectionLink}
            responseProduct={responseProductState}
          />
        </Col>
      </Row>
    );
  } else {
    return (
      <Row gutter={[0, 16]}>
        <Col span={24} style={{ textAlign: "center" }}>
          загрузка...
        </Col>
      </Row>
    );
  }
}

export default UpdateSelectionCategory;
