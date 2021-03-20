import "./App.css";

import { Route, Switch } from "react-router";
import NavBar from "./Components/Navbar";
import { Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FooterP from "./Components/Footer";
function App() {
  return (
    <>
      {" "}
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/404" exact></Route>
        <h1>404</h1>
        <Route path="">
          <Redirect to="/404" />
        </Route>
      </Switch>
      <FooterP />
    </>
  );
}

export default App;
