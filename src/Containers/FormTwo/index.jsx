import React, { Component } from 'react';
import EnhanceForm from '../FormBase';
import Form from './Form';
class FormTwo extends Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
        this.triggerInParrent = this.triggerInParrent.bind(this);
        this.initialState =
            process.env.NODE_ENV !== 'production'
                ? JSON.parse(process.env.REACT_APP_FORM_ONE_DATA)
                : window.formOne;
    }

    triggerInParrent() {
        this.setState({
            open: !this.state.open,
        });
    }
    render() {
        debugger;
        const EnhancedForm = EnhanceForm(Form);
        console.log(this.state, this.triggerConsole);
        return (
            <EnhancedForm
                initialState={this.initialState}
                triggerInParrent={this.triggerInParrent}
            />
        );
    }
}

export default FormTwo;
