import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Row, Col, Empty } from "antd";
import { SearchListStyle } from "./SearchListStyle";
import Product from "../../Product/Product/Product";
import { Link, useLocation } from "react-router-dom";
import MenuBreadcrumb from "../../MenuBreadcrumb/MenuBreadcrumb"

const getRequest = (url) => {
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest()

    const xhrOnload = ()=>{
      if (xhr.status === 200 && xhr.readyState === 4) {

        if (xhr.response.length > 0) {
          const jsonparser = JSON.parse(xhr.response)

          resolve(jsonparser)
        } else {

          resolve(xhr.response)
        }
      } else {

        reject(xhr.statusText);
      }
    }
    
    xhr.open("get", url, true)
    xhr.onload = xhrOnload
    xhr.send()
  })
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchList() {
  const [searchProduct, setSearchProduct] = useState([])
  const [loadingState, setLoadingState] = useState(true)
  const [totalCountState, setTotalCountState] = useState(null)
  const pageName = ["search", "Найти"];
  const query = useQuery().get("query")


  const functionChangeProductState = (current, pageSize) => {
    let count = (current * pageSize) - pageSize
    
    if (query !== "") {
      setLoadingState(true)
      
      getRequest(`/searchquery/?query=${query}&limit=${pageSize}&skip=${count}`).then((result)=>{
        
        if (result.length > 0) {
  
          setSearchProduct(result)
          setLoadingState(false)
        } else {
  
          setSearchProduct("not found")
          setLoadingState(false)
        }
      })
    } else {
        
      setSearchProduct("not found")
      setLoadingState(false)
    }
  }

  useEffect(() => {
    setLoadingState(true)
    window.scrollTo(0, 200);
    setSearchProduct([])

    functionChangeProductState(1, 15)
    
    if (query !== "") {

      getRequest(`/searchcount?query=${query}`).then((result)=>{
  
        setTotalCountState(result.count)
      })
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])


  let ListAnt = {
    grid: { gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 },
    pageSize: 15,
  };

  return (
    <SearchListStyle>
      <Row gutter={[0, 16]} style={{ marginTop: "32px" }}>
        <Col span={23} offset={1}>
          <MenuBreadcrumb
            pathname={"/search"}
            pageName={pageName}
          />
        </Col>
        <Col
          md={{ span: 19, offset: 1 }}
          sm={{ span: 18, offset: 1 }}
          xs={{ span: 23, offset: 1 }}
        >
          <h3>Результаты поиска ({totalCountState ? totalCountState : 0})</h3>
          {query ? <h6>Запрос: {query}</h6> : <h6>вы ничего не водили в поле поиска</h6>}
        </Col>
        <Col span={24}>
          {searchProduct === "not found" ? (
            <Empty
              description={"результаты поиска 0"}
              style={{ height: "150px", marginTop: "150px", marginBottom: "250px" }}
            >
              вернутся <Link to="/">главной</Link> страницы
            </Empty>
          ) : (
            <Product 
              product={searchProduct} 
              ListAnt={ListAnt} 
              loadingState={loadingState}
              totalCountState={totalCountState} 
              functionChangeProductState={functionChangeProductState}
              pagination
            />
          )}
        </Col>
      </Row>
    </SearchListStyle>
  );
}

export default SearchList;
