import React from "react";
import "./PopularCategories.css";
import ProductCategoryList from "./ProductCategoryList";
import { Link } from "react-router-dom";

const SizeList = (params) => {
  let mylink;

  switch (params) {
    case "Литые":
      mylink = "/AlloyWheels";
      break;
    case "Штампованные":
      mylink = "/Stamped";
      break;
    case "На Matiz":
      mylink = "/onMatiz";
      break;
    case "Шины на УАЗ":
      mylink = "/TiresForUAZ";
      break;
    case "на Ниву":
      mylink = "/ToTheNiva";
      break;

    default:
      mylink = `/${params}`;
      break;
  }

  return mylink;
};

const CategoryName = (params) => {
  let mylink;

  switch (params) {
    case "Зимние шины бу":
      mylink = "/WinterTires";
      break;

    case "Легкогрузовые шины бу":
      mylink = "/LightTruckTires";
      break;

    case "Грузовые шины бу":
      mylink = "/TruckTires";
      break;

    case "Диски и колеса бу":
      mylink = "/DiscsAndWheels";
      break;

    case "Летние шины бу":
      mylink = "/SummerTires";
      break;

    case "Мотошины бу":
      mylink = "/MotorcycleTires";
      break;

    default:
      break;
  }

  return mylink;
};

const CreateBlock = (params) => {
  const dataCategoryName = `/category${CategoryName(params[1])}`;

  const dimensions = (elem, _href) => {
    const arr = elem.map((key) => {
      if (typeof key === "object") {
        return (
          <div className="dimensions" key={"div" + key[0]}>
            <span />
            <Link to={`${_href}${SizeList(key[0])}`} id={SizeList(key[0])}>
              <li>{key[0]}</li>
            </Link>
          </div>
        );
      } else {
        return (
          <div className="dimensions" key={"div" + key}>
            <span />
            <Link to={`${_href}${SizeList(key)}`} id={key}>
              <li>{key}</li>
            </Link>
          </div>
        );
      }
    });

    return arr;
  };

  return (
    <div className=" col-sm-6 col-md-6 col-lg-4 p-0">
      <div className="category">
        <Link to={dataCategoryName} className="imgCategory">
          <img src={params[0]} alt="" />
        </Link>
        <ul className="divTireDiameter">
          <Link to={dataCategoryName}>
            <h6>{params[1]}</h6>
          </Link>
          {dimensions(params[2], dataCategoryName)}
        </ul>
      </div>
    </div>
  );
};

function PopularCategories() {
  return (
    <div className="PopularCategories">
      <div className="container-fluid pt-4">
        <div className="row justify-content-center">
          <h4>Популярные категории</h4>
        </div>

        <div className="row pl-5 pr-5 pt-4">
          {CreateBlock(ProductCategoryList.list1)}
          {CreateBlock(ProductCategoryList.list2)}
          {CreateBlock(ProductCategoryList.list3)}
          {CreateBlock(ProductCategoryList.list4)}
          {CreateBlock(ProductCategoryList.list5)}
          {CreateBlock(ProductCategoryList.list6)}
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;
