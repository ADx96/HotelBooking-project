import React from "react";
import HotelItem from "../BookingComponent/HotelsItem";
import { ProductWrapper } from "../Components/Styles";
import hotelsmobx from "../BookingComponent/HotelsMobx";
import { observer } from "mobx-react";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";

const Hotels = () => {
  const [query, setQuery] = useState("");

  const hotelList = hotelsmobx.hotels
    .filter((hotel) =>
      hotel.hotelname.toLowerCase().includes(query.toLowerCase())
    )
    .map((hotel) => <HotelItem hotel={hotel} key={hotel.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ProductWrapper>{hotelList}</ProductWrapper>
    </div>
  );
};
export default observer(Hotels);
