import {
  Button,
  Carousel,
  Col,
  Image,
  InputNumber,
  Row,
  Tabs,
  Empty,
} from "antd";
import "antd/dist/antd.css";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { IconSearchPlus } from "../icon";
import { IconShoppingCartOk } from "../icon";
import { DescriptionStyle } from "./DescriptionStyle";
import { ImgContentStyle } from "./ImgContentStyle";
import { ShowProductStyle } from "./ShowProductStyle";
import Product from "../Product/Product";
import ButtonCompareFavorite, {
  addToShoppingCart,
} from "../Product/ButtonCompareFavoriteAddcart";
import Characteristic from "./CharacteristicsAndReviews/Characteristic";
import CustomerReviews from "./CharacteristicsAndReviews/CustomerReviews";
import AddAReview from "./CharacteristicsAndReviews/AddAReview";
import { ShowRating, DiscountIcon } from "../Product/Product";
import MenuBreadcrumb from "../../MenuBreadcrumb/MenuBreadcrumb";
import { AdminContext, ProductContext } from "../../Context";
import ButtonUpdateDelete from "../../Admin/AdminTools/Tools";
import { IconUpload } from "../../Admin/ikon";
import { readLocalStoragValue } from "../../footerPanel/FooterPanel";


const getHttp = (urlparams) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    const xhronload = () => {
      if (xhr.status === 200 || xhr.readyState === 4) {
        if (xhr.response === "not found") {
          resolve("not found");
        } else {
          const jsonparser = JSON.parse(xhr.response);

          resolve(jsonparser);
        }
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.open("get", urlparams, true);
    xhr.onload = xhronload;
    xhr.send();
  });
};

const CallProductContent = (props) => {
  const productUsed = props.productUsed
  const [totalCountState, setTotalCountState] = useState(null)
  const [productContent, setProductContent] = useState(null);
  const [loadingstate, setLoadingstate] = useState(true)
  let ListAnt = {
    grid: { gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 },
    pageSize: 10,
  };
  let cleanAsyncChangeState = true

  const getProduct = (skip, limit) => {

    if (productUsed) {
      setLoadingstate(true)

      getHttp(`/similarproduct?product=${productUsed.linkProduct}&limit=${limit}&skip=${skip}`)
      .then((result) => {
        
        if (result) {

          setProductContent(result);
          setLoadingstate(false)
        } 
      })
    }
  }

  const functionChangeProductState = (current, pageSize) => {
    let count = (current * pageSize) - pageSize
    getProduct(count, pageSize)

  }

  useEffect(()=>{
    getHttp(`/similarproductcount/?product=${productUsed.linkProduct}`).then((result) => {

      if (result)
      if (cleanAsyncChangeState)
      setTotalCountState(result.data)
      
      if (result.data > 1 ) {

        setLoadingstate(true)
        functionChangeProductState(1, 12)
      }
    })

    return ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanAsyncChangeState = false
    }
  }, [])

  let arr = [];

  if (productContent) {
    for (const key in productContent) {
      if (productContent[key]._id !== productUsed._id) {

        arr.push(productContent[key]);
      } 
    }
  } 

    return (
      (totalCountState > 1) ?
      <Row gutter={[0, 32]}>
        <Col span={24} style={{textAlign: "center"}}>
          <h4>
            похожие товары
          </h4>
          <hr />
        </Col>
        <Col span={24}>
          <Product 
            product={arr} 
            ListAnt={ListAnt} 
            totalCountState={totalCountState}
            functionChangeProductState={functionChangeProductState}
            loadingState={loadingstate}
            pagination 
          />
        </Col>
      </Row>
      :
      null
    )
};

const GetMenuBreadcrumb = (props) => {
  const  productUrlData = props.productUrlData

  const PathPageName = () => {
    const locationPathname = productUrlData.linkProduct.split("/")
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
        return ["/Stamped", "Штампованные"]
      }
      else if (index === "AlloyWheels"){
        return ["/AlloyWheels", "Литые"]
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

    url.push(["/showproduct", "показ"])
    
    return url
  }
    

  return (

    <MenuBreadcrumb 
      PathPageName={productUrlData !== "" ? PathPageName() : null}
    />

  )
}

const { TabPane } = Tabs;

