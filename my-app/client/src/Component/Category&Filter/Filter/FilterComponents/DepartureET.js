import React, { useContext } from "react";
import 'antd/dist/antd.css';
import { Select, Form } from 'antd';
import { FilterContext } from "../../context";

const { Option } = Select;


const DepartureET = ()=> {
  const {productForFilterUseState} = useContext(FilterContext)
  
  const contentData = ()=>{
    if (productForFilterUseState.departureET && productForFilterUseState.departureET.length){

      return productForFilterUseState.departureET.map((index)=><Option key={"key" + index[0]} value={index[0]}>{index[0]}</Option>);
    }
  }
  
  return (
    <Form.Item
      name="departureET"
      label="Вылет (ET)"
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


export default DepartureET;