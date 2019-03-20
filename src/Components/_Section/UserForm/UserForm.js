import React, { Component } from 'react';
import Button from './../../_UI/Button/Button';
import FormValidator from './FormValidator';
import FullPageLoader from './../../_UI/FullPageLoader/FullPageLoader'
import { WriteInFirebase } from './../../../Firebase';
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
            bulkOrder: false,
            selectedProduct: this.props.selectedProduct || '1 dozen',
            showFullPageLoader: false,
            validation: this.validator.valid()
        }

        this.submitted = false;

    }

    handleInputChange = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    bulkOrderInputChange = () => {
        this.setState({bulkOrder: !this.state.bulkOrder});
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
                bulkOrder: this.state.bulkOrder ? "Yes" : "No" 
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
                <div className="form-group">
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
                    <input type="email"
                        name="email"
                        id="emailid"
                        placeholder="Please enter your email"
                        onChange={this.handleInputChange}
                        className={`form-control ${validation.email.isInvalid && 'error'}`} />
                    <label className="has-error">{validation.email.message}</label>
                </div>
                <div className="form-group">
                    <input type="tel"
                        name="phone"
                        id="phone"
                        onChange={this.handleInputChange}
                        placeholder="Please enter your contact number"
                        className={`form-control ${validation.phone.isInvalid && 'error'}`} />
                    <label className="has-error">{validation.phone.message}</label>
                </div>
                <div className="form-group">
                    <textarea id="address"
                        name="address"
                        onChange={this.handleInputChange}
                        placeholder="Please enter your address"
                        className={`form-control ${validation.phone.isInvalid && 'error'}`} >
                    </textarea>
                    <label className="has-error">{validation.address.message}</label>
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