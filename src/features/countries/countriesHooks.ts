import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/store';
import {
    countriesError,
    countriesStatus,
    fetchCountries,
    fetchCountryById,
    selectCountries,
    selectCountryById,
} from './countriesSlice';

export function useGetCountries() {
    const dispatch = useAppDispatch();
    const status = useSelector(countriesStatus);
    const error = useSelector(countriesError);
    const data = useSelector(selectCountries);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCountries());
        }
    }, [status, data, dispatch]);

    // derive status booleans for ease of use
    const isUninitialized = status === undefined;
    const isLoading = status === 'pending' || status === 'idle';
    const isError = status === 'rejected';
    const isSuccess = status === 'fulfilled';

    return { data, isUninitialized, isLoading, isError, isSuccess, error };
}

export function useGetCountryById(id: string) {
    const dispatch = useAppDispatch();
    const status = useSelector(countriesStatus);
    const error = useSelector(countriesError);
    const data = useSelector(selectCountryById);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCountryById(id));
        }
    }, [status, data, dispatch]);

    // derive status booleans for ease of use
    const isUninitialized = status === undefined;
    const isLoading = status === 'pending' || status === 'idle';
    const isError = status === 'rejected';
    const isSuccess = status === 'fulfilled';

    return { data, isUninitialized, isLoading, isError, isSuccess, error };
}
