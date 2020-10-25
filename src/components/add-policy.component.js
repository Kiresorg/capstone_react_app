import React, { Component } from 'react';
import PolicyDataService from "../policy-service/policy.service";

export default class AddPolicy extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAccountHolderId = this.onChangeAccountHolderId.bind(this);
        this.onChangeIsActivePolicy = this.onChangeIsActivePolicy.bind(this);
        this.onChangeHasActiveClaim = this.onChangeHasActiveClaim.bind(this);
        this.onChangeEffectiveDate = this.onChangeEffectiveDate.bind(this);
        this.onChangeTerminationDate = this.onChangeTerminationDate.bind(this);

        this.state = {
            id: null,
            name: "",
            holder_first_name: "",
            holder_last_name: "",
            holder_account_id: "",
            is_active_policy: false,
            has_active_claim: false,
            effective_date: "",
            termination_date: "",

            submitted: false
        };
    }

    savePolicy() {
        var data = {
            name: this.state.name,
            holder_first_name: this.state.holder_first_name,
            holder_last_name: this.state.holder_last_name,
            holder_account_id: this.state.holder_account_id,
            is_active_policy: this.state.is_active_policy,
            has_active_claim: this.state.has_active_claim,
            effective_date: this.state.effective_date,
            termination_date: this.state.termination_date
        };

        PolicyDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    holder_first_name: response.data.holder_first_name,
                    holder_last_name: response.data.holder_last_name,
                    holder_account_id: response.data.holder_account_id,
                    is_active_policy: response.data.is_active_policy,
                    has_active_claim: response.data.has_active_claim,
                    effective_date: response.data.effective_date,
                    termination_date: response.data.termination_date,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    newPolicy() {
        this.setState({
            id: null,
            name: "",
            holder_first_name: "",
            holder_last_name: "",
            holder_account_id: "",
            is_active_policy: false,
            has_active_claim: false,
            effective_date: "",
            termination_date: "",
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Policy submitted successfully</h4>
                        <button className="btn btn-success" onClick={this.newPolicy}>
                            Add Policy
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="name">Policy Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                value={this.state.name}
                                onChange={this.onChangeName}
                                name="name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="holder_first_name">First Name of Policyholder</label>
                            <input
                                type="text"
                                className="form-control"
                                id="holder_first_name"
                                required
                                value={this.state.holder_first_name}
                                onChange={this.onChangeFirstName}
                                name="holder_first_name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="holder_last_name">Last Name of Policyholder</label>
                            <input
                                type="text"
                                className="form-control"
                                id="holder_last_name"
                                required
                                value={this.state.holder_last_name}
                                onChange={this.onChangeLastName}
                                name="holder_last_name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="holder_account_id">Account Holder ID</label>
                            <input
                                type="text"
                                className="form-control"
                                id="holder_account_id"
                                required
                                value={this.state.holder_account_id}
                                onChange={this.onChangeAccountHolderId}
                                name="holder_account_id"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="is_active_policy">Active Policy?</label>
                            <input
                                type="text"
                                className="form-control"
                                id="is_active_policy"
                                required
                                value={this.state.is_active_policy}
                                onChange={this.onChangeIsActivePolicy}
                                name="is_active_policy"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="has_active_claim">Has Active Claim?</label>
                            <input
                                type="text"
                                className="form-control"
                                id="has_active_claim"
                                required
                                value={this.state.has_active_claim}
                                onChange={this.onChangeHasActiveClaim}
                                name="has_active_claim"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="effective_date">Has Active Claim?</label>
                            <input
                                type="text"
                                className="form-control"
                                id="effective_date"
                                required
                                value={this.state.effective_date}
                                onChange={this.onChangeEffectiveDate}
                                name="effective_date"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="termination_date">Has Active Claim?</label>
                            <input
                                type="text"
                                className="form-control"
                                id="termination_date"
                                required
                                value={this.state.termination_date}
                                onChange={this.onChangeTerminationDate}
                                name="termination_date"
                            />
                        </div>

                        <button onClick={this.savePolicy} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )};
            </div>
        );
    }
}