const addViewedList = (params, setProductsViewedstate) => {
  if (localStorage.getItem("viewed") && JSON.parse(localStorage.getItem("viewed")).length > 0) {
    let parserfavorite = JSON.parse(localStorage.getItem("viewed"));

    for (const key in parserfavorite) {
      
      if (parserfavorite[key]._id === params._id) {

        return
      } else if (key === `${parserfavorite.length - 1}`) {

        parserfavorite.push(params);
        localStorage.setItem("viewed", JSON.stringify(parserfavorite));
        readLocalStoragValue("viewed", setProductsViewedstate);
        return
      }
    }
  } else {

    localStorage.setItem("viewed", JSON.stringify([params]));
    readLocalStoragValue("viewed", setProductsViewedstate);
    return
  }
};

const ShowMe = () => {
  if (document.getElementsByClassName("ant-breadcrumb")[0])
    document
      .getElementsByClassName("ant-breadcrumb")[0]
      .scrollIntoView({ block: "start" });
  else window.scrollTo(0, 200);
};

const CharacteristicsAndReviews = (props) => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="характеристика" key="1">
        <Characteristic descriptions={props.descriptions} />
      </TabPane>
      <TabPane tab="Отзывы клиентов" key="2">
        <CustomerReviews comments={props.descriptions.comments} />
      </TabPane>
      <TabPane tab="добавить отзыв" key="3">
        <AddAReview productUsed={props.descriptions} />
      </TabPane>
    </Tabs>
  );
};

const Description = (props) => {
  const { setCompareProductsstate, setFavoritesstate, setAddBasketstate } =
    useContext(ProductContext);
  const [quantity, setQuantity] = useState();
  const onChange = (value) => {
    setQuantity(value);
  };

  return (
    <DescriptionStyle>
      <div className="iconBox">
        <ButtonCompareFavorite
          element={props.descriptions}
          setCompareProductsstate={setCompareProductsstate}
          setFavoritesstate={setFavoritesstate}
        />
        {ShowRating(props.descriptions.comments)}
      </div>
      <div className="infoBox">
        <ul>
          <li>
            Вы можете забрать эти шины в любом из наших пунктов самовывоза.
          </li>
          <li>
            Или оформить <Link to={"/Delivery"}>доставку</Link>
          </li>
        </ul>
      </div>
      <div className="articul">
        Артикул: {props.descriptions.articul}
      </div>
      <div className="nameBox">
        { 
          (props.descriptions.categoryPraduct === "Диски и колеса бу") ?
          `${props.descriptions.categoryPraduct} ${props.descriptions.rimWidth}*${props.descriptions.diameter} PCD ${props.descriptions.numberOfBoltHoles}*${props.descriptions.diameterOfHolesPosition} DIA ${props.descriptions.hubDIA} ET ${props.descriptions.departureET}`
          :
          `${props.descriptions.brand} ${props.descriptions.width}/${props.descriptions.height ? props.descriptions.height + "/" : ""}${props.descriptions.type} ${props.descriptions.season}`
        }
      </div>
      <div className="addressBox">адрес: {props.descriptions.address}</div>
      <div className="stockBox">в наличии: {props.descriptions.stock}</div>
      <div className="discountPriceBox">
        { (props.descriptions.discount && props.descriptions.discount > 0 && props.descriptions.discount !== props.descriptions.price) ? 
          <div className="discountBox">
            {props.descriptions.discount} руб.
          </div>
          : null
        }
        <div className="priceBox">{props.descriptions.price} руб.</div>
      </div>
      <div className="howManyPiecesToAddToCart">
        <InputNumber
          min={1}
          max={props.descriptions.stock}
          defaultValue="1"
          onChange={onChange}
          size={"large"}
          type={"number"}
          parser={(value)=> isNaN(value) ? null : 1}
        />
        <Button
          type="primary"
          size="large"
          icon={<IconShoppingCartOk size={25} />}
          onClick={() =>
            addToShoppingCart(props.descriptions, setAddBasketstate, quantity)
          }
        >
          добавить в корзину
        </Button>
      </div>
    </DescriptionStyle>
  );
};

