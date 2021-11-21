import React, { useEffect, useState, createRef } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, message, Row, Col } from "antd";
import { IconAiOutlineCheck, IconAiOutlineClose } from "./ikon";
import { universalRequest } from "./ControlLinkMessengers";
import { Link } from "react-router-dom";


function ControlLinkAddress() {
  let unique = "addressLink";
  const [getContentState, setGetContentState] = useState("");
  let massengerName = "address";
  const formRef = createRef();
  let cleanupFunction = true

  useEffect(() => {
    universalRequest("get", `/admin/address-contacts`).then(async (result) => {
      if (cleanupFunction)
      setGetContentState(result);
    });

    return ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanupFunction = false
    }
  }, []);

  const onFinish = (values) => {
    let sendObject = {
      massengerName: massengerName,
      textBody: values.textBody,
      geoData: values.geoData,
    };

    universalRequest("post", "/admin/address-contacts", sendObject).then((result)=>{
      if (cleanupFunction)
      if (result === true && !Array.isArray(result)) {

        message.warning("сначала удалите а потом создайте новый")
      } else{

        message.success("всё прошел успешно")
      }
    })

      universalRequest("get", `/admin/address-contacts`).then(async(result)=>{
        if (cleanupFunction)
        setGetContentState(result)
     })

     formRef.current.resetFields()
  };

  const deleteLink = (id) => {
    universalRequest("delete", `/admin/address-contacts/${id}`).then(
      (result) => {
        message.success("удалён");
      }
    );
    universalRequest("get", `/admin/address-contacts`).then(async (result) => {
      setGetContentState(result);
    });
  };

  const AllAddress = () => {
    let arr = [];

    for (const key in getContentState) {
      arr.push(
        <Row gutter={[16, 16]} key={`row${getContentState[key].textBody}`}>
          <Col span={24}>
            <Input
              value={getContentState[key].textBody}
              style={{ width: "76%" }}
            />
            <Button
              style={{
                color: "red",
                border: "solid 1px red",
                marginLeft: "16px",
              }}
              onClick={() => deleteLink(getContentState[key]._id)}
            >
              <IconAiOutlineClose />
            </Button>
          </Col>
        </Row>
      );
    }

    return arr;
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  };

  const AddFormAddress = () => {
    return (
      <Row
        style={{ border: "solid 1px #d9d9d9", marginTop: 25, paddingTop: 10 }}
      >
        <Col span={21} offset={1}>
          <h6 style={{ textAlign: "center" }}>добавить адрес</h6>
        </Col>
        <Col span={20} offset={2}>
          <Form
            {...formItemLayout}
            ref={formRef}
            layout="horizontal"
            name={"messangers"}
            id={unique}
            initialValues={{
              remember: true,
            }}
            style={{ display: "unset" }}
            onFinish={onFinish}
          >
            <Row gutter={[16, 16]}>
              <Col span={23} offset={1}>
                <Form.Item
                  style={{marginBottom: 0}}
                  name="textBody"
                  label="адрес"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address!",
                    },
                  ]}
                >
                  <Input
                    id={`inputAdd_${unique}`}
                    placeholder="напишите адрес"
                  />
                </Form.Item>
              </Col>

              <Col span={23} offset={1}>
                <Form.Item
                  style={{marginBottom: 0}}
                  name="geoData"
                  label="геоданные"
                  rules={[
                    {
                      required: true,
                      message: "Please input your geoData!",
                    },
                  ]}
                >
                  <Input
                    id={`inputAdd_${unique}_geoData`}
                    placeholder="долготы и широта, 50.1111, 40.2222"
                  />
                </Form.Item>
              </Col>
              <Col  span={24}>
                <strong>
                  сделайте поиск адрес на яндекс или гугл карте копируйте с помощью правый кнопка мышки геодани пример {"(50.111111, 40.222222)"} и поставите раздел геодани, если не поставить геодани или поставить не правильно то на карте не будет метка с адресой {" -> "}
                  <Link to="/addresses/address">карта и адрес</Link>
                </strong>
              </Col>
              <Col span={8} offset={4}>
                <Form.Item>
                  <Button
                    style={{ color: "#1890ff", border: "solid 1px #1890ff" }}
                    htmlType="submit"
                  >
                    <IconAiOutlineCheck />
                  </Button>
                </Form.Item>
              </Col>
              <Col span={9} offset={2}>
                <Form.Item>
                  <Button
                    style={{ color: "red", border: "solid 1px red" }}
                    onClick={() => formRef.current.resetFields()}
                  >
                    <IconAiOutlineClose />
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  };

  return (
    <Row>
      <Col span={24}>
        <AllAddress />
      </Col>
      <Col span={24}>
        <AddFormAddress />
      </Col>
    </Row>
  );
}

export default ControlLinkAddress;
