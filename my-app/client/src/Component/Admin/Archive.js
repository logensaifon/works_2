import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Collapse, Table, List } from "antd";
import { getRequest, TotalCounter, ProductOrder } from "./OrdersList";

const { Panel } = Collapse;

const ArchivOrders = (props) => {
    const [orderArchiveState, setOrderArchiveState] = useState([])
    const [currentPagesSizeState, setCurrentPagesSizeState] = useState({current: 1, pageSize: 12})
    const [loadingState, setLoadingState] = useState(true)
    let cleanupFunction = true
  
    
    const columns = [
      {
        title: "data",
        key: "data",
        render: (product) => (
          <List
            footer={[
              <strong>{product.solutions}</strong>
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
            bordered
            dataSource={[product]}
            renderItem={(item) => <ProductOrder data={item} />}
          />
        ),
      },
    ];

  
    useEffect(() => {
      let count = (currentPagesSizeState.current * currentPagesSizeState.pageSize) - currentPagesSizeState.pageSize

      setLoadingState(true)

      getRequest(`/Admin/archive?limit=${currentPagesSizeState.pageSize}&skip=${count}`).then((result) => {

        if (cleanupFunction)
        if (result.lengt === 0) {

          setOrderArchiveState(result);
          setLoadingState(false)
        } else {

          setOrderArchiveState(result.reverse());
          setLoadingState(false)
        }
      });

      return ()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        cleanupFunction = false
      }
    }, []);
  
    return (
      <Table 
        columns={columns} 
        dataSource={orderArchiveState} 
        loading={loadingState} 
        pagination={
          {
          onChange: (current, pageSize) => {
            setCurrentPagesSizeState({current: current}, {pageSize: pageSize})
          },
          showSizeChanger: false,
          total: props.orderArchiveCountState.count,
          pageSize: 12,
        }
        }
      />
    )
};

  
function Archive() {  
  const [orderArchiveCountState, setOrderArchiveCountState] = useState()
  let cleanupFunction = true

  useEffect(() => {
    getRequest("/Admin/archivecount").then((result) => {

      if (cleanupFunction)
      setOrderArchiveCountState(result);
    });

    return ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanupFunction = false
    }
  }, []);

    return (
      <Collapse>
        <Panel header={`архив заказов все количество ${orderArchiveCountState ? orderArchiveCountState.count : "загрузка..." }`} key="archiveOrders">
          <ArchivOrders orderArchiveCountState={orderArchiveCountState} />
        </Panel>
      </Collapse>
    );
};


export default Archive