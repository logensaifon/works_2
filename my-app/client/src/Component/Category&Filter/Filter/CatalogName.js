import React from "react";
import 'antd/dist/antd.css';


const CatalogName = ()=> {
    const urlpathname = window.location.pathname.slice(9);

    const checkName = () => {
        
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
  
  return (

    <h3>
        {checkName()}
    </h3>
 
  )
}


export default CatalogName;