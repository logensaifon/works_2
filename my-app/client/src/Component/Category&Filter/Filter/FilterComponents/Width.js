import React, { useContext } from "react";
import 'antd/dist/antd.css';
import { Select, Form } from 'antd';
import { FilterContext } from "../../context";

const { Option } = Select;


const Width = ()=> {
  const {productForFilterUseState} = useContext(FilterContext)
  
  const contentData = ()=>{
    if (productForFilterUseState.width && productForFilterUseState.width.length){

      return productForFilterUseState.width.map((index)=><Option key={"key" + index[0]} value={index[0]}>{index[0]}</Option>);
    }
  }
  
  return (
    <Form.Item
      name="width"
      label="Ширина"
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
}


export default Width;