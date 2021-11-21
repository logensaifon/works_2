import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import { AddCartAndCostStyle } from "./AddCartAndCostStyle";
import { IconShoppingCartOk } from "../icon";
import { IconAiOutlineDelete, IconHeartO, IconSliders } from "../../footerPanel/icon";
import { readLocalStoragValue } from "../../footerPanel/FooterPanel";
import { ButtonCompareFavoriteStyle } from "./ButtonCompareFavoriteStyle";
import { basketReadLocalStoragValue } from "../../Basket/Basket";
import { useRouteMatch } from "react-router-dom";

const checkColorButton = (element, localstorageName) => {
  let test = localStorage.getItem(localstorageName)
  if (test) {
    let parsercomparison = JSON.parse(localStorage.getItem(localstorageName));
    let result

      for (const key in parsercomparison) {

        if (parsercomparison[key]._id === element._id) {

          
          return {color: "red"};
        } else {
          
          result = {color: "black"};
        }
      }
      
      return result

  } else {

    return {color: "black"};
  }
};

const AddCartAndCost = (params, setAddBasketstate) => {
  return (
    <AddCartAndCostStyle>
      <div className="priceBox">{`${params.price} руб.`}</div>
      <Button
        type="primary"
        size="large"
        onClick={() => addToShoppingCart(params, setAddBasketstate)}
        icon={<IconShoppingCartOk size={25} />}
      >
        добавить в корзину
      </Button>
    </AddCartAndCostStyle>
  );
};

const addAsFavorites = (params, setFavoritesstate) => {
  if (localStorage.getItem("favorite") && JSON.parse(localStorage.getItem("favorite")).length > 0) {
    let parserfavorite = JSON.parse(localStorage.getItem("favorite"));

    for (const key in parserfavorite) {
      
      if (parserfavorite[key]._id === params._id) {

        return
      } else if (key === `${parserfavorite.length - 1}`) {

        parserfavorite.push(params);
        localStorage.setItem("favorite", JSON.stringify(parserfavorite));
        readLocalStoragValue("favorite", setFavoritesstate);
        return
      }
    }
  } else {

    localStorage.setItem("favorite", JSON.stringify([params]));
    readLocalStoragValue("favorite", setFavoritesstate);
    return
  }
};

const addForComparisons = (params, setCompareProductsstate) => {
  if (localStorage.getItem("comparison") && JSON.parse(localStorage.getItem("comparison")).length > 0) {
    let parsercomparison = JSON.parse(localStorage.getItem("comparison"));

    for (const key in parsercomparison) {
      if (parsercomparison[key]._id === params._id) {

        return
      } else if (key === `${parsercomparison.length - 1}`) {

        parsercomparison.push(params);
        localStorage.setItem("comparison", JSON.stringify(parsercomparison));
        readLocalStoragValue("comparison", setCompareProductsstate);
        return
      }
    }
  } else {

    localStorage.setItem("comparison", JSON.stringify([params]));
    readLocalStoragValue("comparison", setCompareProductsstate);
    return
  }
};

const deleteLocolStorage = (idElement, storageName, callbackState) => {
  if (localStorage.getItem(storageName)) {
    let parsercomparison = JSON.parse(localStorage.getItem(storageName));

    for (const key in parsercomparison) {
      if (parsercomparison[key]._id === idElement) {

        parsercomparison.splice(key, 1)
        localStorage.setItem(storageName, JSON.stringify(parsercomparison));
        readLocalStoragValue(storageName, callbackState);
        return
      }
    }
  }
}


const addToShoppingCart = (params, setAddBasketstate, quantity) => {
  let _params = params;
  let quantityProduct = null;

  quantity === undefined ? quantityProduct = 1 : quantityProduct = quantity;
  _params.quantityProduct = quantityProduct;
  
  if (localStorage.getItem("basket")) {
    let parserbasket = JSON.parse(localStorage.getItem("basket"));

    for (const key in parserbasket) {
     
      if ((parserbasket[key]._id === params._id) && (parserbasket[key].quantityProduct < params.stock)) {

        parserbasket[key].quantityProduct += quantityProduct;
        localStorage.setItem("basket", JSON.stringify(parserbasket));
        setAddBasketstate(basketReadLocalStoragValue("basket"));
        return
      } else if ((parserbasket[key]._id !== _params._id) && (key === `${parserbasket.length - 1}`)) {

        parserbasket.push(_params);
        localStorage.setItem("basket", JSON.stringify(parserbasket));
        setAddBasketstate(basketReadLocalStoragValue("basket"));
        return
      }
    }

  } else {
    localStorage.setItem("basket", JSON.stringify([_params]));
    setAddBasketstate(basketReadLocalStoragValue("basket"));
    return 
  }
};

function ButtonCompareFavorite(props) {
  const { path } = useRouteMatch()

  const ButtoniconAdd = () => {
    return (
      <>
        <button
          onClick={() =>{
            addForComparisons(props.element, props.setCompareProductsstate)
          }}
        >
          <IconSliders
            size={20}
            style={checkColorButton(props.element, "comparison")}
          />
        </button>
        <button
          onClick={() => {
            addAsFavorites(props.element, props.setFavoritesstate)
          }}
        >
          <IconHeartO
            size={20}
            style={checkColorButton(props.element, "favorite")}
          />
        </button>
      </>
    )
  }

  const ButtoniconDelete = () => {
    switch (path) {
      case "/comparelist":
        return (
          <button
            onClick={() => {
              deleteLocolStorage(props.element._id,"comparison", props.setCompareProductsstate)
            }}
          >
            <IconAiOutlineDelete
              size={20}
            />
          </button>
        )

        case "/favoriteslist":
          return (
            <button
              onClick={() => {
                deleteLocolStorage(props.element._id, "favorite", props.setFavoritesstate)
              }}
            >
              <IconAiOutlineDelete
                size={20}
              />
            </button>
          )
    
      default:
        return null
    } 
  }
  

  return (
    <ButtonCompareFavoriteStyle style={props.style}>
      {(path === "/comparelist" || path === "/favoriteslist")  ? <ButtoniconDelete /> : <ButtoniconAdd />}
    </ButtonCompareFavoriteStyle>
  );
}

export { addAsFavorites, addForComparisons, addToShoppingCart, AddCartAndCost };
export default ButtonCompareFavorite;
