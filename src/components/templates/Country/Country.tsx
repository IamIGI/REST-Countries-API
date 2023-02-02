import React from 'react';
import { useGetCountryById } from '../../../features/countries/countriesHooks';
import { useParams } from 'react-router-dom';

const Country = () => {
    const ccA2 = useParams().ccA2 as string;

    const { data, isError, isLoading, error } = useGetCountryById(ccA2);

    return <div> {isError ? <>{error}</> : isLoading ? <>Loading...</> : data ? <>{console.log(data)}</> : null}</div>;
};

export default Country;
