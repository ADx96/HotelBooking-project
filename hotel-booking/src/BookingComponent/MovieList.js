import MovieItem from "./MovieItem";
import React, { useState } from "react";
import { ProductWrapper } from "../Components/Styles";
import SearchBar from "../Components/SearchBar";
import movieAPIStore from "../Mobx/movieSotre";
import { observer } from "mobx-react";

const Movieslist = () => {
  const [query, setQuery] = useState("");

  const movieslist = movieAPIStore.movies
    .filter((movies) => movies.name.toLowerCase().includes(query))
    .map((movies) => <MovieItem movies={movies} key={movies.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ProductWrapper>{movieslist}</ProductWrapper>
    </>
  );
};

export default observer(Movieslist);
