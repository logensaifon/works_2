import React from "react";
import 'antd/dist/antd.css';
import { Button } from 'antd';
import ProductCategoryList from "../../PopularCategories/ProductCategoryList"
import { Link } from "react-router-dom";


const checkStampedAlloyWheelsUrl = (url) => {

  if (url === "Штампованные"){
    return "Stamped"
  }
  else if (url === "Литые"){
    return "AlloyWheels"
  }
  else {
    return url
  }
}

const checkUrl = () => {
  let urlpathname = window.location.pathname.slice(9);
        
  if (urlpathname.search("/WinterTires") > -1){
    return "/WinterTires"
  }
  else if (urlpathname.search("/LightTruckTires") > -1){
    return "/LightTruckTires"
  }
  else if (urlpathname.search("/TruckTires") > -1){
    return "/TruckTires"
  }
  else if (urlpathname.search("/DiscsAndWheels") > -1){
    return "/DiscsAndWheels"
  }
  else if (urlpathname.search("/Stamped") > -1){
    return "/Stamped"
  }
  else if (urlpathname.search("/AlloyWheels") > -1){
    return "/AlloyWheels"
  }
  else if (urlpathname.search("/SummerTires") > -1){
    return "/SummerTires"
    
  }
  else if (urlpathname.search("/MotorcycleTires") > -1){
    return "/MotorcycleTires"
  }
}

const checkUrlName = () => {
  let urlpathname = window.location.pathname.slice(9);
        
  if (urlpathname.search("/WinterTires") > -1){
    return "Зимние шины бу"
  }
  else if (urlpathname.search("/LightTruckTires") > -1){
    return "Легкогрузовые шины бу"
  }
  else if (urlpathname.search("/TruckTires") > -1){
    return "Грузовые шины бу"
  }
  else if (urlpathname.search("/DiscsAndWheels") > -1){
    return "Диски и колеса бу"
  }
  else if (urlpathname.search("/SummerTires") > -1){
    return "Летние шины бу"
  }
  else if (urlpathname.search("/MotorcycleTires") > -1){
    return "Мотошины бу"
  }
}

const Caliber = ()=> {  

  const CreateCaliberButton = () => {
    const arr = []

    for (const key in ProductCategoryList) {
      if (checkUrlName() === ProductCategoryList[key][1]) {

        arr.push(ProductCategoryList[key][2].map((index)=>{
          if (!Array.isArray(index)){

            return <Button key={index}><Link to={`/category${checkUrl()}/${checkStampedAlloyWheelsUrl(index)}`}>{index}</Link></Button>
          } else {
            return <Button key={index[0]}><Link to={`/category${checkUrl()}/${index[0]}`}>{index[0]}</Link></Button>
          }
        }))
        
      }
    }

    return arr
  }
  
  
  return CreateCaliberButton()
}


export default Caliber;