import React, { Component } from "react";
import PolicyDataService from "../policy-service/policy.service";
import { Link } from "react-router-dom";

export default class PoliciesList extends Component {
    constructor(props) {
        super(props);
        this.retrievePolicies = this.retrievePolicies.bind(this);
        //this.setActivePolicy = this.setActivePolicy.bind(this);
        
        this.state = {
            policies: [],
            currentPolicy: null,
            currentIndex: -1
        };
    }

    componentDidMount() {
        this.retrievePolicies();
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

    render() {
        const {policies } = this.state;

        return (
            <div>
                <div>
                    <h4>Policies List</h4>

                    <ul>
                        {policies &&
                            policies.map((policy, index) => (
                                <li>
                                    {policy.name}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        )
    }
}