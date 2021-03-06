import React from "react";
import { SearchBarStyled } from "../Components/Styles";

function SearchBar(props) {
  return (
    <SearchBarStyled
      placeholder="Search for a product"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
}

export default SearchBar;
