import React, { useContext, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Row, Col } from "antd";
import { AfterFormStyle } from "./AfterFormStyle";
import { AdminContext } from "../../Context";

const httpRequest = (url, body) => {
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();
    const jsonStrogify = JSON.stringify(body);

    const xhronload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {

        let jsonparse = JSON.stringify(xhr.response)
        resolve(jsonparse)
      } else {

        reject(xhr.statusText)
      }
    };

    xhr.open("post", url, true);
    xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
    xhr.onload = xhronload
    xhr.send(jsonStrogify);
  })
}


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const checkAuthentication = (callbackstate) => {
  
  if (localStorage.getItem("lpsData")) {
    let storage = localStorage.getItem("lpsData")
    
    httpRequest("/verific", {lpsData: storage}).then((result)=>{
      
      if (result) {

        callbackstate(true)
      }
    }).catch((error)=>{

      localStorage.removeItem("lpsData")
      callbackstate(false)
    })

  } else {
    callbackstate(false)
  }
}

const AfterForm = () => {
  const { setUserAdmin } = useContext(AdminContext)
  const formRef = useRef()

  
  useEffect(() => {
    checkAuthentication(setUserAdmin)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onFinish = (values) => {


    httpRequest("/user", values).then((result) => {
      if (result) {
        let lps = localStorage.getItem("lpsData")

        if (!lps) {

          localStorage.setItem("lpsData", JSON.parse(result))
          return checkAuthentication(setUserAdmin)
        } else {

          formRef.current.resetFields();
          return checkAuthentication(setUserAdmin)
        }

      } else {
        formRef.current.resetFields();
        setUserAdmin(false)
      }
    }).catch((error)=>{
      
      setUserAdmin(false)
    })
  };

  return (
    <Form
      {...layout}
      name="basic"
      ref={formRef}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          войти
        </Button>
      </Form.Item>
    </Form>
  );
};


function LoginForm() {
  const { setButtAvtorization } = useContext(AdminContext)  
  setTimeout(() => {
    setButtAvtorization(null)
  },0);

  return (
    <Row>
      <Col
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 20 }}
        md={{ span: 16, offset: 4 }}
        lg={{ span: 12, offset: 6 }}
      >
        <AfterFormStyle>
          <AfterForm />
        </AfterFormStyle>
      </Col>
    </Row>
  );
}


export { checkAuthentication }
export default LoginForm;
