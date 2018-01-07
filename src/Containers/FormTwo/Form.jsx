import React, { Component } from 'react';

const Form = ({ state, handleSubmit, handleChange, triggerInParrent }) => (
    <form onSubmit={handleSubmit}>
        <button type="button" onClick={() => triggerInParrent()}>
            Trigger parrent two
        </button>
        <label>
            First Name:
            <input type="text" name="firstName" value={state.firstName} onChange={handleChange} />
        </label>
        <br />
        <label>
            Last Name:
            <input type="text" name="lastName" value={state.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
            User Name:
            <input type="text" name="userName" value={state.userName} onChange={handleChange} />
        </label>
        <br />
        <label>
            Confirm User Name:
            <input
                type="text"
                name="confirmUserName"
                value={state.confirmUserName}
                onChange={handleChange}
            />
        </label>
        <br />
        <label>
            Notifications:
            <input
                type="checkbox"
                name="notifications"
                checked={state.notifications}
                onChange={handleChange}
            />
        </label>
        <br />
        <button>Submit</button>
    </form>
);

export default Form;
