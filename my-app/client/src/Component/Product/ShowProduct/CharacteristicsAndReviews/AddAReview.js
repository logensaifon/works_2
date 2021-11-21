import React, { createRef } from "react";
import "antd/dist/antd.css";
import { Form, Input, Rate, Button, message } from "antd";
import { AddAReviewStyle } from "./AddAReviewStyle";



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: "${label} необходимо!",
    types: {
      string: "${label} не действительно!",
      email: "${label} не действительно!",
    },

};
/* eslint-disable no-template-curly-in-string */

const callbackTwoDigitNumber = (params) => {
  if (params < 9) {
    let number = `0${params}`
    return number

  } else {

    return params
  }
}


function AddAReview(props) {
  const productUsed = props.productUsed
  const formRef = createRef()
  const date = new Date()
  const commentdate = `${callbackTwoDigitNumber(date.getHours())}:${callbackTwoDigitNumber(date.getMinutes())}, ${callbackTwoDigitNumber(date.getDay())}/${callbackTwoDigitNumber(date.getMonth())}/${date.getFullYear()}` 
  
  const onFinish = async(values) => {
    let CommentValues = await Object.assign({
      appraisal: values.user.appraisal,
      comment: values.user.comment,
      email: values.user.email,
      name: values.user.name,
      date: commentdate,
      productId: productUsed._id,
      productLinkProduct: productUsed.linkProduct
    })
    
    const xhr = new XMLHttpRequest()

    const jsonstringify = JSON.stringify(CommentValues)

    const onload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {

        if (xhr.response === "true") {
          message.error("Вы уже оставили отзыв вам надо дождаться подтверждения на вашей отзыв, или вы можете оставить отзыв на другую товар");
        } else {
          formRef.current.resetFields();
          message.success("отправлен");
        }
      } else {
        console.error(xhr.statusText)
      }
    }

    xhr.open("post", "/addcomment", true)
    xhr.setRequestHeader("content-type", "application/json; charset=utf-8")
    xhr.onload = onload
    xhr.send(jsonstringify)
  };

  return (
      <AddAReviewStyle>
        <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        ref={formRef}
        >
            <Form.Item
                name={["user", "name"]}
                label="имя"
                rules={[
                {
										type: "string",
                    required: true,
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={["user", "email"]}
                label="эл. адрес"
                rules={[
                {
                    type: "email",
                    required: true,
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={["user", "appraisal"]}
                label="оценка"
                rules={[
                {
                    type: "number",
                    required: true,
                },
                ]}
            >
                <Rate style={{float: "none"}}/>
            </Form.Item>
            <Form.Item 
            name={["user", "comment"]} 
            label="отзыв"                 
            rules={[
                {
                    required: true,
                },
                ]}>
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                отправить
                </Button>
            </Form.Item>
            <h6>Ваш отзыв появится на сайте после проверки.</h6>
        </Form>
    </AddAReviewStyle>
  );
}

export default AddAReview;
