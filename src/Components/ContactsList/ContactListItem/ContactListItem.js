import React from 'react';
import styles from '../ContactsList.module.css';
import { connect } from 'react-redux';
import * as contactsActions from '../../../redux/contactsActions';


const ContactListItem = ({ id, name, number, onRemoveContact }) => {
    const removeContact = (e) => {
        onRemoveContact(id)
    }
    return (
        <li key={id} className={styles.item}>
            <div className={styles.content}><span>{name}</span><span>{number}</span></div>
            <button
                type="button"
                className={styles.btn}
                onClick={removeContact}
            >
                <div className={styles.close}>X</div>
            </button>
        </li >
    )
};


const mapDispatchToProps = dispatch => ({
    removeContact: (contactId) => dispatch(contactsActions.removeContact(contactId)),
});


export default connect(null, mapDispatchToProps)(ContactListItem);