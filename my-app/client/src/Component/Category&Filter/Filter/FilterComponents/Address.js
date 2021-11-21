import React, { useContext } from "react";
import 'antd/dist/antd.css';
import { Select, Form } from 'antd';
import { FilterContext } from "../../context";

const { Option } = Select;


const Address = ()=> {
  const {productForFilterUseState} = useContext(FilterContext)
  
  const contentData = ()=>{
    if (productForFilterUseState.address && productForFilterUseState.address.length){

      return productForFilterUseState.address.map((index)=><Option key={"key" + index[0]} value={index[0]}>{index[0]}</Option>);
    }
  }
  
return (
  <Form.Item
    name="address"
    label="Адрес"
  >
    <Select
      mode="multiple"
      allowClear
      placeholder="пожалуйста выберите"
    >
      {contentData()}
    </Select>
  </Form.Item>
)
};


export default Address;