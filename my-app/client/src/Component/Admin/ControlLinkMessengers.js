import React, { useEffect, useState, createRef } from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, message } from 'antd';
import { IconAiOutlineCheck, IconAiOutlineClose } from "./ikon";

const universalRequest = (method, url, body) => {
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();
    let jsonstringify = JSON.stringify(body)
  
    const xhronload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {

        if (xhr.response) {
          let jsonparse = JSON.parse(xhr.response);
          resolve(jsonparse)

        } else {
          resolve(xhr.response)
        }

      } else {

        reject(xhr.statusText)
      }
    }

    xhr.open(method, url, true)
    xhr.setRequestHeader("content-type", "application/json; charset=utf-8")
    xhr.onload = xhronload;
    xhr.send(jsonstringify);
  })
}

function ControlLinkMessengers(props) {
  let unique = props.unique
  const [getContentState, setGetContentState] = useState("")
  let massengerName = props.massengerName
  const formRef = createRef()
  let cleanupFunction = true

  
  useEffect(()=>{
    universalRequest("get", `/admin/massengers-contacts/${massengerName}`).then(async(result)=>{
      
      if (cleanupFunction)
      setGetContentState(result.textBody)
    })

    return ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanupFunction = false
    }
  }, [])

    const onFinish = (values) => {
      let sendObject = {
        massengerName: massengerName,
        textBody: values.textBody
      }

      universalRequest("post", "/admin/massengers-contacts", sendObject).then((result)=>{

        if (cleanupFunction)
        if (result === true && !Array.isArray(result)) {

          message.warning("сначала удалите а потом создайте новый")
        } else{

          message.success("всё прошел успешно")
        }
      })
    };
    
    const deleteLink = () => {
      universalRequest("delete", `/admin/massengers-contacts/${massengerName}`).then((result)=>{

        message.success("удалён")
        formRef.current.resetFields()
      })
    };

    let fields = [
      {
        name: "textBody",
        value: getContentState,
      }
    ]

    return (
        <Form
        ref={formRef}
        fields={fields}
        layout="inline"
        name={"messangers"}
        id={unique}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          style={{width: '65%'}}
          name="textBody"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input key={unique} id={`input${unique}`}/>
        </Form.Item>
  
  
        <Form.Item >
          <Button style={{color: "#1890ff", border: "solid 1px #1890ff"}}  htmlType="submit">
            <IconAiOutlineCheck/>
          </Button>
        </Form.Item>
        <Form.Item >
          <Button style={{color: "red", border: "solid 1px red"}} onClick={deleteLink}>
            <IconAiOutlineClose/>
          </Button>
        </Form.Item>
      </Form>
    )
}


export { universalRequest }
export default ControlLinkMessengers
