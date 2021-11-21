import React, { useState } from 'react'
import { CreateProductStyle } from "./CreateProductStyle";
import SelectionCategory from './SelectionCategory';
import { CreateContext } from "./Context";


function CreateProduct() {
  const [selection, setSelection] = useState("")

    return (
      <CreateContext.Provider value={{ selection, setSelection }} >
        <CreateProductStyle>
          <SelectionCategory />
        </CreateProductStyle>
      </CreateContext.Provider>
    )
}


export default CreateProduct
