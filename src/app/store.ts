import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import countriesReducer from '../features/countries/countries';

const store = configureStore({
    reducer: {
        countries: countriesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export default store;
