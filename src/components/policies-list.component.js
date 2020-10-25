import React, { Component } from "react";
import PolicyDataService from "../policy-service/policy.service";
import { Link } from "react-router-dom";

export default class PoliciesList extends Component {
    constructor(props) {
        super(props);
        this.retrievePolicies = this.retrievePolicies.bind(this);
        this.setActivePolicy = this.setActivePolicy.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActivePolicy = this.setActivePolicy.bind(this);
        this.removeAllPolicies = this.removeAllPolicies.bind(this);
        this.searchPolicyHolder = this.searchPolicyHolder.bind(this);
        
        this.state = {
            policies: [],
            currentPolicy: null,
            currentIndex: -1,
            searchPolicyHolder: ""
        };
    }

    componentDidMount() {
        this.retrievePolicies();
    }

    searchPolicyHolder(e) {
        const searchPolicyHolder = e.target.value;

        this.setState({
            searchPolicyHolder: searchPolicyHolder
        });
    }

    retrievePolicies() {
        PolicyDataService.getAll()
            .then(response => {
                this.setState({
                    policies: response.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    refreshList() {
        this.retrievePolicies();
        this.setState({
            currentPolicy: null,
            currentIndex: -1
        });
    }

    setActivePolicy(policy, index) {
        this.setState({
            currentPolicy: policy,
            currentIndex: index
        });
    }

    removeAllPolicies() {
        PolicyDataService.deleteAll()
            .then(response => {
                this.setState({
                    policies: response.data
                });
                console.log(response.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const {searchPolicyHolder, policies, currentPolicy, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by policy holder name"
                            value={searchPolicyHolder}
                            onChange={this.onChangeSearchPolicyHolder}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchPolicyHolder}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>


                <div className="col-md-8">
                    <h4>Policies List</h4>

                    <ul className="list-group">
                        {policies &&
                            policies.map((policy, index) => (
                                <li
                                    className={
                                        "list-group-item " +
                                        (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActivePolicy(policy, index)}
                                    key={index}
                                >
                                    {policy.holder_first_name} {" "} { policy.holder_last_name} {"- "} {policy.name}
                                </li>
                            ))}
                    </ul>

                    {/* delete all button goes here */}
                </div>
                <div className="col-md-6">
                    {currentPolicy ? (
                        <div>
                            <h4>Policy</h4>
                            <div>
                                <label>
                                    <strong>Policy Name:</strong>
                                </label>{" "}
                                {currentPolicy.name}
                            </div>
                            <div>
                                <label>
                                    <strong>Policy Holder First Name:</strong>
                                </label>{" "}
                                {currentPolicy.holder_first_name}
                            </div>
                            <div>
                                <label>
                                    <strong>Policy Holder LastName:</strong>
                                </label>{" "}
                                {currentPolicy.holder_last_name}
                            </div>
                            <div>
                                <label>
                                    <strong>Policy Holder Account ID:</strong>
                                </label>{" "}
                                {currentPolicy.holder_account_id}
                            </div>
                            <div>
                                <label>
                                    <strong>Policy Active?:</strong>
                                </label>{" "}
                                {currentPolicy.is_active_policy ? "Yes" : "No"}
                            </div>
                            <div>
                                <label>
                                    <strong>Has Active Claim?:</strong>
                                </label>{" "}
                                {currentPolicy.has_active_claim ? "Yes" : "No"}
                            </div>
                            <div>
                                <label>
                                    <strong>Effective Date:</strong>
                                </label>{" "}
                                {currentPolicy.effective_date}
                            </div>
                            <div>
                                <label>
                                    <strong>Termination Date:</strong>
                                </label>{" "}
                                {currentPolicy.termination_date}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Policy...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}