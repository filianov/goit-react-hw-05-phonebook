import React from 'react';
// import { connect } from 'react-redux';


import PropTypes from 'prop-types';
import styles from './Filter.module.css';


export default function Filter({ value, onChangeFilter }) {

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        Find contact by name
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>

  );
};

// const mapStateToProps = (state, props) => ({
//   value: state.filter,
// });

// export default connect(mapStateToProps, null)(Filter);


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
