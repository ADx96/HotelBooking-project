import { makeObservable, observable, action } from "mobx";
import axios from "axios";
class HotelsMobx {
  hotels = [];

  fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/BookNow");
      this.hotels = response.data;
    } catch (error) {
      console.error("HotelsMobx -> fetchProducts -> error", error);
    }
  };
  constructor() {
    makeObservable(this, {
      products: observable,
      fetchProducts: action,
    });
  }
}

const hotelsmobx = new HotelsMobx();
hotelsmobx.fetchProducts();

export default hotelsmobx;
