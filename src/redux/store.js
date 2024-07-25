import  { configureStore } from '@reduxjs/toolkit';
import  { counterReducer, userReducer } from './slice';
import { useReducer } from 'react';

// Crear el store
const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: useReducer
    }
});

export default store;