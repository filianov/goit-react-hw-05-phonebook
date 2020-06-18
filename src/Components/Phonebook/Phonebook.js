import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as contactsActions from '../../redux/contactsActions';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';
import Button from '../Button/Button';
import { CSSTransition } from 'react-transition-group';
import Alert from '../Alert/Alert';
import slideTransition from '../transitions/slideAlert.module.css';
import { v4 as uuidv4 } from 'uuid';


class Phonebook extends Component {
  state = {
    name: '',
    number: '',
    error: '',
    isActiveErr: false
  };

  handleChange = e => {

    if (e.target.name === 'name') {
      this.setState({
        name: e.target.value,
      });
    } else
      this.setState({
        number: e.target.value,
      });
    this.setState({
      isActiveErr: false
    });
  };

  handleSubmit = e => {
    const id = uuidv4();
    e.preventDefault();
    this.props.onAddContact({ ...this.state, id });
    this.setState({ name: '', number: '' });
  };

  handleEror = e => {
    e.preventDefault();
    this.setState({
      error: `${this.state.name} is already in contacts.`, isActiveErr: true
    });
  };

  getExsistName = () => {
    const name = this.state.name;
    const { contacts } = this.props;
    return contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase()),
    );
  };

  render() {
    const exsistName = this.getExsistName();
    const { name, number, error, isActiveErr } = this.state;

    return (
      <>
        <form
          className={styles.wrapper}
          onSubmit={e => {
            if (exsistName === undefined) {
              this.handleSubmit(e);
            } else this.handleEror(e)
          }}
        >
          <CSSTransition in={isActiveErr} timeout={250} unmountOnExit classNames={slideTransition}>
            <Alert error={error} />
          </CSSTransition>

          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              name="name"
              type="text"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              className={styles.input}
              type="tel"
              name="phone"
              placeholder="XXX-XX-XX"
              value={number}
              onChange={this.handleChange}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            />
          </label>
          <Button value='Add contact' type='submit' onClick={this.onSubmit} />
        </form>
      </>
    );
  }
};


const mapStateToProps = (state, props) => ({
  contacts: state.contacts,
});

// const mapDispatchToProps = dispatch => ({
//   addContact: ({ name, number, id }) => dispatch(contactsActions.addContact({ name, number, id })),
//   removeContact: (contactId) => dispatch(contactsActions.removeContact(contactId)),
// });

export default connect(mapStateToProps, null)(Phonebook);

Phonebook.defaultProps = {
  contacts: [],
};

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onAddContact: PropTypes.func.isRequired,
};
