import React, { useContext } from "react";
import 'antd/dist/antd.css';
import { Select, Form } from 'antd';
import { FilterContext } from "../../context";

const { Option } = Select;


const NumberOfBoltHoles = ()=> {
  const {productForFilterUseState} = useContext(FilterContext)
  
  const contentData = ()=>{
    if (productForFilterUseState.numberOfBoltHoles && productForFilterUseState.numberOfBoltHoles.length){

      return productForFilterUseState.numberOfBoltHoles.map((index)=><Option key={"key" + index[0]} value={index[0]}>{index[0]}</Option>);
    }
  }

  return (
    <Form.Item
      name="numberOfBoltHoles"
      label="Количество отверстий под болты"
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


export default NumberOfBoltHoles;