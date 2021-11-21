import React, { useContext, useState } from "react";
import { IconRemove, IconCog } from "./icon";
import "antd/dist/antd.css";
import { ButtonUpdateDeleteStyle } from "./ButtonUpdateDeleteStyle";
import { Popconfirm, message } from "antd";
import { Redirect } from "react-router-dom";
import { ProductContext } from "../../Context";


const deleteProduct = (url) => {

  return new Promise((resolve, reject)=>{

    const xhr = new XMLHttpRequest()
    
    const xhronload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        message.success("гатов");
        resolve(xhr.response)
      } else {
        message.warning("что то пошло не так");
        reject(xhr.statusText)
      }
    }
  
    xhr.open("delete", `/productdelete/${url}`, true)
    xhr.onload = xhronload
    xhr.send()
  })

}


const Deletebutton = (props)=>{
  const { staticRouterstate, setStaticRouterstate } = useContext(ProductContext)

  
  const confirm = ()=>{
    deleteProduct(props.product._id).then(()=>{
      if (staticRouterstate) {

        setStaticRouterstate(false)
      } else {

        setStaticRouterstate(true)
      }
    })
  }
  

  return (
    <Popconfirm
      title="удалить?"
      onConfirm={confirm}
      okText="да"
      cancelText="нет"
    >
      <button>
        <IconRemove />
      </button>
    </Popconfirm>
  );
}

const Changebutton = (props)=>{
  const [callRedirectstate, setCallRedirectstate] = useState(false)

  const confirm = ()=>{
    setCallRedirectstate(props.product._id)
  }

  return (
    <Popconfirm
      title="изменить?"
      onConfirm={confirm}
      okText="да"
      cancelText="нет"
    >
      {callRedirectstate !== false ? <Redirect to={`/Admin/updateproduct/${callRedirectstate}`} /> : null}
      <button>
        <IconCog />
      </button>
    </Popconfirm>
  );
}



function ButtonUpdateDelete(props){
    return (
      <ButtonUpdateDeleteStyle style={props.style}>
        <Changebutton product={props.product}/>
        <Deletebutton product={props.product}/>
      </ButtonUpdateDeleteStyle>
    )
}


export default ButtonUpdateDelete
