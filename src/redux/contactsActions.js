import { Type } from './actionsTypes';
import { createAction } from '@reduxjs/toolkit';

// import { v4 as uuidv4 } from 'uuid';

// import shortid from 'shortid';


// export const Type = {
//     ADD_CONTACT: 'ADD_CONTACT',
//     REMOVE_CONTACT: 'REMOVE_CONTACT',
//     FILTER: 'FILTER',
// }
// const id = uuidv4();

// export const addState = (contactsLS) => ({
//     type: Type.ADD_STATE,
//     payload: contactsLS,
// });

export const addState = createAction(Type.ADD_STATE);


// export const addContact = (contact) => ({
//     type: Type.ADD_CONTACT,
//     payload: contact,
// });

export const addContact = createAction(Type.ADD_CONTACT);


// export const removeContact = (contactId) => ({
//     type: Type.REMOVE_CONTACT,
//     payload: contactId,
// });

export const removeContact = createAction(Type.REMOVE_CONTACT);

// export const changeFilter = value => ({
//     type: Type.FILTER,
//     payload: value,
// });

export const changeFilter = createAction(Type.FILTER);


