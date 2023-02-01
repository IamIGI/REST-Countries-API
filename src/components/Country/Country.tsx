import React from 'react';
import { useGetCountryById } from '../../features/countries/countriesHooks';

const Country = () => {
    const { data, isError, isLoading, error } = useGetCountryById('PM');

    return <div> {isError ? <>{error}</> : isLoading ? <>Loading...</> : data ? <>{console.log(data)}</> : null}</div>;
};

export default Country;
