import React, { Component } from 'react';
const EnhanceForm = Component =>
    class FormBase extends React.Component {
        constructor(props) {
            super(props);
            this.state = { form: props.initialState };
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }

        handleSubmit(e) {
            e.preventDefault();
            console.log(JSON.stringify(this.state, null, 4));
        }

        handleChange(e) {
            const target = e.target;
            const name = target.name;
            const value = target.type === 'checkbox' ? target.checked : target.value;

            this.setState(state => ({ form: { ...state.form, ...{ [name]: value } } }));
        }

        render() {
            const { initialState, ...otherProps } = this.props;
            const { form } = this.state;
            console.log('...', form);
            return (
                <Component
                    state={form}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    {...otherProps}
                />
            );
        }
    };

export default EnhanceForm;
