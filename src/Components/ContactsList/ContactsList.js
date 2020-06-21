import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';
import slideTransition from '../transitions/slide.module.css';
import ContactListItem from './ContactListItem/ContactListItem'

const ContactList = ({ contacts, onRemoveContact }) => (
  <>
    <TransitionGroup component="ul" className={styles.list}>

      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} timeout={250} unmountOnExit classNames={slideTransition}>
          <ContactListItem id={id} name={name} number={number} onRemoveContact={onRemoveContact}
          />
          {/* <li key={id} className={styles.item}>
            <div className={styles.content}><span>{name}</span><span>{number}</span></div>
            <button
              type="button"
              className={styles.btn}
              onClick={() => onRemoveContact(id)}
            >
              <div className={styles.close}>X</div>
            </button>
          </li> */}
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
