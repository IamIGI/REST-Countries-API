import React from 'react';
import { useGetCountries } from '../../features/countries/countriesHooks';

const AllCountries = () => {
    const { data, isError, isLoading, error } = useGetCountries();

    return <div> {isError ? <>{error}</> : isLoading ? <>Loading...</> : data ? <>{console.log(data)}</> : null}</div>;
};

export default AllCountries;
