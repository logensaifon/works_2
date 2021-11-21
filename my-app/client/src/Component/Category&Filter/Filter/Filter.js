import React, { useRef, useContext, useState } from "react";
import "antd/dist/antd.css";
import { Button, Form } from "antd";
import { FilterStyle } from "./FilterStyle";
import Price from "./FilterComponents/Price";
import Height from "./FilterComponents/Height";
import Width from "./FilterComponents/Width";
import Deterioration from "./FilterComponents/Deterioration";
import Thorns from "./FilterComponents/Thorns";
import Brand from "./FilterComponents/Brand";
import Model from "./FilterComponents/Model";
import Address from "./FilterComponents/Address";
import HubDIA from "./FilterComponents/HubDIA";
import DepartureET from "./FilterComponents/DepartureET";
import DiameterOfHolesPosition from "./FilterComponents/DiameterOfHolesPosition";
import RimWidth from "./FilterComponents/RimWidth";
import NumberOfBoltHoles from "./FilterComponents/NumberOfBoltHoles";
import { FilterContext } from "../context";

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 24,
  },
};

function Filter({urlpathname}) {
  const {setFilterState} = useContext(FilterContext)
  const formRef = useRef()
  const [handelButtontextstate, setHandelButtontextstate] = useState("открыть фильтр")
  const [handleFormBoxstate, setHandleFormBoxstate] = useState(false)  

  const onFinish = (values) => {
    let sendValue = {
      address: (values.address && values.address.length) ? {$in: values.address} : undefined,
      brand: (values.brand && values.brand.length) ? {$in: values.brand} : undefined,
      departureET: (values.departureET && values.departureET.length) ? {$in: values.departureET} : undefined,
      diameterOfHolesPosition: (values.diameterOfHolesPosition && values.diameterOfHolesPosition.length) ? {$in: values.diameterOfHolesPosition} : undefined,
      hubDIA: (values.hubDIA && values.hubDIA.length) ? {$in: values.hubDIA} : undefined,
      model: (values.model && values.model.length) ? {$in: values.model} : undefined,
      numberOfBoltHoles: (values.numberOfBoltHoles && values.numberOfBoltHoles.length) ? {$in: values.numberOfBoltHoles} : undefined,
      price: (values.price && values.price.length) ? {$in: values.price} : undefined,
      rimWidth: (values.rimWidth && values.rimWidth.length) ? {$in: values.rimWidth} : undefined,
      height: (values.height && values.height.length) ? {$in: values.height} : undefined,
      thorns: (values.thorns && values.thorns.length) ? {$in: values.thorns} : undefined,
      wear: (values.wear && values.wear.length) ? {$in: values.wear} : undefined,
      width: (values.width && values.width.length) ? {$in: values.width} : undefined,
    } 
  
    setFilterState(sendValue)
  }


  const clearForm = () => {
    setFilterState()
    formRef.current.resetFields()
  }
  
  const onclick = () => {

    if (handleFormBoxstate === false ){
      setHandleFormBoxstate(true)
      setHandelButtontextstate("закрыт фильтр")
      
    } else {

      setHandelButtontextstate("открыть фильтр")
      setHandleFormBoxstate(false)
    }
    
  }

  
  const GetFilterCategory = () => {
    return (
      (urlpathname === "/DiscsAndWheels") ?
      <>
        <Price />
        <NumberOfBoltHoles />
        <RimWidth />
        <DiameterOfHolesPosition />
        <DepartureET />
        <HubDIA />        
        <Deterioration />
        <Brand />
        <Model />
        <Address />
      </>
      :
      <>
        <Price />
        <Height />
        <Width />
        <Thorns />
        <Deterioration />
        <Brand />
        <Model />
        <Address />
      </>
    )
  }
  

  return (
      <FilterStyle handleFormBox={handleFormBoxstate}>
        <div className={"handleButton"}>
          <button onClick={onclick}>
            {handelButtontextstate}
          </button>
        </div>
        <div className={"formBox"}>
          <Form
            {...layout}
            name="product-Filter"
            onFinish={onFinish}
            ref={formRef}
          >
            <GetFilterCategory />
            <Form.Item {...tailLayout}>
              <Button htmlType="submit" style={{ margin: "16px 0px" }}>
                найти
              </Button>
              <Button onClick={clearForm} style={{ margin: "16px 12px" }}>
                сброс
              </Button>
            </Form.Item>
          </Form>
        </div>
      </FilterStyle>
  );
}

export default Filter;
