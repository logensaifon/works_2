import React, { useCallback, useContext, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { InputNumber, Row, Col, Popconfirm } from "antd";
import { IconAiOutlineDelete } from "../icon";
import { CardsProductStyle, CardBasketStyle } from "./CardsProductStyle";
import { Link } from "react-router-dom";
import { callLocalstorage } from "../ViewedList/ViewedList";
import { ProductContext } from "../../Context";
import { basketReadLocalStoragValue } from "../../Basket/Basket";
import { getRequest } from "../ViewedList/ViewedList";


const getLocalstoreg = (storageName) => {
  return new Promise((resolve, reject) => {
    resolve(JSON.parse(localStorage.getItem(storageName)));
  });
};

const allPrice = (data, setRealAllPrice) => {
  let price = 0
    
  getLocalstoreg("basket").then((result)=>{
    
    for (const key in data) {
        const dataKey = data[key]

      for (const key in result) {
        const resultKey = result[key]

        if (resultKey._id === dataKey._id) {

          let dataPrice = dataKey.price
          let stochPrice = (resultKey.quantityProduct * dataPrice)
          price = price + stochPrice 
          
          setRealAllPrice(price)
        }
      }
    }
  })
}


function CardsProduct() {
  const { addBasket, setAddBasketstate, setOrderData } = useContext(ProductContext);
  const [productBasketData, setProductBasketData] = useState([]);
  const [realAllPrice, setRealAllPrice] = useState(0);

  const createOrderData = (requestResult, localstorageBasket) => {
    let arr = []

    for (const key_1 in requestResult) {

      for (const key_2 in localstorageBasket) {

        if (requestResult[key_1]._id === localstorageBasket[key_2]._id) {

          arr.push({id: requestResult[key_1]._id, quantityProduct: localstorageBasket[key_2].quantityProduct})
        }
      }
    }

    setOrderData(arr)
  }

  useEffect(() => {
    let localstoragestate = callLocalstorage("basket");
    if (localstoragestate.length === 0) {
      setProductBasketData("not found");
    }

    const IdrequestArray = localstoragestate.map((id)=>id._id)
    getRequest(IdrequestArray).then((result) => {
    
      setProductBasketData(result);
      allPrice(result, setRealAllPrice)
      createOrderData(result, localstoragestate)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addBasket]);

  const Cards = () => {
    const onChange = (value, indexId) => {
      let localStorageBasket = callLocalstorage("basket");

      for (const key in localStorageBasket) {
        if (localStorageBasket[key]._id === indexId && value > 0) {
          localStorageBasket[key].quantityProduct = value;

          let jsonstringify = JSON.stringify(localStorageBasket);
          localStorage.setItem("basket", jsonstringify);
        }
      }

      setAddBasketstate(basketReadLocalStoragValue("basket"))
      allPrice(productBasketData, setRealAllPrice)
    };

    const localStorageDelete = (indexId) => {
      let localStorageBasket = callLocalstorage("basket");

      for (const key in localStorageBasket) {
        if (localStorageBasket[key]._id === indexId) {
          localStorageBasket.splice(key, 1);
          if (localStorageBasket.length === 0) {
            localStorage.removeItem("basket");
          } else {
            let jsonstringify = JSON.stringify(localStorageBasket);
            localStorage.setItem("basket", jsonstringify);
          }
        }
      }

      setAddBasketstate(basketReadLocalStoragValue("basket"))
    };

    const getdefaultStock = useCallback((params) => {
      for (const key in addBasket) {
        if (addBasket[key]._id === params) {
          return addBasket[key].quantityProduct;
        }
      }
    }, []);


    const confirmlocalStorageDelete = (indexId) => {
      localStorageDelete(indexId)
      window.scrollTo(0, 200);
    }
    

    if (productBasketData.length === 0) {
      return "загрузка...";
    } else {
      return productBasketData.map((index) => {
        return (
          <CardBasketStyle key={`basket_${index._id}`}>
            <Row gutter={[4, 4]}>
              <Col span={6}>
                <img
                  alt="example"
                  src={`/image/${index.photoUpload[0].response.path}`}
                />
              </Col>
              <Col span={9}>
                <Link
                  to={`/ShowProduct?product=${index.linkProduct}&id=${index._id}`}
                >
                  { 
                    (index.categoryPraduct === "Диски и колеса бу") ?
                    `${index.categoryPraduct} ${index.rimWidth}*${index.diameter} PCD ${index.numberOfBoltHoles}*${index.diameterOfHolesPosition} DIA ${index.hubDIA} ET ${index.departureET}`
                    :
                    `${index.brand} ${index.width}/${index.height ? index.height + "/" : ""}${index.type} ${index.season}`
                  }
                </Link>
                <Popconfirm
                  title="удалить?"
                  onConfirm={()=>confirmlocalStorageDelete(index._id)}
                  okText="Да"
                  cancelText="Нет"
                >
                  <button>
                    <IconAiOutlineDelete />
                  </button>
                </Popconfirm>
              </Col>
              <Col xs={{span: 5}} sm={{span: 4}}>
                <InputNumber
                  min={1}
                  max={index.stock}
                  defaultValue={getdefaultStock(index._id)}
                  onChange={(value) => onChange(value, index._id)}
                  type={"number"}
                />
              </Col>
              <Col span={4}>
                <h6>{index.price} руб.</h6>
              </Col>
            </Row>
          </CardBasketStyle>
        );
      });
    }
  };

  if (addBasket === "not defined" || addBasket === 0) {
    return null;
  } else {
    return (
      <CardsProductStyle>
        <h6 className="h6Basket">Корзина {productBasketData.length}</h6>
        {!productBasketData ? "loading..." : <Cards />}
        <div className="boxH6Total">
          <h6 className="h6Total">Итого {realAllPrice === 0 ? "..." : realAllPrice } руб.</h6>
        </div>
      </CardsProductStyle>
    );
  }
}

export default CardsProduct;
