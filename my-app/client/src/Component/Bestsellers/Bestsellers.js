import React, { useContext, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Row, Col, Empty } from "antd";
import { Link } from "react-router-dom";
import { StyleComponent } from "./StyleComponent";
import Product from "../Product/Product/Product";
import { ProductContext } from "../Context";

const getXmlRequest = (url) => {

  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest()

    const xhrOnload = ()=>{
      if (xhr.status === 200 && xhr.readyState === 4) {
        const jsonparser = JSON.parse(xhr.response)

        resolve(jsonparser)
      } else {

        reject(xhr.statusText);
      }
    }
    
    xhr.open("get", url, true)
    xhr.onload = xhrOnload
    xhr.send()
  })
}



function Bestsellers() {
  const [bestsellerProduct, setBestsellerProduct] = useState([])
  const [loadingState, setLoadingState] = useState(true)
  const { staticRouterstate } = useContext(ProductContext)
  let cleanupFunction = true

  useEffect(() => {
    setLoadingState(true)
    
    getXmlRequest("/bestsellers").then((result)=>{

      if (cleanupFunction)
      if (result.length) {

        setBestsellerProduct(result)
        setLoadingState(false)
      } else {

        setBestsellerProduct("not found")
        setLoadingState(false)
      }
    })

    return ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanupFunction = false
    }

  }, [staticRouterstate])


  let ListAnt = {
    grid: { gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 },
  };

  return (
    <StyleComponent>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <div className="headrestTextBox">
            <h3>Хиты продаж</h3>
          </div>
        </Col>
        <Col span={24}>
          { (bestsellerProduct === "not found") ? 
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="ничего не найдена"
                style={{
                  marginTop: "150px",
                  paddingBottom: "150px",
                  marginBottom: "250px",
                  color: "rgba(0, 0, 0, 0.85)",
                }}
              >
                вернутся <Link to="/">главной</Link> страницы
              </Empty>
            : 
              <Product 
                product={bestsellerProduct} 
                ListAnt={ListAnt} 
                loadingState={loadingState}
              />
          }
        </Col>
      </Row>
    </StyleComponent>
  );
}

export default Bestsellers;
