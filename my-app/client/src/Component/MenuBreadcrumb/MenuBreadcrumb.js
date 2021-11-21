import React from "react";
import "antd/dist/antd.css";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";


function MenuBreadcrumb(props) {
  let PathPageName = props.PathPageName
  let arr = []

  arr.push(
    {
      path: "/",
      breadcrumbName: "Главная",
    }
  )

  
  for (const key in PathPageName) {
    arr.push(
      {
        path: PathPageName[key][0],
        breadcrumbName: (PathPageName[key][1]) ? PathPageName[key][1] : PathPageName[key][0],
      }
    )
  }

 
  function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;

    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    );
  }  

  return <Breadcrumb routes={arr} itemRender={itemRender}/>
}


export default MenuBreadcrumb 
