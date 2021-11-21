import React, { useContext, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Row, Col, Empty } from "antd";
import Filter from "./Filter/Filter";
import MenuBreadcrumb from "../MenuBreadcrumb/MenuBreadcrumb";
import Product from "../Product/Product/Product";
import { Link } from "react-router-dom";
import { FilterContext } from "./context";
import { BackMenuCatalogDiametersStyle } from "./BackMenuCatalogDiametersStyle";
import Caliber from "./Filter/Caliber";
import CatalogName from "./Filter/CatalogName";
import { ProductContext } from "../Context";

const universalRequest = (method, url, body) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    let jsonstringify = JSON.stringify(body)

    const xhronload = () => {
      if (xhr.status === 200 || xhr.readyState === 4) {
        if (xhr.response) {

          const jsonparser = JSON.parse(xhr.response);
          resolve(jsonparser);
        } else {

          resolve("not found");
        }
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.open(method, url, true);
    xhr.setRequestHeader("content-type", "application/json; charset=utf-8")
    xhr.onload = xhronload;
    xhr.send(jsonstringify);
  });
};


const BackMenuCatalogDiameters = () => {
  const PathPageName = () => {
    const locationPathname = window.location.pathname.slice(9).split("/")
    locationPathname.shift()

    const url = locationPathname.map((index)=>{
      if (index === "WinterTires"){
  
        return ["//category/WinterTires", "Зимние шины бу"]
      }
      else if (index === "LightTruckTires"){
        
        return ["//category/LightTruckTires", "Легкогрузовые шины бу"]
      }
      else if (index === "TruckTires"){
  
        return ["//category/TruckTires", "Грузовые шины бу"]
      }
      else if (index === "DiscsAndWheels"){
        return ["//category/DiscsAndWheels", "Диски и колеса бу"]
      }
      else if (index === "Stamped"){
        return ["//category/DiscsAndWheels/Stamped", "Штампованные"]
      }
      else if (index === "AlloyWheels"){
        return ["//category/DiscsAndWheels/AlloyWheels", "Литые"]
      }
      else if (index === "SummerTires"){
        return ["//category/SummerTires", "Летние шины бу"]
      }
      else if (index === "MotorcycleTires"){
        return ["//category/MotorcycleTires", "Мотошины бу"]
      } else {
        return [index]
      }
    })
  
    return url
  }
    

  return (
    <BackMenuCatalogDiametersStyle>
      <Row>
        <Col offset={1} span={22}>
          <MenuBreadcrumb 
            PathPageName={PathPageName()}
          />
        </Col>
        <Col offset={1} span={22}>
          <CatalogName />
          <div className="buttonDiametrBox">
            <Caliber />
          </div>
        </Col>
      </Row>
    </BackMenuCatalogDiametersStyle>
  )
}

function Category() {
  const urlpathname = window.location.pathname.slice(9);
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [productForFilterUseState, setProductForFilterUseState] = useState([])
  const [filterState, setFilterState] = useState()
  const [totalCountState, setTotalCountState] = useState(null)
  const [loadingState, setLoadingState] = useState(true)
  const { staticRouterstate } = useContext(ProductContext)
  const filterContextValue = {
    productForFilterUseState, setProductForFilterUseState,
    categoryProduct, setCategoryProduct,
    filterState, setFilterState
  }

  let ListAnt = {
    grid: { gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 5 },
    pageSize: 12,
  };
  let cleanupFunction = true

  const functionChangeProductState = (current, pageSize) => {
    let count = (current * pageSize) - pageSize
    getProduct(count, pageSize)

  }

  const getProduct = (skip, limit) => {
    window.scrollTo(0, 300);
    setLoadingState(true)
    setCategoryProduct([])

    universalRequest("post",`/catalog?productcategory=${urlpathname}&limit=${limit}&skip=${skip}`,filterState)
    .then((result) => {
      
      if (cleanupFunction)
      if (result.length) {
        setCategoryProduct(result);
        setLoadingState(false)
      } else {
        setCategoryProduct("not found");
        setLoadingState(false)
      }
    })
  }

  const getFilterParams = () => {
    universalRequest("get",`/filter?category=${urlpathname}`).then((result) => {
      if (cleanupFunction)
      if (result !== "not found") {

        setProductForFilterUseState(result);
      } else {

        setProductForFilterUseState([]);
      }
    })
  }
  
  

  useEffect(() => {

    getFilterParams()

    if (cleanupFunction) {

      universalRequest("post",`/catalogcount?productcategory=${urlpathname}`,filterState).then((result)=>{
        setTotalCountState(result.data)
  
      })
    }

    functionChangeProductState(1, 12)

    return ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanupFunction = false
    }

  }, [urlpathname, filterState, staticRouterstate, totalCountState]);
  

  return (
    <FilterContext.Provider value={filterContextValue}>
      <Row>
        <Col
          lg={{ span: 5 }}
          md={{ span: 5 }}
          sm={{ span: 22 }}
          xs={{ span: 22, pull: 1, push: 1 }}
        >
          <Filter urlpathname={urlpathname}/>
        </Col>
        <Col lg={{ span: 18 }} md={{ span: 18, offset: 1 }} sm={{ span: 24 }}>
          <BackMenuCatalogDiameters />
          { (categoryProduct === "not found") ? 
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
              product={categoryProduct} 
              ListAnt={ListAnt} 
              totalCountState={totalCountState}
              functionChangeProductState={functionChangeProductState}
              loadingState={loadingState}
              pagination
            />
          }
        </Col>
      </Row>
    </FilterContext.Provider>
  );
}

export { universalRequest }
export default Category;
