import React, { useContext, useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, message, Row, Col, Radio } from "antd";
import { ProductContext } from "../../Context";
import { basketReadLocalStoragValue } from "../../Basket/Basket";

const { Option } = Select;

const postRequest = (url, body) => {
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest()
    const jsponstringify = JSON.stringify(body)

    const xhrOnload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    }
    
    xhr.open("post", url, true)
    xhr.setRequestHeader("content-type", "application/json; charset=utf-8")
    xhr.onload = xhrOnload
    xhr.send(jsponstringify)
  })
}


const provinceData = [
 'Амурская область',
 'Архангельская область',
 'Астраханская область',
 'Белгородская область',
 'Брянская область',
 'Челябинская область',
 'Иркутская область',
 'Ивановская область',
 'Калининградская область',
 'Калужская область',
 'Кемеровская область — Кузбасс',
 'Кировская область',
 'Костромская область',
 'Курганская область',
 'Курская область',
 'Ленинградская областьПетербург)',
 'Липецкая область',
 'Магаданская область',
 'Московская область',
 'Мурманская область',
 'Нижегородская областьНовгород)',
 'Новгородская областьНовгород)',
 'Новосибирская область',
 'Омская область',
 'Оренбургская область',
 'Орловская область',
 'Пензенская область',
 'Псковская область',
 'Ростовская областьна-Дону)',
 'Рязанская область',
 'Сахалинская областьСахалинск)',
 'Самарская область',
 'Саратовская область',
 'Смоленская область',
 'Свердловская область',
 'Тамбовская область',
 'Томская область',
 'Тверская область',
 'Тульская область',
 'Тюменская область',
 'Ульяновская область',
 'Владимирская область',
 'Волгоградская область',
 'Вологодская область',
 'Воронежская область',
 'Ярославская область',
  ];

const layout = {
  labelCol: {
    xs: {span: 23,offset: 1},
    sm: {span: 8,offset: 1}
  },
  wrapperCol: {
    xs: {span: 23,offset: 1},
    sm: {span: 14,offset: 1}
  },
};

const callbackTwoDigitNumber = (params) => {
  if (params < 9) {
    let number = `0${params}`
    return number

  } else {

    return params
  }
}

function FormSendingUserData() {
  const {orderData, setOrderData, setAddBasketstate} = useContext(ProductContext)
  const [wayOfGettingButtonstate, setWayOfGettingButtonstate] = useState(null)
  const formRef = React.createRef()

  const onFinish = (values) => {
    const date = new Date()
    const orderDate = `${callbackTwoDigitNumber(date.getHours())}:${callbackTwoDigitNumber(date.getMinutes())}, ${callbackTwoDigitNumber(date.getDate())}/${callbackTwoDigitNumber(date.getMonth() + 1)}/${date.getFullYear()}`
    const mydata = values
    const phone = "7" + values.phone
    mydata.orderProduct = orderData
    mydata.date = orderDate
    mydata.phone = +phone

    postRequest("/order", mydata).then((result)=>{message.success(result)})    
    formRef.current.resetFields()
    localStorage.removeItem("basket")
    setOrderData([])
    setAddBasketstate(basketReadLocalStoragValue("basket"))
    window.scrollTo(0, 200);
  };

  const ButtonWayOfGetting = (params) => {
    if (params === "pickup") {
      
      setWayOfGettingButtonstate("pickup")
    } else if ("delivery") {

      setWayOfGettingButtonstate("delivery")
    }
  }
  

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      ref={formRef}
    >
      <Form.Item
        name={"fullName"}
        label="полное имя"
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <Input placeholder="имя фамилия отчество"/>
      </Form.Item>
      <Form.Item
        name={"phone"}
        label="Телефон"
        rules={[
          {
            required: true,
            validator: (_, value) => 
              isNaN(+value) !== true ? Promise.resolve(
                +value.length === 10 ? Promise.resolve() : Promise.reject(new Error("номер должен быть не меньше не больше 11 цифра"))
              ) : Promise.reject(new Error("номер не правлено"))
          },
        ]}
      >
        <Input placeholder="111 222 33 44" addonBefore={"+7"}/>
      </Form.Item>
      <Form.Item
        name={"wayOfGetting"}
        label="способ получение"
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <Radio.Group>
          <Radio.Button value="pickup" onClick={(e)=> ButtonWayOfGetting("pickup")}>самовывоз</Radio.Button>
          <Radio.Button value="delivery" onClick={(e)=> ButtonWayOfGetting("delivery")}>доставка</Radio.Button>
        </Radio.Group>
      </Form.Item>
      {
        (wayOfGettingButtonstate === "delivery") ?
        [
          <Form.Item
            name={"region"}
            label="Регион"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="нажмите и выберите облс">
            {provinceData.map(province => (<Option key={province}>{province}</Option>))}
          </Select>
          </Form.Item>,
          <Form.Item
            name={"city"}
            label="Город"
            rules={[
              {
                required: true,
                type: "string",
              },
            ]}
          >
            <Input placeholder="напишите названия города"/>
          </Form.Item>,
          <Form.Item
            name={"address"}
            label="адрес"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="напишите адрес, улица, дом"/>
          </Form.Item>,
          <Form.Item wrapperCol={{xs: {span: 23, offset: 1 }, md: {span: 20, offset: 4 } }}>
            <strong>после оформления наш сотрудник свяжется с вами для уточнения выбора товара и доставки</strong>
          </Form.Item>
        ]
        :
        (wayOfGettingButtonstate === "pickup")  ?
        <Form.Item wrapperCol={{xs: {span: 23, offset: 1 }, md: {span: 20, offset: 4 } }}>
          <strong>сохраните чек, после оплаты, чтобы показать при получении покупки</strong>
        </Form.Item>
        :
        null
      }
      <Form.Item>
        <Row>
          <Col xs={{offset: 8}} md={{offset: 14}}>
            <Button type="primary" htmlType="submit">
              оформить
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
}

export default FormSendingUserData;
