import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionTitle.module.css';


const SectionTitle = ({ title }) => {
  return (<>

    <h3 className={styles.wrapper}>{title}</h3>

  </>
  )
};

export default SectionTitle;

SectionTitle.defaultProps = {
  title: '',
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
