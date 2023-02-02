import React from 'react';
import { useGetCountries } from '../../../features/countries/countriesHooks';
import CountryPreview from '../../organisms/CountryPreview/CountryPreview';
import SearchAndFilterSection from '../../organisms/SearchAndFilterSection/SearchAndFilterSection';
import './AllCountries.css';
const AllCountries = () => {
    const { data, isError, isLoading, error } = useGetCountries();

    return (
        <div className="allCountries">
            <SearchAndFilterSection />
            <div className="mainSection">
                {isError ? (
                    <>{error}</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <>
                        {data.map((country) => (
                            <CountryPreview country={country} key={country.cca2} />
                        ))}
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default AllCountries;
