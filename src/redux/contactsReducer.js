// import { Type } from './actionsTypes';

import { createReducer } from '@reduxjs/toolkit';
import { addState, addContact, removeContact, changeFilter } from './contactsActions';

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
};


// const contactsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case Type.ADD_STATE:
//             return {
//                 ...state,
//                 contacts: action.payload
//             }
//         case Type.ADD_CONTACT:
//             return {
//                 ...state,
//                 contacts: [...state.contacts, action.payload]
//             };
//         case Type.REMOVE_CONTACT:
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(({ id }) => id !== action.payload)
//             };
//         case Type.FILTER:
//             return {
//                 ...state,
//                 filter: action.payload
//             };
//         default:
//             return state;
//     }
// };

// export default contactsReducer;

export default createReducer(initialState, {
    [addState]: (state = initialState, action) => ({
        ...state,
        contacts: action.payload
    }),
    [addContact]: (state = initialState, action) => ({
        ...state,
        contacts: [...state.contacts, action.payload]
    }),
    [removeContact]: (state = initialState, action) => ({
        ...state,
        contacts: state.contacts.filter(({ id }) => id !== action.payload)
    }),
    [changeFilter]: (state = initialState, action) => ({
        ...state,
        filter: action.payload
    }),
});

