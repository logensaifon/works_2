import React, { useState, useEffect, useContext } from "react";
import "antd/dist/antd.css";
import { Row, Col, Empty } from "antd";
import MenuBreadcrumb from "../../MenuBreadcrumb/MenuBreadcrumb";
import { Link } from "react-router-dom";
import Product from "../../Product/Product/Product";
import { ProductContext } from "../../Context";

const callLocalstorage = (params) => {
  let localStoragValue = localStorage.getItem(params);
  let jsonparser = JSON.parse(localStoragValue);

  if (jsonparser === null || jsonparser === undefined) {
    return (jsonparser = []);
  } else {
    return jsonparser;
  }
};

const deleteLocalStorage = (params, callbackState, setViewedProductState) => {
  localStorage.removeItem(params);

  callbackState(0);
  setViewedProductState("not found");
};

const getRequest = async (body) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const jsonstringify = JSON.stringify(body)

    const xhrOnload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const jsonparse = JSON.parse(xhr.response);
        
        if (jsonparse.length === 0) {

          resolve("not found");
        } else {

          resolve(jsonparse)
        }
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.open("post", `/localstorageproduct`, true);
    xhr.setRequestHeader("content-type", "application/json; charset=utf-8")
    xhr.onload = xhrOnload;
    xhr.send(jsonstringify);
  });
};

function ViewedList() {
  const pageName = ["/viewedlist", "Просмотренные товары"];
  const [viewedProductState, setViewedProductState] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const { productsViewed, setProductsViewedstate } = useContext(ProductContext);
  let ListAnt = {
    grid: { gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 },
    pageSize: 12,
  };

  useEffect(() => {
    window.scrollTo(0, 200);
    setLoadingState(true)

    let localstoragestate = callLocalstorage("viewed");
    if (localstoragestate.length === 0) {
      setViewedProductState("not found");
      setLoadingState(false)
    }

    const IdrequestArray = localstoragestate.map((id)=>id._id)
    getRequest(IdrequestArray).then((result) => {

      setViewedProductState(result);
      setLoadingState(false)
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsViewed]);

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
        <h3>Просмотренные товары {productsViewed}</h3>
      </Col>
      <Col
        md={{ span: 4, offset: 0 }}
        sm={{ span: 5, offset: 0 }}
        xs={{ span: 23, offset: 1 }}
      >
        <button
          onClick={() => {
            deleteLocalStorage(
              "viewed",
              setProductsViewedstate,
              setViewedProductState
            );
          }}
          style={{ all: "unset", cursor: "pointer", width: "108px" }}
        >
          Очистить список
        </button>
      </Col>
      <Col span={24}>
        {viewedProductState === "not found" ? (
          <Empty
            description={`Просмотренные товары ${productsViewed}`}
            style={{ height: "150px", marginTop: "150px", marginBottom: "250px" }}
          >
            вернутся <Link to="/">главной</Link> страницы
          </Empty>
        ) : (
          <Product 
            product={viewedProductState} 
            ListAnt={ListAnt} 
            loadingState={loadingState}
          />
        )}
      </Col>
    </Row>
  );
}

export { callLocalstorage, getRequest }
export default ViewedList;
