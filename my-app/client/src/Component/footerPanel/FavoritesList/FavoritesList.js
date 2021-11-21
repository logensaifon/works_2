import React, { useState, useEffect, useContext } from "react";
import "antd/dist/antd.css";
import { Row, Col, Empty } from "antd";
import MenuBreadcrumb from "../../MenuBreadcrumb/MenuBreadcrumb";
import { Link } from "react-router-dom";
import Product from "../../Product/Product/Product";
import { ProductContext } from "../../Context";
import { callLocalstorage, getRequest } from "../ViewedList/ViewedList";


const deleteLocalStorage = (params, callbackState, setFavoritesProductState) => {
  localStorage.removeItem(params);

  callbackState(0);
  setFavoritesProductState("not found");
};

function FavoritesList() {
  const pageName = ["/favoriteslist", "Избранное"];
  const [favoritesProductState, setFavoritesProductState] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const { favorites, setFavoritesstate } = useContext(ProductContext);
  let ListAnt = {
    grid: { gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 },
    pageSize: 12,
  };

  useEffect(() => {
    window.scrollTo(0, 200);
    setLoadingState(true)

    let localstoragestate = callLocalstorage("favorite");
    if (localstoragestate.length === 0) {
      setFavoritesProductState("not found");
      setLoadingState(false)
    }

    const IdrequestArray = localstoragestate.map((id)=>id._id)
    getRequest(IdrequestArray).then((result) => {
    
      setFavoritesProductState(result);
      setLoadingState(false)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);



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
        <h3>Избранное {favorites}</h3>
      </Col>
      <Col
        md={{ span: 4, offset: 0 }}
        sm={{ span: 5, offset: 0 }}
        xs={{ span: 23, offset: 1 }}
      >
        <button
          onClick={() => {
            deleteLocalStorage(
              "favorite",
              setFavoritesstate,
              setFavoritesProductState
            );
          }}
          style={{ all: "unset", cursor: "pointer", width: "108px" }}
        >
          Очистить список
        </button>
      </Col>
      <Col span={24}>
        {favoritesProductState === "not found" ? (
          <Empty
            description={`Избранное ${favorites}`}
            style={{ height: "150px", marginTop: "150px", marginBottom: "250px" }}
          >
            вернутся <Link to="/">главной</Link> страницы
          </Empty>
        ) : (
          <Product 
            product={favoritesProductState} 
            ListAnt={ListAnt} 
            loadingState={loadingState}
          />
        )}
      </Col>
    </Row>
  );
}


export default FavoritesList