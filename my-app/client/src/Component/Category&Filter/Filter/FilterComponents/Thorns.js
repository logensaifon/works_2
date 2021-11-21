import React from "react";
import "antd/dist/antd.css";
import { Form } from "antd";
import { Checkbox } from "antd";


function Thorns() {
  return (
    <Form.Item
      name="thorns"
      lable="Шипы"
    >
      <Checkbox>шипованные</Checkbox>
    </Form.Item>
  );
}

export default Thorns;