const ImgContent = (props) => {
  const GetAPhoto = (params) => {
    return params.map((received) => {
      const src = received.response;

      return (
        <Image
          src={`/image/${src.path ? src.path : "imgnote"}`}
          alt={src.filename}
          key={src.filename}
          preview={{ mask: [<IconSearchPlus key={`icon${received}`} />] }}
        />
      );
    });
  };

  return (
    <ImgContentStyle>
      <div className="img">
        <Image.PreviewGroup>
          <Carousel effect="fade">{GetAPhoto(props.photo)}</Carousel>
        </Image.PreviewGroup>
      </div>
    </ImgContentStyle>
  );
};

function ShowProduct() {
  const urlpathname = window.location.pathname;
  const urlsearch = window.location.search;
  const [productUsed, setProductUsed] = useState(null);
  const { userAdmin } = useContext(AdminContext);
  const { staticRouterstate, setProductsViewedstate } = useContext(ProductContext)
  let cleanupFunction = true

  useEffect(() => {
    window.scrollTo(0, 300);

    getHttp(`/show${urlsearch}`)
    .then((result) => {

      if (cleanupFunction)
      setProductUsed(result);
    })

    return ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanupFunction = false
    }
  }, [urlpathname, urlsearch, staticRouterstate]);

  if (productUsed === null) {
    return (
      <ShowProductStyle>
        <Row style={{ marginBottom: "16px" }}>
          <Col span={24}>
            <GetMenuBreadcrumb
              productUrlData={""}
            />
          </Col>
          {ShowMe()}
        </Row>
        <Row>
          <Col span={24}>
            <h6 style={{ height: 150, textAlign: "center", marginTop: 150 }}>
              загрузка...
            </h6>
          </Col>
        </Row>
      </ShowProductStyle>
    );
  }
  if (productUsed === "not found") {
    return (
      <ShowProductStyle>
        <Row style={{ marginBottom: "16px" }}>
          <Col span={24}>
            <GetMenuBreadcrumb
              productUrlData={""}
            />
          </Col>
          {ShowMe()}
        </Row>
        <Row>
          <Col span={24}>
            <Empty
              imageStyle={{ height: 300 }}
              description={<h6>не найден</h6>}
            >
              вернутся <Link to="/">главной</Link> страницы

            </Empty>
          </Col>
        </Row>
      </ShowProductStyle>
    );
  } else {
    return (
      <ShowProductStyle>
        {addViewedList(productUsed, setProductsViewedstate)}
        <Row style={{ marginBottom: "16px" }}>
          <Col span={24}>
            <GetMenuBreadcrumb
              productUrlData={productUsed}
            />
          </Col>
          {ShowMe()}
        </Row>
        <Row>
          {userAdmin ? (
            <Col span={24}>
              <ButtonUpdateDelete
                product={productUsed}
                style={{
                  marginBottom: "8px",
                  width: "106px",
                  float: "left",
                }}
              />
              <Link
                to="/Admin/createproduct"
                style={{
                  border: "solid 1px rgb(255, 122, 122)",
                  color: "red",
                  paddingBottom: "5px",
                  paddingTop: 0,
                  paddingRight: "16px",
                  paddingLeft: "16px",
                }}
              >
                <IconUpload size={20} /> добавить продукт
              </Link>
            </Col>
          ) : null}
          <Col className="ant-col-ImgContent" xs={24} sm={14}>
            {(productUsed.discount && productUsed.discount > 0 && productUsed.discount !== productUsed.price) ? (
              <DiscountIcon
                discountPrice={productUsed.discount}
                price={productUsed.price}
                style={{
                  background: "#e20606",
                  color: "white",
                  width: "35px",
                  height: "30px",
                  position: "absolute",
                  zIndex: "10",
                  fontWeight: 500,
                  textAlign: "center",
                  paddingTop: "5px",
                  marginTop: "4.5%",
                  marginLeft: "7%",
                }}
              />
            ) : null}
            <ImgContent
              photo={productUsed.photoUpload}
            />
          </Col>
          <Col className="ant-col-Description" xs={24} sm={10}>
            <Description descriptions={productUsed} />
          </Col>
          <Col span={24}>
            <CharacteristicsAndReviews descriptions={productUsed} />
          </Col>
          <Col span={24} style={{ marginTop: "80px" }}>
            {productUsed ? <CallProductContent productUsed={productUsed} /> : null}
          </Col>
        </Row>
      </ShowProductStyle>
    );
  }
}

export default ShowProduct;
