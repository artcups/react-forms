import React, { Component } from 'react';
import EnhanceForm from '../FormBase';
import Form from './Form';
class FormOne extends Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
        this.triggerInParrent = this.triggerInParrent.bind(this);
    }

    triggerInParrent() {
        this.setState({
            open: !this.state.open,
        });
    }
    render() {
        const EnhancedForm = EnhanceForm(Form);
        console.log(this.state, this.triggerConsole);
        return (
            <EnhancedForm
                initialState={{
                    firstName: '',
                    lastName: '',
                    userName: '',
                    confirmUserName: '',
                    notifications: '',
                }}
                triggerInParrent={this.triggerInParrent}
            />
        );
    }
}

export default FormOne;
