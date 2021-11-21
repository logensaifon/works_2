import React from "react";
import "antd/dist/antd.css";
import { List, Row, Col } from "antd";

const Headerdata = (params) => {
  let data = params.descriptions;

  return [
    [
      <h6 key={"h6_header"}>
        {" "}
        Описание { 
          (data.categoryPraduct === "Диски и колеса бу") ?
          `${data.categoryPraduct} ${data.rimWidth}*${data.diameter} PCD ${data.numberOfBoltHoles}*${data.diameterOfHolesPosition} DIA ${data.hubDIA} ET ${data.departureET}`
          :
          `${data.brand} ${data.width}/${data.height ? data.height + "/" : ""}${data.type} ${data.season}`
        }
      </h6>,
    ],
  ];
};

const ParamsData = (params) => {
  let data = params.descriptions;
  let match = [
    [
      (data.wear) ? 
      [
        <h6 key={"h6_deterioration"}> Износа </h6>,
        <p key={"p_deterioration"}>{data.wear} %</p>,
      ]
      :
      null
    ],
    [<h6 key={"h6_model"}> Модель </h6>, <p key={"p_model"}>{data.model}</p>],
    [<h6 key={"h6_brand"}> Бренд </h6>, <p key={"p_brand"}>{data.brand}</p>],
    [<h6 key={"h6_discType"}> Тип диска </h6>, <p key={"p_discType"}>{data.discType}</p>],
    [
      <h6 key={"h6_calibr"}> Диаметр </h6>,
      <p key={"p_calibr"}>{data.diameter}</p>,
    ],
    [
      <h6 key={"h6_numberOfBoltHoles"}> Количество отверстий под болты </h6>, 
      <p key={"p_numberOfBoltHoles"}>{data.numberOfBoltHoles}</p>],
    [
      <h6 key={"h6_rimWidth"}> Ширина обода </h6>,
      <p key={"p_rimWidth"}>{data.rimWidth}</p>,
    ],
    [<h6 key={"h6_departureET"}> Вылет {"(ET)"} </h6>, <p key={"p_departureET"}>{data.departureET}</p>],
    [
      <h6 key={"h6_diameterOfHolesPosition"}> Диаметр расположения отверстий </h6>, 
      <p key={"p_diameterOfHolesPosition"}>{data.diameterOfHolesPosition}</p>
   ],
    [
      <h6 key={"h6_hubDIA"}> Ступица {"(DIA)"} </h6>, 
      <p key={"p_hubDIA"}>{data.hubDIA}</p>
   ],
  ]
  let notMatch = [
    [
      (data.wear) ? 
      [
        <h6 key={"h6_deterioration"}> Износа </h6>,
        <p key={"p_deterioration"}>{data.wear} %</p>,
      ]
      :
      null
    ],
    [<h6 key={"h6_model"}> Модель </h6>, <p key={"p_model"}>{data.model}</p>],
    [<h6 key={"h6_brand"}> Бренд </h6>, <p key={"p_brand"}>{data.brand}</p>],
    [<h6 key={"h6_season"}> Сезон </h6>, <p key={"p_season"}>{data.season}</p>],
    [
      <h6 key={"h6_calibr"}> Диаметр </h6>,
      <p key={"p_calibr"}>{data.diameter}</p>,
    ],
    [<h6 key={"h6_type"}> Тип </h6>, <p key={"p_type"}>{data.type}</p>],
    [
      (data.height) ? 
      [
        <h6 key={"h6_height"}> Высота </h6>,
        <p key={"p_height"}>{data.height}</p>,
      ]
      :
      null
    ],
    [<h6 key={"h6_width"}> Ширина </h6>, <p key={"p_width"}>{data.width}</p>],
  ]

  return (

    (data.categoryPraduct === "Диски и колеса бу") ? match.filter(index => index[0] !== null) : notMatch.filter(index => index[0] !== null)
  )
};

function Characteristic(props) {
  return (
    <Row>
      <Col md={8} sm={11} xs={24}>
        <List
          dataSource={ParamsData(props)}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Col>
      <Col md={14} sm={{ span: 11, offset: 2 }} xs={24}>
        <Row>
          <Col span={24}>
            <List
              dataSource={Headerdata(props)}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Col>
          <Col span={24}>
            <List
              dataSource={[props.descriptions.descriptions]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Characteristic;
