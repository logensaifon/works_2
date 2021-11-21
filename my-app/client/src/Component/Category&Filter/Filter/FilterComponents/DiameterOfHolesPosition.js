import React, { useContext } from "react";
import 'antd/dist/antd.css';
import { Select, Form } from 'antd';
import { FilterContext } from "../../context";

const { Option } = Select;


const DiameterOfHolesPosition = ()=> {
  const {productForFilterUseState} = useContext(FilterContext)
  
  const contentData = ()=>{
    if (productForFilterUseState.diameterOfHolesPosition && productForFilterUseState.diameterOfHolesPosition.length){

      return productForFilterUseState.diameterOfHolesPosition.map((index)=><Option key={"key" + index[0]} value={index[0]}>{index[0]}</Option>);
    }
  }
  
  return (
    <Form.Item
      name="diameterOfHolesPosition"
      label="Диаметр расположения отверстий"
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


export default DiameterOfHolesPosition;