// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// import { devToolsEnhancer } from 'redux-devtools-extension';
import contactsReducer from './contactsReducer';


// const store = createStore(contactsReducer, devToolsEnhancer());

const store = configureStore({
    reducer: contactsReducer,
});


export default store;