import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class BookingStore {
  bookings = [];

  createBooking = async (newBooking) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/Bookings",
        newBooking
      );
      this.bookings.push(res.data);
    } catch (error) {
      console.log("log1 -> CreateContact -> error", error);
    }
  };

  fetchBooking = async () => {
    try {
      const response = await axios.get("http://localhost:8000/Bookings");
      this.bookings = response.data;
      console.log(this.bookings);
    } catch (error) {
      console.error("Contact -> fetchContacs -> error", error);
    }
  };

  updateBooking = async (updateBooking) => {
    try {
      await axios.put(
        `http://localhost:8000/Bookings/${updateBooking.id}`,
        updateBooking
      );
      const booking = this.bookings.find(
        (booking) => booking.id === updateBooking.id
      );
      for (const key in booking) booking[key] = updateBooking[key];
    } catch (error) {
      console.log("Hotels -> updateContact -> error", error);
    }
  };

  constructor() {
    makeObservable(this, {
      bookings: observable,
      createBooking: action,
      updateBooking: action,
      fetchBooking: action,
    });
  }
}

const bookingstore = new BookingStore();
bookingstore.fetchBooking();

export default bookingstore;
