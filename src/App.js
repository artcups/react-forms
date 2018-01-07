import React, { Component } from 'react';
import EnhanceForm from './Containers/FormBase';
import Form from './Form';
class FormOne extends Component {
    render() {
        const EnhancedForm = EnhanceForm(Form);
        return (
            <EnhancedForm
                initialState={{
                    firstName: '',
                    lastName: '',
                    userName: '',
                    confirmUserName: '',
                    notifications: '',
                }}
            />
        );
    }
}

export default FormOne;
