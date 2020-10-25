import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPolicy from "./components/add-policy.component";
import Policy from "./components/policy.component";
import PoliciesList from "./components/policies-list.component";
import AddClaim from "./components/add-claim.component";
import Claim from "./components/claim.component";
import ClaimsList from "./components/claims-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/policies" className="navbar-brand">
            Policy Manager Tool
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/policies"}>
                Policies
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/claims"}>
                Claims
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add_policy"}>
                Add Policy
              </Link>
            </li>
          </div>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/"], "/policies"} component={PoliciesList} />
              <Route exact path="/add-policy" component={AddPolicy} />
              <Route path="/policies/:id" component={Policy} />
              <Route exact path={["/"], "/claims"} component={ClaimsList} />
              <Route exact path="/add-claim" component={AddClaim} />
              <Route path="/claims/:id" component={Claim} />
            </Switch>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;