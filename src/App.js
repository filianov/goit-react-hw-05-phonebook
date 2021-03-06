import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactsActions from './redux/contactsActions';
// import { v4 as uuidv4 } from 'uuid';
import Phonebook from './Components/Phonebook/Phonebook';
import ContactList from './Components/ContactsList/ContactsList';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import Filter from './Components/Filter/FilterContainer';
import { CSSTransition } from 'react-transition-group';
import popTransition from './Components/transitions/pop.module.css';
import slideLogoTransition from './Components/transitions/slideLogo.module.css';


class App extends Component {
  state = {
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    // filter: '',
    isActive: false,
  };

  componentDidMount() {
    // console.log("Cotacts componentDidMount");
    this.setState({ isActive: true });
    const savedLSC = localStorage.getItem('contacts');
    // console.log(savedLSC);
    const contactsLS = JSON.parse(savedLSC);
    // console.log(contactsLS);

    if (savedLSC) {
      this.props.addState(contactsLS)
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('contacts componentDidUpdate');
    // console.log('contacts prevProps.contacts', prevProps.contacts);
    // console.log('this.props.contacts', this.props.contacts);

    // if (prevState.contacts !== this.state.contacts) { localStorage.setItem('contacts', JSON.stringify(this.state.contacts)) };
    if (prevProps.contacts !== this.props.contacts) { localStorage.setItem('contacts', JSON.stringify(this.props.contacts)) };
  }

  // addState = (contactsLS) => {
  //   this.props.addState(contactsLS)
  // };

  addContact = (contact) => {
    this.props.addContact(contact)
  };

  // changeFilter = filter => {
  //   this.setState({ filter });
  // };

  changeFilter = filter => {
    this.props.changeFilter(filter);
  };

  getVisiableContacts = () => {
    // const { contacts, filter } = this.state;
    const contacts = this.props.contacts;
    // console.log('contacts', contacts)
    const filter = this.props.filter;
    // console.log('filter', filter)

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  // removeContact = contactId => {
  //   this.setState(prev => {
  //     return { contacts: prev.contacts.filter(({ id }) => id !== contactId) };
  //   });
  // };

  removeContact = (contactId) => {
    this.props.removeContact(contactId)
  };

  render() {
    const contacts = this.props.contacts;
    // const { contacts } = this.state;
    const filter = this.props.filter;
    // const { filter } = this.state;

    const { isActive } = this.state;
    const visiableContact = this.getVisiableContacts();

    return (
      <>
        <CSSTransition in={isActive} timeout={500} classNames={slideLogoTransition} mountOnEnter unmountOnExit>
          <SectionTitle title="Phonebook" />
        </CSSTransition>
        <Phonebook onAddContact={this.addContact} contacts={contacts} />
        <CSSTransition in={contacts.length > 1} timeout={250} unmountOnExit classNames={popTransition}>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        </CSSTransition>
        {visiableContact.length > 0 ? (
          <ContactList
            contacts={visiableContact}
            onRemoveContact={this.removeContact}
          />
        ) : (
            <ContactList
              contacts={contacts}
              onRemoveContact={this.removeContact}
            />
          )}
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  addState: (contactsLS) => dispatch(contactsActions.addState(contactsLS)),
  addContact: (contact) => dispatch(contactsActions.addContact(contact)),
  removeContact: (contactId) => dispatch(contactsActions.removeContact(contactId)),
  changeFilter: (filter) => dispatch(contactsActions.changeFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
