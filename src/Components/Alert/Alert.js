import React from 'react';
import styles from './Alert.module.css';
import PropTypes from 'prop-types';


const Alert = ({ error }) => (
    <div className={styles.alert}>{error}</div>
);

export default Alert;

Alert.defaultProps = {
    error: '',
};

Alert.propTypes = {
    error: PropTypes.string.isRequired,
};