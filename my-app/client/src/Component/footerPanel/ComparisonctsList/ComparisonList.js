import React, { useState, useEffect, useContext } from "react";
import "antd/dist/antd.css";
import { Row, Col, Empty } from "antd";
import MenuBreadcrumb from "../../MenuBreadcrumb/MenuBreadcrumb";
import { Link } from "react-router-dom";
// import Product from "../../Product/Product/Product";
import { ProductContext } from "../../Context";
import { callLocalstorage, getRequest } from "../ViewedList/ViewedList";
import ComparasionProduct from "./ComparasionProduct";


const deleteLocalStorage = (params, callbackState, setCompareProductState) => {
  localStorage.removeItem(params);

  callbackState(0);
  setCompareProductState("not found");
};

function ComparisonList() {
  const pageName = ["/comparelist", "Сравнить товары"];
  const [compareProductState, setCompareProductState] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const { compareProducts, setCompareProductsstate } = useContext(ProductContext);
  let ListAnt = {
    grid: { gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 },
    pageSize: 12,
  };

  useEffect(() => {
    window.scrollTo(0, 200);

    let localstoragestate = callLocalstorage("comparison");
    if (localstoragestate.length === 0) {
      setCompareProductState("not found");
      setLoadingState(false)
    }

    const IdrequestArray = localstoragestate.map((id)=>id._id)
    getRequest(IdrequestArray).then((result) => {

      setCompareProductState(result);
      setLoadingState(false)
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compareProducts]);



  return (
    <Row gutter={[0, 16]} style={{ marginTop: "32px" }}>
      <Col span={23} offset={1}>
        <MenuBreadcrumb PathPageName={[pageName]}/>
      </Col>
      <Col
        md={{ span: 19, offset: 1 }}
        sm={{ span: 18, offset: 1 }}
        xs={{ span: 23, offset: 1 }}
      >
        <h3>Сравнить товары {compareProducts}</h3>
      </Col>
      <Col
        md={{ span: 4, offset: 0 }}
        sm={{ span: 5, offset: 0 }}
        xs={{ span: 23, offset: 1 }}
      >
        <button
          onClick={() => {
            deleteLocalStorage(
              "comparison",
              setCompareProductsstate,
              setCompareProductState
            );
          }}
          style={{ all: "unset", cursor: "pointer", width: "108px" }}
        >
          Очистить список
        </button>
      </Col>
      <Col span={24}>
        {compareProductState === "not found" ? (
          <Empty
            description={`Сравнить товары ${compareProducts}`}
            style={{ height: "150px", marginTop: "150px", marginBottom: "250px" }}
          >
            вернутся <Link to="/">главной</Link> страницы
          </Empty>
        ) : (
          
          <ComparasionProduct 
            product={compareProductState} 
            ListAnt={ListAnt} 
            loadingState={loadingState}
          />
        )}
      </Col>
    </Row>
  );
}


export default ComparisonList