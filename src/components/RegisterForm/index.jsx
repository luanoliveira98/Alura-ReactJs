import React, { Component } from 'react';
import './style.css';

class RegisterForm extends Component {
    render() {
        return (
            <form className="register-form">
                <input className="register-form_input" type="text" placeholder="Tittle"/>
                <textarea className="register-form_input" placeholder="Enter your note.."/>
                <button className="register-form_input register-form_submit">Create Note</button>
            </form>
        );
    }
}

export default  RegisterForm;
