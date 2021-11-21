import React, { useContext, useEffect } from "react";
import { ProductContext } from "../Context";
import { ButtonBasket } from "./ButtonBasket";
import { IconCartArrowDown } from "./icon";

const readLocalStoragValue = (params) => {
  let test = localStorage.getItem(params);
  let jsonparser = JSON.parse(test);

  if (jsonparser === null || jsonparser === undefined) {
    return (jsonparser = 0);
  } else {
    return jsonparser;
  }
};

const MaximumAllowedNumber = (count, maxCount) => {
  if (count !== 0) {
    if (count >= maxCount) {
      return maxCount + "+";
    } else {
      return count;
    }
  } else {
    return count;
  }
};

const allBasketPrice = (product) => {

  if (product !== 0) {
    let allPrice = 0;

    for (const key in product) {

      allPrice += product[key].quantityProduct * product[key].price;
    }

    return MaximumAllowedNumber(allPrice, 9999);
  } else {
    return 0;
  }
};

function Basket({ className, size }) {
  const { addBasket, setAddBasketstate } = useContext(ProductContext);

  useEffect(() => {
    setAddBasketstate(readLocalStoragValue("basket"));
  }, [setAddBasketstate]);

  return (
    <ButtonBasket to="/basket" className={className}>
      <p>Корзина</p>
      <IconCartArrowDown size={size} />
      <div className="sewsBasket">
        {addBasket === 0 ? MaximumAllowedNumber(0, 99) : MaximumAllowedNumber(addBasket.length, 99)}
      </div>
      <div className="price">
        {allBasketPrice(addBasket)}
        {" руб."}
      </div>
    </ButtonBasket>
  );
}

const basketReadLocalStoragValue = readLocalStoragValue
export{ basketReadLocalStoragValue }
export default Basket;
