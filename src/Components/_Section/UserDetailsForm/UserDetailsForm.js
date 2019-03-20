import React, { Component } from 'react';
import FormValidator from './FormValidator';
import './UserDetailsForm.scss';

const validator = new FormValidator([
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

class UserDetailsForm extends Component {
    constructor(props) {
        super(props);
        this.validator = validator
            this.state = {
                cname: '',
                email: '',
                phone: '',
                address: '',
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

    handleFormSubmit = () => {
        const validation = this.validator.validate(this.state);
        // this.setState({ validation });
        this.submitted = true;
        let data = {};
        if (validation.isValid) {
            data = {                
                name: this.state.cname,
                email: this.state.email,
                contactNumber: this.state.phone,
                address: this.state.address
            }
        }
        return data;
    }



    render() {
        let validation = this.submitted ?
            this.validator.validate(this.state) :
            this.state.validation
        return (
            <div className="userDetailsForm">
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
            </div>
        );
    }
};

export default UserDetailsForm;