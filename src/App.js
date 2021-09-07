import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SearchResults from "./components/SearchResults";
import PrivateRoute from "./PrivateRoutes/PrivateRoutes";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/search" component={SearchResults} />
        <PrivateRoute path="/hero/:id" component={Details} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
