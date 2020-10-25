import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPolicy from "./components/policy/add-policy.component";
import Policy from "./components/policy/policy.component";
import PoliciesList from "./components/policy/policies-list.component";
import AddClaim from "./components/claim/add-claim.component";
import Claim from "./components/claim/claim.component";
import ClaimsList from "./components/claim/claims-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <a href="/policies">
            Policy Manager Tool
          </a>
          <nav>
            <li>
              <Link to={"/policies"}>
                Policies
              </Link>
            </li>
            <li>
              <Link to={"/claims"}>
                Claims
              </Link>
            </li>
            <li>
              <Link to={"/add_policy"}>
                Add Policy
              </Link>
            </li>
          </nav>

          <div>
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