import React, { Component } from 'react';

class RegisterForm extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Tittle"/>
                <textarea placeholder="Enter your note.."/>
                <button>Create Note</button>
            </form>
        );
    }
}

export default  RegisterForm;
