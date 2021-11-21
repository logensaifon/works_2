import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table, Row, Col, List, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { ProductOrderStyle } from "./ProductOrderStyle";
import Archive from "./Archive";


const getRequest = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    const xhrOnload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        let jsonparse = JSON.parse(xhr.response);

        resolve(jsonparse);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.open("get", url, true);
    xhr.onload = xhrOnload;
    xhr.send();
  });
};

const universalRequest = (method, url, body) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    let jsonstringifye = JSON.stringify(body);

    const xhrOnload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.open(method, url, true);
    xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
    xhr.onload = xhrOnload;
    xhr.send(jsonstringifye);
  });
};

const ProductOrder = (props) => {
  const [productDataState, setProductDataState] = useState([]);
  let cleanupFunction = true
  // props.setLoadingState(true)

  const asyncgetRequest = async (data) => {
    let arr = [];

    for (const key in data) {
      await getRequest(`/localstorage-product-getone/${data[key].id}`).then(
        (result) => {
          let Result = result;
          Result.quantityProduct = data[key].quantityProduct;
          arr[key] = Result;
        }
      );

      if (cleanupFunction)
      if (+key === data.length - 1) {
        setProductDataState(arr);
      }
    }
  };

  useEffect(() => {
    asyncgetRequest(props.data);

    return ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanupFunction = false
    }
  }, []);

  // props.setLoadingState(false)

  return productDataState.map((index) => {
    return (
      <ProductOrderStyle key={`basket_${index._id}`}>
        <Row gutter={[4, 4]}>
          <Col xs={{ span: 24 }} sm={{ span: 6 }}>
            <img
              alt="example"
              src={`/image/${index.photoUpload[0].response.path}`}
            />
          </Col>
          <Col span={18}>
            <Row gutter={[4, 4]}>
              <Col sm={{ span: 12 }}>
                <strong>кол. {index.quantityProduct}</strong>
              </Col>
              <Col sm={{ span: 12 }}>
                <strong>{index.price} руб.</strong>
              </Col>
              <Col xs={{ span: 24 }}>
                <strong>
                  всего {index.price * index.quantityProduct} руб.
                </strong>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Link
              to={`/ShowProduct?product=${index.linkProduct}&id=${index._id}`}
            >
              {`${index.brand} ${index.width}/${index.height ? index.height + "/" : ""}${index.type} ${index.season}`}
            </Link>
          </Col>
        </Row>
      </ProductOrderStyle>
    );
  });
};

const TotalCounter = (props) => {
  const [counterState, setCounterState] = useState(0);
  let cleanupFunction = true


  const asyncgetRequest = async (data) => {
    let arr = [];
    let counter = 0;

    for (const key in data) {
      await getRequest(`/localstorage-product-getone/${data[key].id}`).then(
        // eslint-disable-next-line no-loop-func
        (result) => {
          let Result = result;
          Result.quantityProduct = data[key].quantityProduct;
          arr[key] = Result;

          counter += arr[key].quantityProduct * arr[key].price;
        }
      );

      if (cleanupFunction)
      if (+key === data.length - 1) {
        setCounterState(counter);
      }
    }
  };

  useEffect(() => {
    asyncgetRequest(props.data);
    
    return ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanupFunction = false
    }
  }, []);

  return <strong>{counterState}</strong>;
};


const Orders = (props) => {
  const [ordersState, setOrdersstate] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const ordersStateValue = ordersState.length
  const setOrdersCounterState = props.setOrdersCounterState
  let cleanupFunction = true


  const cencell = (params) => {
    let data = params;
    data.solutions = "отменили";

  
    universalRequest("post", "/Admin/archive", data).then((result) => {
      if (result === "все прошло успешно") {
        universalRequest("delete", `/Admin/orders/${data._id}`).then((result)=>{
          setOrdersstate([])
        })
      }
    });

    getRequest("/Admin/orderscount").then((result) => {

      if (cleanupFunction)
      setOrdersCounterState(result)
    });
  };
  
  const send = (params) => {
    let data = params;
    data.solutions = "продали";
  
    universalRequest("post", "/Admin/archive", data).then((result) => {
      if (result === "все прошло успешно") {
        universalRequest("delete", `/Admin/orders/${data._id}`).then((result)=>{
          setOrdersstate([])
        })
      }
    });

    getRequest("/Admin/orderscount").then((result) => {

      if (cleanupFunction)
      setOrdersCounterState(result)
    });
  };

  const confirmSend = (data)=>{
    send(data)
  }

  const confirmCencell = (data)=>{
    cencell(data)
  }
  
  const columns = [
    {
      title: "data",
      key: "data",
      render: (product) => (
        <List
          footer={[
            <Popconfirm
              key ={`send_${Math.random()}`}
              title="отправлен?"
              onConfirm={()=>confirmSend(product)}
              okText="Да"
              cancelText="Нет"
            >
              <button
                style={{
                  all: "unset",
                  cursor: "pointer",
                  padding: "8px",
                }}
              >
                отправлен
              </button>
            </Popconfirm>,
              <Popconfirm
                key ={`close_${Math.random()}`}
                title="отменить?"
                onConfirm={()=>confirmCencell(product)}
                okText="Да"
                cancelText="Нет"
              >
                <button
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    padding: "8px",
                  }}
                >
                  отменить
                </button>
              </Popconfirm>
          ]}
          bordered
          dataSource={[product]}
          renderItem={(item) => (
            <>
              <List.Item>
                <div>
                  <strong>Имя:</strong> {`${item.fullName}`}
                </div>
              </List.Item>
              <List.Item>
                <div>
                  <strong>Телефон:</strong> {`${item.phone}`}
                </div>
              </List.Item>
              <List.Item>
                <div>
                    <strong>способ получение:</strong> {(item.wayOfGetting === "delivery") ? "доставка" : "самовывоз"}
                </div>
              </List.Item>
              {
                (item.wayOfGetting === "delivery") ?
                <>
                  <List.Item>
                    <div>
                      <strong>Регион:</strong> {`${item.region}`}
                    </div>
                  </List.Item>
                  <List.Item>
                    <div>
                      <strong>Город:</strong> {`${item.city}`}
                    </div>
                  </List.Item>
                  <List.Item>
                    <div>
                      <strong>адрес:</strong> {`${item.address}`}
                    </div>
                  </List.Item>
                </>
                :
                null
              }
              <List.Item>
                <div>
                  <strong>день, время:</strong> {`${item.date}`}
                </div>
              </List.Item>
            </>
          )}
        />
      ),
    },
    {
      title: "Продукт",
      key: "orderProduct",
      dataIndex: "orderProduct",
      render: (product) => (
        <List
          footer={<TotalCounter data={product} />}
          key="orderList"
          bordered
          dataSource={[product]}
          renderItem={(item) => <ProductOrder data={item} />}
        />
      ),
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 200);

    getRequest("/Admin/orders").then((result) => {

      if (cleanupFunction)
      setLoadingState(true)

      if (result.length > 0) {

        setOrdersstate(result.reverse());
        setLoadingState(false)
      } else {

        setOrdersstate(result)
        setLoadingState(false)
      }
    });

    return ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanupFunction =false
    }
  }, [ordersStateValue]);

  return <Table columns={columns} dataSource={ordersState}  loading={loadingState} />;
};

function OrdersList(props) {
  return (
    <>
      <Orders ordersCounterState={props.ordersCounterState}/>
      <Archive />
    </>
  );
}

export { getRequest, TotalCounter, ProductOrder };
export default OrdersList;
