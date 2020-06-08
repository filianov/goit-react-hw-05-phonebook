import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';


const Button = ({ value, type, onClick }) => (
    <button type={type} className={styles.button} onClick={onClick}>
        {value}
    </button>
);

export default Button;

Button.propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

