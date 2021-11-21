import React, { useContext, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Form, Radio, Button, Upload, Input, Switch, AutoComplete, message } from "antd";
import { useRouteMatch } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { CreateContext } from "./Context";
import { universalRequest } from "../../Admin/ControlLinkMessengers";


const { TextArea } = Input;

const HubDIA = () => {
  return (
    <Form.Item
      name="hubDIA"
      label="Ступица (DIA)"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="цифры" type="number"/>
    </Form.Item>
  );
};

const DepartureET = () => {
  return (
    <Form.Item
      name="departureET"
      label="Вылет (ET)"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="цифры" type="number"/>
    </Form.Item>
  );
};

const DiameterOfHolesPosition = () => {
  return (
    <Form.Item
      name="diameterOfHolesPosition"
      label="Диам. расп. отв."
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="Диаметр расположения отверстий" type="number"/>
    </Form.Item>
  );
};

const RimWidth = () => {
  return (
    <Form.Item
      name="rimWidth"
      label="Ширина обода"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="Ширина" type="number"/>
    </Form.Item>
  );
};

const DiscType = () => {
  const style = {
    background: "white", 
    border: "solid 1px rgb(209, 209, 209)", 
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "3px",
    paddingBottom: "3px",
    color: "black"
  }

  return (
    <Form.Item
      name="discType"
      label="Тип диска"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="категория" style={style} type="string" disabled/>
    </Form.Item>
  );
};

const NumberOfBoltHoles = () => {
  return (
    <Form.Item
      name="numberOfBoltHoles"
      label="Кол. болты"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="Количество отверстий под болты" type="number"/>
    </Form.Item>
  );
};

const ChreatArticul = () => {

  return (
    <Form.Item
      name="articul"
      label="Артикул:"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Input type="string" placeholder="Артикул"/>
    </Form.Item>
  );
};

const Address = () => {
  const [addressState, setAddressState] = useState("")

  useEffect(()=>{
      universalRequest("get", "/Admin/address-contacts").then((result)=>{
          if (result) {
            setAddressState(result)
          }
      })
  }, [])

  const options = () => {

    let arr = [];

    for (const key in addressState) {

      arr.push({value: addressState[key].textBody})
    }

    return arr
  }


  return (
    <Form.Item
      name="address"
      label="адрес"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <AutoComplete
        options={options()}
        placeholder="текст"
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </Form.Item>
  );
};

const Stock = () => {
  return (
    <Form.Item
      className="stock"
      name="stock"
      label="в наличии"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="текст" type="number"/>
    </Form.Item>
  );
};

const Catogory = () => {
  const style = {
    background: "white", 
    border: "solid 1px rgb(209, 209, 209)", 
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "3px",
    paddingBottom: "3px",
    color: "black"
  }

  return (
      <Form.Item
        name="categoryPraduct"
        label="категория"
        rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
      >
        <Input placeholder="категория" style={style} type="string" disabled/>
      </Form.Item>
  );
};

const LinkProduct = () => {
  const style = {
    background: "white", 
    border: "solid 1px rgb(209, 209, 209)", 
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "3px",
    paddingBottom: "3px",
    color: "black"
  }

  return (
    <Form.Item
      name="linkProduct"
      label="ссылка"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="ссылка"  style={style} type="string" disabled/>
    </Form.Item>
  );
};

const Model = () => {
  return (
    <Form.Item
      name="model"
      label="модель"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="текст" type="string"/>
    </Form.Item>
  );
};

const Brand = () => {
  return (
    <Form.Item
      name="brand"
      label="бренд"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
      type={"number"}
    >
      <Input placeholder="текст" type="string"/>
    </Form.Item>
  );
};

const Price = () => {
  return (
    <Form.Item
      className="price"
      name="price"
      label="цена после скидки"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="цена после скидки" type="number"/>
    </Form.Item>
  );
};

const Discount = () => {
  return (
    <Form.Item
      className="discount"
      name="discount"
      label="цена до скидки"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="цена до скидки" type="number"/>
    </Form.Item>
  );
};

