import React from "react";
import { useState } from "react";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import bookingstore from "../Mobx/BookingMox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

const BookingSubmission = ({ hotel }) => {
  const classes = useStyles();

  const [booking, setHotel] = useState({
    hotelname: "",
    customername: "",
    Date: "",
    EndDate: "",
    customerpassportnumber: "",
    hotellocation: "",
    movienight: true,
    mobile: "",
  });

  const handleChange = (event) => {
    setHotel({ ...booking, [event.target.name]: event.target.value });
  };
  const handleChange2 = (event) => {
    setHotel({ ...booking, [event.target.name]: event.target.checked });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    bookingstore.createBooking(booking);
  };

  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        style={{ marginLeft: "39%" }}
        onSubmit={handleSubmit}
      >
        <h2>Submit Your Booking</h2>
        <TextField
          id="filled-read-only-input"
          label="Hotel name"
          variant="outlined"
          required
          value={hotel.hotelname}
          className="form-control"
          name="hotelname"
          onChange={handleChange}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="filled-read-only-input"
          label="Enter your name"
          variant="outlined"
          required
          type="text"
          className="form-control"
          name="customername"
          onChange={handleChange}
        />
        <TextField
          id="filled-read-only-input"
          label="Enter your Mobile"
          variant="outlined"
          required
          type="text"
          className="form-control"
          name="mobile"
          onChange={handleChange}
        />
        <TextField
          id="filled-read-only-input"
          label="price"
          required
          variant="outlined"
          type="text"
          min="1"
          className="form-control"
          name="price"
          value={hotel.price}
          onChange={handleChange}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="outlined-basic"
          label="Enter your passport number "
          variant="outlined"
          required
          type="text"
          className="form-control"
          name="customerpassportnumber"
          onChange={handleChange}
        />

        <TextField
          id="outlined-basic"
          label=" Hotel location"
          required
          variant="outlined"
          type="text"
          className="form-control"
          name="hotellocation"
          value={hotel.hotellocation}
          onChange={handleChange}
          InputProps={{
            readOnly: true,
          }}
        />
        <div className="col-6">
          <TextField
            id="date"
            label="Start Date"
            type="date"
            required
            name="Date"
            onChange={handleChange}
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="col-6">
          <TextField
            id="date"
            label="End date"
            type="date"
            required
            name="EndDate"
            defaultValue="2017-05-24"
            onChange={handleChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="col-6">
          <TextField
            id="outlined-basic"
            label="Passport Number"
            required
            variant="outlined"
            type="text"
            className="form-control"
            name="customerpassportnumber"
            onChange={handleChange}
          />
        </div>

        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>yes</Grid>
            <Grid item>
              <AntSwitch
                checked={booking.movienight}
                name="movienight"
                onChange={handleChange2}
              />
            </Grid>
            <Grid item>no</Grid>
          </Grid>
        </Typography>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={handleSubmit}
        >
          Submit Booking
        </Button>
      </form>
    </div>
  );
};

export default observer(BookingSubmission);
