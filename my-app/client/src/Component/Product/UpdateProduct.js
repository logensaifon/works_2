import React, { useContext, useState } from "react";
import { AdminContext } from "../Context";
import { Redirect, useParams } from "react-router-dom";
import { CreateProductStyle } from "./CreateProduct/CreateProductStyle";
import UpdateSelectionCategory from "./CreateProduct/UpdateSelectionCategory";
import { CreateContext } from "./CreateProduct/Context";

function UpdateProduct() {
  const { userAdmin } = useContext(AdminContext);
  const [selection, setSelection] = useState("")
  const { id } = useParams()

  if (userAdmin) {
    return (
      <CreateContext.Provider value={{ selection, setSelection }} >
        <CreateProductStyle>
          <UpdateSelectionCategory productid={id}/>
        </CreateProductStyle>
      </CreateContext.Provider>
    );
  } else {
    // return <Redirect to={`ShowProduct?product=${sendParamsUpdatePraducteState.linkProduct}&id=${sendParamsUpdatePraducteState._id}`}/>
    return <Redirect to="/" />;
  }
}

export default UpdateProduct;
