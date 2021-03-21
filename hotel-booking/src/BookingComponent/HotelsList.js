import React from "react";
import ProductsItem from "../BookingComponent/HotelsItem";
import { ProductWrapper } from "../Components/Styles";
import hotelsmobx from "../BookingComponent/HotelsMobx";
import { observer } from "mobx-react";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";

const Hotels = () => {
  const [query, setQuery] = useState("");

  const hotelList = hotelsmobx.hotels
    .filter((hotel) => hotel.name.toLowerCase().includes(query.toLowerCase()))
    .map((hotel) => <ProductsItem hotel={hotel} key={hotel.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ProductWrapper>{hotelList}</ProductWrapper>
    </div>
  );
};
export default observer(Hotels);
