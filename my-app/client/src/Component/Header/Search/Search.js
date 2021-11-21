import React, { useState } from "react";
import { Button } from "./Button";
import { SearchStyle } from "./SearchStyle";
import { Link } from "react-router-dom";
import { IconSearch } from "../icon";

function Search() {
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [openingClosingSearch, setOpeningClosingSearch] = useState("открыть поиск");
  const [querySearch, setQuerySearch] = useState({ query: "" });

  const ChangeState = () => {
    searchDisplay === false ? setSearchDisplay(true) : setSearchDisplay(false);
    openingClosingSearch === "открыть поиск"
      ? setOpeningClosingSearch("закрыт поиск")
      : setOpeningClosingSearch("открыть поиск");
  };

  const onchange = (e) => {
    let searchValue = e.target.value;
    let shearchText = "";

    for (const key in searchValue) {
      if (searchValue[key] === " ") {

        shearchText += "+";
      } else {

        shearchText += searchValue[key]
      }
    }
    
    setQuerySearch({query: shearchText})
  };

  const onclick = (e) => {
    document.getElementById("searchId").value = ""
    setQuerySearch({query: ""})
  };

  return (
    <>
      <Button onClick={ChangeState}>{openingClosingSearch}</Button>
      <SearchStyle handle={searchDisplay}>
        <input id="searchId" placeholder="Поиск по товарам" onChange={onchange}/>
        <Link to={`/search/?query=${querySearch.query}`} onClick={onclick}>
          <IconSearch size={20} />
        </Link>
      </SearchStyle>
    </>
  );
}

export default Search;
