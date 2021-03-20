import React from "react";
import ProductsItem from "../components/ProductItem";
import ProductWrapper from "../styles";
import AddButton from "../Buttons/AddButton";
import HotelsMobx from "../Stores/HotelsMobx";
import { observer } from "mobx-react";

const Hotels = () => {
  const hotelList = HotelsMobx.products.map((hotel) => (
    <ProductsItem hotel={hotel} key={hotel.id} />
  ));

  return (
    <div>
      <ProductWrapper>{hotelList}</ProductWrapper>
      <AddButton />
    </div>
  );
};
export default observer(Hotels);
