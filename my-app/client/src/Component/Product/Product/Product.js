import React, { useContext, useEffect } from "react";
import "antd/dist/antd.css";
import { Carousel, Image, Rate, List } from "antd";
import { ProductStyle } from "./ProductStyle";
import { ShowcaseStyle } from "./ShowcaseStyle";
import { IconSearchPlus } from "../icon";
import { NameAndRatingStyle } from "./NameAndRatingStyle";
import { Link } from "react-router-dom";
import { AdminContext, ProductContext } from "../../Context";
import { readLocalStoragValue } from "../../footerPanel/FooterPanel";
import ButtonCompareFavorite, {
  AddCartAndCost,
} from "./ButtonCompareFavoriteAddcart";
import ButtonUpdateDelete from "../../Admin/AdminTools/Tools";

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

  return <Rate defaultValue={keyAdd} disabled />;
};

const ShowPhoto = (params) => {
  let arr = [];

  params.photoUpload.map((element) =>
    arr.push(
      <Image
        style={{height: "214px"}}
        src={`/image/${element.response.path ? element.response.path : "imgnote"}`}
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
    setProductsViewedstate,
    setAddBasketstate,
  } = useContext(ProductContext);
  const { userAdmin } = useContext(AdminContext);
  let ListAnt = props.ListAnt;
  let arr = [];

  useEffect(() => {
    readLocalStoragValue("viewed", setProductsViewedstate);
  }, [setProductsViewedstate]);

  for (const key in props.product) {
    let element = props.product[key];
    arr.push(
      <ShowcaseStyle>
        {userAdmin ? (
          <ButtonUpdateDelete
            product={element}
            style={{ marginLeft: "3%", marginTop: "6px" }}
          />
        ) : null}
        <Image.PreviewGroup>
          {(element.discount && element.discount > 0 && element.discount !== element.price) ? (
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
                marginTop: "4px",
                marginLeft: "3%"
              }}
            />
          ) : null}
          <Carousel effect="fade">{ShowPhoto(element)}</Carousel>
        </Image.PreviewGroup>
        <NameAndRatingStyle>
          <div className="nameBox">
            {
              (element.categoryPraduct === "Диски и колеса бу") ?
              <Link
                to={`/showproduct?product=${props.product[key].linkProduct}&id=${props.product[key]._id}`}
              >
                {`${element.categoryPraduct} ${element.rimWidth}*${element.diameter} PCD ${element.numberOfBoltHoles}*${element.diameterOfHolesPosition} DIA ${element.hubDIA} ET ${element.departureET}`}
              </Link>
              :
              <Link
                to={`/showproduct?product=${props.product[key].linkProduct}&id=${props.product[key]._id}`}
              >
                {`${element.brand} ${element.width}/${element.height ? element.height + "/" : ""}${element.type} ${element.season}`}
              </Link>
            }
          </div>
          {ShowRating(element.comments)}
          <ButtonCompareFavorite
            element={element}
            setCompareProductsstate={setCompareProductsstate}
            setFavoritesstate={setFavoritesstate}
            style={{
              position: "absolute",
              width: "auto",
              right: 0,
              bottom: 0,
              marginLeft: "6px",
              marginBottom: "8px",
              marginRight: "4px",
            }}
          />
        </NameAndRatingStyle>
        {AddCartAndCost(element, setAddBasketstate)}
      </ShowcaseStyle>
    );
  }

  return (
    <List
      style={props.product && props.product.length ? null :{  minHeight: 250, marginTop: 150 }}
      loading={props.loadingState}
      grid={ListAnt.grid}
      pagination={
        (props.pagination && props.product.length) ?
          {
            onChange: (current, pageSize) => {
              props.functionChangeProductState(current, pageSize)
            },
            showSizeChanger: false,
            total: props.totalCountState,
            pageSize: (typeof ListAnt.pageSize !== "number") ? 12 : ListAnt.pageSize,
          }
        :
        false
      }
      dataSource={arr}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
};

function Product(props) {

  return (
    <ProductStyle>
      <Showcase 
        product={props.product} 
        ListAnt={props.ListAnt} 
        loadingState={props.loadingState} 
        totalCountState={props.totalCountState} 
        functionChangeProductState={props.functionChangeProductState}
        pagination={props.pagination}
      />
    </ProductStyle>
  );
}

export { ShowRating, DiscountIcon };
export default Product;
