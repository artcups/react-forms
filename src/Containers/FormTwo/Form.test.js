import React from 'react';
import ReactDOM from 'react-dom';
import FormTwo from './';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormTwo />, div);
});
