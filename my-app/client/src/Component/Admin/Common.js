import React, { useCallback, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table, Row, Col } from "antd";
import { Link } from "react-router-dom";
import ControlLinkMessengers from "./ControlLinkMessengers";
import ControlLinkAddress from "./ControlLinkAddress";

const { Column, ColumnGroup } = Table;



function Common() {
  const [winterTires, setWinterTires] = useState(false);
  const [lightTruckTires, setLightTruckTires] = useState(false);
  const [truckTires, setTruckTires] = useState(false);
  const [discsAndWheels, setDiscsAndWheels] = useState(false);
  const [summerTires, setSummerTires] = useState(false);
  const [motorcycleTires, setMotorcycleTires] = useState(false);
  let cleanupFunction = true
  
  const GetRequest = useCallback((paramsUrl) => {
    return new Promise((resolve, reject)=>{
  
      const xhr = new XMLHttpRequest();
    
      const xhronload = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
  
          const jsonparse = JSON.parse(xhr.response);
          resolve(jsonparse)
        } else {
  
          reject(xhr.statusText)
        }
      }
      
      xhr.open("get", paramsUrl, true);
      xhr.onload = xhronload;
      xhr.send();
    })
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winterTires.data])

  useEffect(() => {
    GetRequest(`commoncount?catalog=/wintertires`).then((result)=>{
      if (cleanupFunction)
      setWinterTires(result)
    }).catch((err)=>{console.error(err);})
    GetRequest(`commoncount?catalog=/lighttrucktires`).then((result)=>{
      if (cleanupFunction)
      setLightTruckTires(result)
    }).catch((err)=>{console.error(err);})
    GetRequest(`commoncount?catalog=/trucktires`).then((result)=>{
      if (cleanupFunction)
      setTruckTires(result)
    }).catch((err)=>{console.error(err);})
    GetRequest(`commoncount?catalog=/discsandwheels`).then((result)=>{
      if (cleanupFunction)
      setDiscsAndWheels(result)
    }).catch((err)=>{console.error(err);})
    GetRequest(`commoncount?catalog=/summertires`).then((result)=>{
      if (cleanupFunction)
      setSummerTires(result)
    }).catch((err)=>{console.error(err);})
    GetRequest(`commoncount?catalog=/motorcycletires`).then((result)=>{
      if (cleanupFunction)
      setMotorcycleTires(result)
    }).catch((err)=>{console.error(err);})

    return ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanupFunction = false
    }
  }, []);
  
  const tableLIst = [
    {
      categoryName: [
        <Link
          key={"AllSumProduct/Category/WinterTires"}
          to={"/category/WinterTires"}
        >
          Зимние шины бу
        </Link>,
      ],
      quantity: winterTires ? winterTires.count : "загрузка...",
      key: "allSumProduct/Category/WinterTires",
    },
    {
      categoryName: [
        <Link
          key={"AllSumProduct/Category/LightTruckTires"}
          to={"/category/LightTruckTires"}
        >
          Легкогрузовые шины бу
        </Link>,
      ],
      quantity: lightTruckTires ? lightTruckTires.count : "загрузка...",
      key: "allSumProduct/Category/LightTruckTires",
    },
    {
      categoryName: [
        <Link
          key={"AllSumProduct/Category/TruckTires"}
          to={"/category/TruckTires"}
        >
          Грузовые шины бу
        </Link>,
      ],
      quantity: truckTires ? truckTires.count : "загрузка...",
      key: "allSumProduct/Category/TruckTires",
    },
    {
      categoryName: [
        <Link
          key={"AllSumProduct/Category/DiscsAndWheels"}
          to={"/category/DiscsAndWheels"}
        >
          Диски и колеса бу
        </Link>,
      ],
      quantity: discsAndWheels ? discsAndWheels.count : "загрузка...",
      key: "allSumProduct/Category/DiscsAndWheels",
    },
    {
      categoryName: [
        <Link
          key={"AllSumProduct/Category/SummerTires"}
          to={"/category/SummerTires"}
        >
          Летние шины бу
        </Link>,
      ],
      quantity: summerTires ? summerTires.count : "загрузка...",
      key: "allSumProduct/Category/SummerTires",
    },
    {
      categoryName: [
        <Link
          key={"AllSumProduct/Category/MotorcycleTires"}
          to={"/category/MotorcycleTires"}
        >
          Мотошины бу
        </Link>,
      ],
      quantity: motorcycleTires ? motorcycleTires.count : "загрузка...",
      key: "allSumProduct/Category/MotorcycleTires",
    },
  ];


  const addressLIst = [
    {
      link: <ControlLinkAddress />,
      key: "addressLink",
    }
  ]

  const messengersLIst = [
    {
      named: [
        "электронная почта"
      ],
      link: <ControlLinkMessengers massengerName={"email"} unique={"emailLink"}/>,
      key: "emailLink",
    },
    {
      named: [
         "телефон"
      ],
      link: <ControlLinkMessengers massengerName={"phone"} unique={"phoneLink"}/>,
      key: "phoneLink",
    },
    {
      named: [
        "Telegram"
      ],
      
      link: <ControlLinkMessengers massengerName={"telegram"} unique={"Telegram"}/>,
      key: "Telegram",
    },
    {
      named: [
        "Whatsapp"
      ],
      link: <ControlLinkMessengers massengerName={"whatsapp"} unique={"Whatsapp"}/>,
      key: "Whatsapp",
    },
    {
      named: [
         "Viber"
      ],
      link: <ControlLinkMessengers massengerName={"viber"} unique={"Viber"}/>,
      key: "Viber",
    },
    {
      named: [
         "Vk"
      ],
      link: <ControlLinkMessengers massengerName={"vk"} unique={"Vk"}/>,
      key: "Vk",
    },
    {
      named: [
         "Instagram"
      ],
      link: <ControlLinkMessengers massengerName={"instagram"} unique={"Instagram"}/>,
      key: "Instagram",
    },
    {
      named: [
         "Odnoklassniki"
      ],
      link: <ControlLinkMessengers massengerName={"odnoklassniki"} unique={"Odnoklassniki"}/>,
      key: "Odnoklassniki",
    },
    {
      named: [
         "Facebook"
      ],
      link: <ControlLinkMessengers massengerName={"facebook"} unique={"Facebook"}/>,
      key: "Facebook",
    },
    {
      named: [
         "Twitter"
      ],
      link: <ControlLinkMessengers massengerName={"twitter"} unique={"Twitter"}/>,
      key: "Twitter",
    },
  ];

  return ( 
    <Row gutter={[0, 32]}>
      <Col span={24}>
        <Table dataSource={tableLIst} pagination={false} size="small">
          <ColumnGroup title="все товары">
            <Column title="категория" dataIndex="categoryName" key="categoryName" />
            <Column title="количество шт." dataIndex="quantity" key="quantity" />
          </ColumnGroup>
        </Table>
      </Col>
      <Col span={24}>
        <Table dataSource={addressLIst} pagination={false} size="small">
          <ColumnGroup title="все адреса">
            <Column dataIndex="link" key="link" />
          </ColumnGroup>
        </Table>
        <Table dataSource={messengersLIst} pagination={false} size="small">
          <ColumnGroup title="соцсети  мессенджеры">
            <Column title="название" dataIndex="named" key="named" />
            <Column title="ссылка." dataIndex="link" key="link" />
          </ColumnGroup>
        </Table>
      </Col>
    </Row>
  )
}

export default Common;
