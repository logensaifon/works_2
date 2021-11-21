import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../Context";
import "antd/dist/antd.css";
import { Menu, Row, Col, Badge, Space } from "antd";
import LoginForm from "./Avtorizacion/LoginForm";
import { Route, Switch, Link, useRouteMatch, Redirect } from "react-router-dom";
import Common from "./Common";
import OrdersList from "./OrdersList";
import { IconCommentsO, IconUpload } from "./ikon";
import CommentUsersList, { receiveComment } from "./CommentUsersList";
import UpdateProduct from "../Product/UpdateProduct";
import CreateProduct from "../Product/CreateProduct/CreateProduct";
import { TestContext } from "./context";
import { getRequest } from "./OrdersList";




const AdminMenu = (props) => {
  const { url } = useRouteMatch();
  const commentCountCountstate = props.commentCountCountstate
  const {ordersCounterState, setOrdersCounterState} = props.ordersCounterState

  useEffect(()=>{

    getRequest("/Admin/orderscount").then((result)=>{

      setOrdersCounterState(result)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Row>
      <Col xs={24} sm={12} lg={24}>
        <Menu style={{ width: "100%", background: "#ededed45" }} mode="inline">
          <Menu.Item key="common">
            <Link to={`${url}/common`}>общие</Link>
          </Menu.Item>
          <Menu.Item key="orderslist">
            <Link to={`${url}/orderslist`}> заказы {" "} 
              <Badge
                    count={ordersCounterState.count}
                    style={{
                      color: "#fff",
                      backgroundColor: "red",
                      marginLeft: "10px",
                    }}
                  />
            </Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col xs={24} sm={12} lg={24}>
        <Menu style={{ width: "100%", background: "#ededed45" }} mode="inline">
          <Menu.Item key="common">
            <Link to={`${url}/commentlist`}>
              <Space>
                <IconCommentsO size={20} /> комментарий{" "}
                <Badge
                  count={commentCountCountstate.count}
                  style={{
                    color: "#fff",
                    backgroundColor: "red",
                  }}
                />
              </Space>
            </Link>
          </Menu.Item>
          <Menu.Item key="orderslist">
            <Link to={`${url}/createproduct`}>
              <IconUpload size={20} /> добавить продукт
            </Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

function Admin() {
  const { userAdmin } = useContext(AdminContext);
  const { path, url } = useRouteMatch();
  const [commentCountCountstate, setCommentCountCountstate] = useState(0)
  const [ordersCounterState, setOrdersCounterState] = useState(0)
  const [winterTires, setWinterTires] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 200);

    receiveComment("get", "/receivecommentcount").then((result)=>{

      setCommentCountCountstate(JSON.parse(result))
    })
  }, [])

  const AdminContent = () => {
    return (
      <Switch>
        <Route
          exact
          path={`${path}`}
          children={<Redirect to={`${url}/common`} />}
        />
        <Route path={`${path}/common`}>
          <TestContext.Provider value={{winterTires, setWinterTires}}>
            <Common/>
          </TestContext.Provider>
        </Route>
        <Route path={`${path}/orderslist`} component={()=><OrdersList setOrdersCounterState={setOrdersCounterState}/>} />
        <Route path={`${path}/commentlist`} component={()=><CommentUsersList setCommentCountCountstate={setCommentCountCountstate} />} />
        <Route path={`${path}/createproduct`} component={CreateProduct} />
        <Route path={`${path}/updateproduct/:id`} component={UpdateProduct} />
        <Route children={<Redirect to="/"/>} />
      </Switch>
    );
  };

  if (userAdmin) {
    return (
      <Row gutter={[0, 16]}>
        <Col
          span={24}
          style={{
            textAlign: "center",
            background: "#ededed45",
            marginTop: "16px",
            padding: "0",
          }}
        >
          <h5 style={{ color: "#222222" }}>мой кабинет</h5>
        </Col>
        <Col xs={{ span: 22, offset: 1 }} lg={6}>
          <AdminMenu commentCountCountstate={commentCountCountstate} ordersCounterState={{ordersCounterState, setOrdersCounterState}}/>
        </Col>
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 15 }}>
          <AdminContent />
        </Col>
      </Row>
    );
  } else {
    return <LoginForm />;
  }
}

export default Admin;