const Wear = () => {
  return (
    <Form.Item
      className="wear"
      name="wear"
      label="износ"
      type={"number"}
      rules={[
        {
          required: false,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="текст" type="number"/>
    </Form.Item>
  );
};

const Type = () => {
  return (
    <Form.Item
      name="type"
      label="тип "
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="текст" type="string"/>
    </Form.Item>
  );
};

const Height = () => {
  return (
    <Form.Item
      name="height"
      label="высота"
      rules={[
        {
          required: false,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="текст" type="number"/>
    </Form.Item>
  );
};

const Width = () => {
  return (
    <Form.Item
      name="width"
      label="ширина"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
      type={"number"}
    >
      <Input placeholder="текст" type="number"/>
    </Form.Item>
  );
};

const Diameter = () => {
  return (
    <Form.Item
      name="diameter"
      label="диаметр"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Input placeholder="текст" type="string"/>
    </Form.Item>
  );
};

const BestsellerSwitch = () => {
  const [bestselerCountstate, setBestselerCountstate] = useState("загрузка...")
  universalRequest("get", "/bestsellercount").then((result)=>{
    setBestselerCountstate(result.count)
  })

  return (
    <>
      <Form.Item name="bestsellerSwitch" label="Хиты продаж" valuePropName="checked">
        <Switch checkedChildren="да" unCheckedChildren="нет"></Switch>
      </Form.Item>
      <p style={{marginTop: -35, marginLeft: "25.5%"}}>не более 10 штук, добавлен {bestselerCountstate} штук</p>
    </>
  )
}

const Thorns = () => {
  const style = {
    marginRight: "16px"
  }

  return (
    <Form.Item
      name="thorns"
      label="шипы"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Radio.Group>
        <Radio.Button value="шипованные" style={style}>шипованные</Radio.Button>
        <Radio.Button value="нешипованные" style={style}>нешипованные</Radio.Button>
      </Radio.Group>
    </Form.Item>
  );
};

const Season = () => {
  const style = {
    marginRight: "16px"
  }

  return (
    <Form.Item
      name="season"
      label="сезон"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Radio.Group>
        <Radio.Button value="всесезон" style={style}>всесезон</Radio.Button>
        <Radio.Button value="летний" style={style}>летний</Radio.Button>
        <Radio.Button value="зимний" style={style}>зимний</Radio.Button>
      </Radio.Group>
    </Form.Item>
  );
};

const PhotoUpload = () => {
  const { url } = useRouteMatch();

  const deleteImage = (url, body) => {
    return new Promise((resolve, reject)=>{
      const xhr = new XMLHttpRequest()
      let jsonstringify = JSON.stringify(body)

      const xhrOnload = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
          resolve(xhr.response);
        } else {
          reject(xhr.statusText)
        }
      }
      
      xhr.open("delete", `${url}`, true)
      xhr.setRequestHeader("content-type", "application/json; charset=utf-8")
      xhr.onload = xhrOnload
      xhr.send(jsonstringify)
    })
  }
  
  const deleteFile = (e) => {
    
    if (e && e.response.path) {

      deleteImage("/image/delete", {folder: e.response.destination, file: e.response.filename})
    }
  }

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return  e.fileList
  };

  return (
    <Form.Item
      name="photoUpload"
      label="картинки"
      valuePropName="fileList"
      getValueFromEvent={normFile}
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <Upload
        name="logo"
        action={`${url}/upload.do`}
        enctype="multipart/form-data"
        listType="picture"
        onRemove={deleteFile}
        UploadD
      >
        <Button icon={<UploadOutlined />}>загрузить фото</Button>
      </Upload>
    </Form.Item>
  );
};

const Descriptions = () => {
  return (
    <Form.Item
      name="descriptions"
      label="описания"
      rules={[
        {
          required: true,
          message: "необходимо!",
        },
      ]}
    >
      <TextArea showCount />
    </Form.Item>
  );
};

const ButtonSendDischarge = () => {
  const { setSelection } = useContext(CreateContext)

  const ClichkCancel = () => {
    setSelection("")
  }

  const style = {
    marginRight: "16px",
    marginBottom: "16px"
  }

  return (
    <Form.Item style={{ textAlign: "center" }}>
      <Button type="primary" htmlType="submit" style={style}>
        создать
      </Button>
      <Button type="primary" htmlType="button" onClick={ClichkCancel} style={style}>
        сброс
      </Button>
    </Form.Item>
  );
};

const ButtonUpdateDischange = (props) => {
  const ClichkCancel = () => {
    message.error("отменен");
    props.setRedirectstate(props.responseProduct)
  }

  const style = {
    marginRight: "16px",
    marginBottom: "16px"
  }

  return (
    <Form.Item style={{ textAlign: "center" }}>
      <Button type="primary" htmlType="submit" style={style}>
        сохранить
      </Button>
      <Button type="primary" htmlType="button" onClick={ClichkCancel} style={style}>
        отменить
      </Button>
    </Form.Item>
  );
};

export {
  Catogory,
  LinkProduct,
  Model,
  Brand,
  Discount,
  Wear,
  Price,
  Address,
  Stock,
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
  ButtonUpdateDischange,
  ChreatArticul,
  NumberOfBoltHoles,
  DiscType,
  RimWidth,
  DiameterOfHolesPosition,
  DepartureET,
  HubDIA
};
