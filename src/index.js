import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "./css/main.css";

import LoginPage from "./view/LoginPage";
import SignUpPage from "./view/SignUpPage";
import AddRecipe from "./view/AddRecipe";
import RecipesDashboard from "./view/RecipesDashboard";
import SingleRecipe from "./view/SingleRecipe";
import UpdateRecipe from "./view/UpdateRecipe";
import PrivateRoute from "./components/PrivateRoute";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={RecipesDashboard} />
        <Route path="/log-in" component={LoginPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <PrivateRoute path="/recipes/view/:id" component={SingleRecipe} />
        <PrivateRoute path="/recipes/edit/:id" component={UpdateRecipe} />
        <PrivateRoute path="/add-recipe" component={AddRecipe} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
