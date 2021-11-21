import React, { useContext } from 'react';
import "antd/dist/antd.css"
import { Row, Col, Carousel, Image, Rate, List  } from "antd";
import { IconSearchPlus } from "../../Product/icon";
import { Link } from "react-router-dom";
import ButtonCompareFavorite from "../../Product/Product/ButtonCompareFavoriteAddcart"
import { ProductContext } from '../../Context';
import { ComparasionProductStyle } from "./ComparasionProductStyle";


const ParamsData = (params) => {
  let data = params;

  return (
    (data.categoryPraduct === "Диски и колеса бу") ?
    <>
      {
        (data.wear) ?
        <Row gutter={[6, 0]}>
          <Col span={12}>
            <h6 key={"h6_deterioration"}> Износа </h6>
          </Col>
          <Col span={12}>
            <p key={"p_deterioration"}>{data.wear}</p>
          </Col>
        </Row>
        :
        ""
      }
      <Row gutter={[6, 0]}>
        <Col span={12}>
          <h6 key={"h6_model"}> Модель </h6>
        </Col>
        <Col span={12}>
          <p key={"p_model"}>{data.model}</p>
        </Col>
      </Row>
      <Row gutter={[6, 0]}>
        <Col span={12}>
          <h6 key={"h6_brand"}> Бренд </h6>
        </Col>
        <Col span={12}>
          <p key={"p_brand"}>{data.brand}</p>
        </Col>
      </Row>
      <Row gutter={[6, 0]}>
        <Col span={12}>
        <h6 key={"h6_numberOfBoltHoles"}> Количество отверстий под болты </h6>
        </Col>
        <Col span={12}> 
        <p key={"p_numberOfBoltHoles"}>{data.numberOfBoltHoles}</p>
        </Col>
      </Row>
      <Row gutter={[6, 0]}>
        <Col span={12}>
          <h6 key={"h6_calibr"}> Диаметр </h6>
        </Col>
        <Col span={12}>
          <p key={"p_calibr"}>{data.diameter}</p>
        </Col>
      </Row>
      <Row gutter={[6, 0]}>
        <Col span={12}>
        <h6 key={"h6_discType"}> Тип диска </h6>
        </Col>
        <Col span={12}>
        <p key={"p_discType"}>{data.discType}</p>
        </Col>
      </Row>
      <Row gutter={[6, 0]}>
        <Col span={12}>
          <h6 key={"h6_diameterOfHolesPosition"}> Диаметр располож. отверстий </h6>
        </Col>
        <Col span={12}>
        <p key={"p_diameterOfHolesPosition"}>{data.diameterOfHolesPosition}</p>
        </Col>
      </Row>
      <Row gutter={[6, 0]}>
        <Col span={12}>
          <h6 key={"h6_departureET"}> Вылет {"(ET)"} </h6>
        </Col>
        <Col span={12}>
          <p key={"p_departureET"}>{data.departureET}</p>
        </Col>
      </Row>
      <Row gutter={[6, 0]}>
        <Col span={12}>
          <h6 key={"h6_hubDIA"}> Ступица {"(DIA)"} </h6>
        </Col>
        <Col span={12}>
          <p key={"p_hubDIA"}>{data.hubDIA}</p>
        </Col>
      </Row>
      <Row gutter={[6, 0]}>
        <Col span={12}>
          <h6 key={"h6_rimWidth"}> Ширина обода </h6>
        </Col>
        <Col span={12}>
        <p key={"p_rimWidth"}>{data.rimWidth}</p>
        </Col>
        <Col span={12}>
          <h6 key={"h6_price"}> цена </h6>
        </Col>
        <Col span={12}>
          <p key={"p_price"}>{data.price} руб.</p>
        </Col>
      </Row>
    </>
    :
    <>
        {
          (data.wear) ?
          <Row gutter={[6, 0]}>
            <Col span={12}>
              <h6 key={"h6_deterioration"}> Износа </h6>
            </Col>
            <Col span={12}>
              <p key={"p_deterioration"}>{data.wear}</p>
            </Col>
          </Row>
          :
          ""
        }
      <Row gutter={[6, 0]}>
        <Col span={12}>
          <h6 key={"h6_model"}> Модель </h6>
        </Col>
        <Col span={12}>
          <p key={"p_model"}>{data.model}</p>
        </Col>
      </Row>
      <Row gutter={[6, 0]}>
        <Col span={12}>
          <h6 key={"h6_brand"}> Бренд </h6>
        </Col>
        <Col span={12}>
          <p key={"p_brand"}>{data.brand}</p>
        </Col>
      </Row>
      <Row gutter={[6, 0]}>
        <Col span={12}>
          <h6 key={"h6_season"}> Сезон </h6>
        </Col>
        <Col span={12}>
          <p key={"p_season"}>{data.season}</p>
        </Col>
      </Row>
      <Row gutter={[6, 0]}>
        <Col span={12}>
          <h6 key={"h6_calibr"}> Диаметр </h6>
        </Col>
        <Col span={12}>
          <p key={"p_calibr"}>{data.diameter}</p>
        </Col>
      </Row>
      <Row gutter={[6, 0]}>
        <Col span={12}>
          <h6 key={"h6_type"}> Тип </h6>
        </Col>
        <Col span={12}>
          <p key={"p_type"}>{data.type}</p>
        </Col>
      </Row>
      {
        (data.height) ?
        <Row gutter={[6, 0]}>
          <Col span={12}>
            <h6 key={"h6_height"}> Высота </h6>
          </Col>
          <Col span={12}>
            <p key={"p_height"}>{data.height}</p>
          </Col>
        </Row>
        :
        ""
      }
      <Row gutter={[6, 0]}>
        <Col span={12}>
          <h6 key={"h6_width"}> Ширина </h6>
        </Col>
        <Col span={12}>
          <p key={"p_width"}>{data.width}</p>
        </Col>
        <Col span={12}>
          <h6 key={"h6_price"}> цена </h6>
        </Col>
        <Col span={12}>
          <p key={"p_price"}>{data.price} руб.</p>
        </Col>
      </Row>
    </>
  )
};


