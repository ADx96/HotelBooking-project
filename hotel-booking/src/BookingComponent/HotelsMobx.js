import { makeObservable, observable, action } from "mobx";
import axios from "axios";
class HotelsMobx {
  hotels = [];
  loading = true;

  fetchHotel = async () => {
    try {
      const response = await axios.get("http://localhost:8000/Hotels");
      this.hotels = response.data;
      this.loading = false;
    } catch (error) {
      console.error("Hotels -> fetchProducts -> error", error);
    }
  };

  updateHotel = async (updatedHotel) => {
    try {
      await axios.put(
        `http://localhost:8000/Hotels/${updatedHotel.id}`,
        updatedHotel
      );
      const hotel = this.hotels.find((hotel) => hotel.id === updatedHotel.id);
      for (const key in hotel) hotel[key] = updatedHotel[key];
    } catch (error) {
      console.log("Hotels -> updateCookie -> error", error);
    }
  };
  constructor() {
    makeObservable(this, {
      hotels: observable,
      updateHotel: action,
      fetchHotel: action,
    });
  }
}

const hotelsmobx = new HotelsMobx();
hotelsmobx.fetchHotel();

export default hotelsmobx;
