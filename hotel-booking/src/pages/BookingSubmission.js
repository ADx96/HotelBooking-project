import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import bookingstore from "../Mobx/BookingMox";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import { useParams } from "react-router-dom";
import { MDBBtn } from "mdbreact";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
function BookingSubmission(hotel) {
  const [value, setValue] = React.useState("Controlled");

  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange1 = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange = (event) => {
    setBooking({ ...booking, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    alert("form is submitted👍");
    event.preventDefault();
    bookingstore.createContact(booking);
  };
  const handleChange3 = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange4 = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.container} noValidate onSubmit={handleSubmit}>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <div>
        <Button className={classes.button} onClick={handleOpen}>
          Select
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Number of Room
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange3}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Add a movie Night</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={state.jason}
                  onChange={handleChange1}
                  name="movie"
                />
              }
              label="Jason Killian"
            />
          </FormGroup>
        </FormControl>
      </div>
      <div>
        <Button className={classes.button} onClick={handleOpen}>
          Open the select
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>{hotel.hotelname}</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange4}
        />
      </div>
      <MDBBtn>Submit Booking</MDBBtn>
    </form>
  );
}

export default BookingSubmission;
