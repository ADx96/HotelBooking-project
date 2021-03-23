import React from "react";
import { ActorCard } from "../Components/Styles";
import { ShopImage, Moviestext } from "../Components/Styles";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const MoviesItem = ({ movies }) => {
  const [state, setState] = React.useState({
    checkedB: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <ActorCard>
      <Moviestext>{movies.name}</Moviestext>
      <br />
      <Moviestext>Year : {movies.year}</Moviestext>
      <br />
      <Moviestext>Rating : {movies.rating}</Moviestext>
      <br />
      <Moviestext>Genre : {movies.genre}</Moviestext>
      <br />
      <ShopImage src={movies.image} />
      <p>{movies.actor}</p>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="Add"
            color="primary"
          />
        }
        label="Primary"
      />
    </ActorCard>
  );
};

export default MoviesItem;
