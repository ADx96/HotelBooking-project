import "./App.css";

import { Route, Switch } from "react-router";
import NavBar from "./Components/Navbar";
import { Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FooterP from "./Components/Footer";
import Booking from "./pages/Booking";
function App() {
  return (
    <>
      {" "}
      <NavBar />
      <Switch>
        <Route path="/BookNow" exact>
          <Booking />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/404" exact>
          <h1>404</h1>
        </Route>
        <Route path="">
          <Redirect to="/404" />
        </Route>
      </Switch>
      <FooterP />
    </>
  );
}

export default App;
