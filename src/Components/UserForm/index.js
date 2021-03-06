import React, { Component } from 'react';
import Button from './../Button';
import FormValidator from './FormValidator';
import FullPageLoader from './../FullPageLoader'
import { WriteInFirebase } from './../../Firebase';
import './UserForm.scss';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.validator = new FormValidator([
            {
                field: 'cname',
                method: 'isEmpty',
                validWhen: false,
                message: 'Name is required.'
            },
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'Email is required.'
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'That is not a valid email.'
            },
            {
                field: 'phone',
                method: 'isEmpty',
                validWhen: false,
                message: 'Pleave provide a phone number.'
            },
            {
                field: 'phone',
                method: 'matches',
                args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/], // args is an optional array of arguements that will be passed to the validation method
                validWhen: true,
                message: 'That is not a valid phone number.'
            },
            {
                field: 'address',
                method: 'isEmpty',
                validWhen: false,
                message: 'Please provide delivery address.'
            },
        ]);

        this.state = {
            cname: '',
            email: '',
            phone: '',
            address: '',
            address: '',
            alphanso: true,
            banganapalli: false,
            bulkOrder: false,
            selectedProduct: this.props.selectedProduct || '1 dozen',
            showFullPageLoader: false,
            validation: this.validator.valid()
        }

        this.submitted = false;
        this.mangoTypeChange = this.mangoTypeChange.bind(this);

    }

    handleInputChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    mangoTypeChange(obj) {
        if (obj.hasOwnProperty('alphanso')) {
            this.setState({ alphanso: !obj.alphanso });
        }
        if (obj.hasOwnProperty('banganapalli')) {
            this.setState({ banganapalli: !obj.banganapalli });
        }

    }
    bulkOrderInputChange = () => {
        this.setState({ bulkOrder: !this.state.bulkOrder });
    }

    getTypeOfMango = () => {
        const { alphanso, banganapalli } = this.state
        let types = '';
        if(alphanso && banganapalli) {
            types = "Alphonso, Kensington Pride"
        } else if(banganapalli) {
            types = "Kensington Pride"
        } else {
            types = "Alphonso"
        }
        return types;
    }

    handleFormSubmit = () => {
        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        this.submitted = true;

        if (validation.isValid) {
            this.setState({ showFullPageLoader: true });
            let data = {
                selectedProduct: this.state.selectedProduct,
                name: this.state.cname,
                email: this.state.email,
                contactNumber: this.state.phone,
                address: this.state.address,
                bulkOrder: this.state.bulkOrder ? "Yes" : "No",
                typeOfMango: this.getTypeOfMango()
            }

            WriteInFirebase(data, "customers").then(() => {
                this.setState({
                    showFullPageLoader: false
                }, () => {
                    this.props.showSucessMessage()
                });
            })
        }
    }



    render() {
        let validation = this.submitted ?                         // if the form has been submitted at least once
            this.validator.validate(this.state) :   // then check validity every time we render
            this.state.validation
        return (
            <div className="userForm">
                <h3>Enter your details</h3>
                <div className="form-group checkbox-group">
                    <div className="checkbox">
                        <label htmlFor="alphanso">
                            <input type="checkbox"
                                id="alphanso"
                                checked={this.state.alphanso}
                                value={this.state.alphanso}
                                onChange={() => this.mangoTypeChange({ "alphanso": this.state.alphanso })}
                            />Alphonso
                        </label>
                    </div>
                    <div className="checkbox">
                        <label htmlFor="banganapalli">
                            <input type="checkbox"
                                id="banganapalli"
                                onChange={() => this.mangoTypeChange({ "banganapalli": this.state.banganapalli })}
                                checked={this.state.banganapalli}
                            />Kensington Pride
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="sel1">Select Product:</label>
                    <select className="form-control"
                        value={this.state.selectedProduct}
                        name="selectedProduct"
                        onChange={this.handleInputChange}
                        id="sel1">
                        {/* <option value="1/2 dozen">1/2 dozen</option> */}
                        <option value="1 dozen">1 dozen</option>
                        <option value="2 dozen">2 dozen</option>
                        <option value="3 dozen">3 dozen</option>
                        {/* <option value="5 dozen">5 dozen</option> */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="cname">
                        Name
                            <span className="asterisk">*</span>
                    </label>
                    <input type="text"
                        name="cname"
                        id="cname"
                        value={this.state.cname}
                        onChange={this.handleInputChange}
                        placeholder="Please enter your name"
                        className={`form-control ${validation.cname.isInvalid && 'error'}`} />
                    <label className="has-error">{validation.cname.message}</label>
                </div>
                <div className="form-group">
                    <label htmlFor="emailid">Email
                        <span className="asterisk">*</span></label>
                    <input type="email"
                        name="email"
                        id="emailid"
                        placeholder="Please enter your email"
                        onChange={this.handleInputChange}
                        className={`form-control ${validation.email.isInvalid && 'error'}`} />
                    <label className="has-error">{validation.email.message}</label>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Contact number
                        <span className="asterisk">*</span>
                    </label>
                    <input type="tel"
                        name="phone"
                        id="phone"
                        onChange={this.handleInputChange}
                        placeholder="Please enter your contact number"
                        className={`form-control ${validation.phone.isInvalid && 'error'}`} />
                    <label className="has-error">{validation.phone.message}</label>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Delivery address
                        <span className="asterisk">*</span></label>
                    <textarea id="address"
                        name="address"
                        onChange={this.handleInputChange}
                        placeholder="Please enter your address"
                        className={`form-control ${validation.phone.isInvalid && 'error'}`} >
                    </textarea>
                    <label className="has-error">{validation.address.message}</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox"
                        onChange={this.bulkOrderInputChange}
                        value={this.state.bulkOrder} />Do you want bulk order ?</label>
                </div>
                <div className="btn-container">
                    <Button title="Save Details" onClick={this.handleFormSubmit} />
                </div>
                <div className="close-btn" onClick={this.props.hideMenu}>x</div>
                {this.state.showFullPageLoader && <FullPageLoader />}
            </div>
        );
    }
};

export default UserForm;