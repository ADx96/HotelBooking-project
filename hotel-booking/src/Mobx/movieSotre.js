import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class MovieAPIStore {
  movies = [];

  fetchMovie = async () => {
    try {
      const response = await axios.get("http://5e9d12e6fbda.ngrok.io/Movies");
      this.movies = response.data;
      console.log(this.movies);
    } catch (error) {
      console.error("Hotels -> fetchProducts -> error", error);
    }
  };

  constructor() {
    makeObservable(this, {
      movies: observable,
      fetchMovie: action,
    });
  }
}

const movieAPIStore = new MovieAPIStore();
movieAPIStore.fetchMovie();

export default movieAPIStore;