const DiscountIcon = (props) => {
  let discountPrice = props.discountPrice;
  let price = props.price
  let style = props.style
  return (
    <div style={style}>
      {Math.round((discountPrice - price) / (discountPrice / 100))}%
    </div>
  );
};

const ShowRating = (params) => {
  let keyAdd = 0;

  for (const key in params) {
    if (params[key].rating === 5) {
      keyAdd = params[key].rating;
    }
    if (params[key].rating === 4) {
      keyAdd = params[key].rating;
    }
    if (params[key].rating === 3) {
      keyAdd = params[key].rating;
    }
    if (params[key].rating === 2) {
      keyAdd = params[key].rating;
    }
    if (params[key].rating === 1) {
      keyAdd = params[key].rating;
    }
  }

  return <Rate defaultValue={keyAdd} disabled/>;
};

const ShowPhoto = (params) => {
  let arr = [];

  params.photoUpload.map((element) =>
    arr.push(
      <Image
        src={`/image/${element.response.path}`}
        alt={element.response.filename}
        key={element.response.filename}
        preview={{ mask: [<IconSearchPlus key={`icon${element}`} />] }}
      />
    )
  );

  return arr;
};

const Showcase = (props) => {
  const {
    setFavoritesstate,
    setCompareProductsstate,
  } = useContext(ProductContext);
  let ListAnt = props.ListAnt;
  let arr = [];

  for (const key in props.product) {
    let element = props.product[key];
    arr.push(
      <Row className="rowBoxBorder" >
        <Col span={24}>
          <Image.PreviewGroup>
            {element.discount && element.discount > 0 ? (
              <DiscountIcon 
                discountPrice={element.discount} 
                price={element.price} 
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
                  marginTop: "1%",
                  marginLeft: "3%"
                }}
              />
            ) : null}
            <Carousel effect="fade">{ShowPhoto(element)}</Carousel>
          </Image.PreviewGroup>
        </Col>
        <Col span={22} offset={1}>
            <Link
              style={{color: "black", fontWeight: "500"}}
              to={`/showproduct?product=${props.product[key].linkProduct}&id=${props.product[key]._id}`}
            >
              { 
                (element.categoryPraduct === "Диски и колеса бу") ?
                `${element.categoryPraduct} ${element.rimWidth}*${element.diameter} PCD ${element.numberOfBoltHoles}*${element.diameterOfHolesPosition} DIA ${element.hubDIA} ET ${element.departureET}`
                :
                `${element.brand} ${element.width}/${element.height ? element.height + "/" : ""}${element.type} ${element.season}`
              }
            </Link>
        </Col>
        <Col span={22} offset={1}>
          {ShowRating(element.comments)}
        </Col>
        <Col span={22} offset={1}>
          {ParamsData(props.product[key])}
        </Col>
        <Col span={22} offset={1}>
          <ButtonCompareFavorite
              element={element}
              setCompareProductsstate={setCompareProductsstate}
              setFavoritesstate={setFavoritesstate}
            />
        </Col>
      </Row>
    );
  }

  return (
    <List
      style={props.product.length ? null :{  minHeight: 250, marginTop: 150 }}
      loading={props.loadingState}
      grid={ListAnt.grid}
      pagination={
        (typeof ListAnt.pageSize === "number" && arr.length > 0) ?
          ListAnt.pageSize
        :
          null
      }
      dataSource={arr}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
};

function ComparasionProduct(props) {

    return (
      <ComparasionProductStyle>
        <Row>
          <Col xs={{span: 18, offset: 3}} sm={{span: 22, offset: 1}}>
            <Showcase product={props.product} ListAnt={props.ListAnt} loadingState={props.loadingState}/>
          </Col>
        </Row>
      </ComparasionProductStyle>
    )
}

export default ComparasionProduct
