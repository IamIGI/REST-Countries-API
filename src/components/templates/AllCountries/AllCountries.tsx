import { useEffect } from 'react';
import { useAppDispatch } from '../../../app/store';
import { useGetCountries } from '../../../features/countries/countriesHooks';
import { fetchCountries } from '../../../features/countries/countriesSlice';
import CountryPreview from '../../organisms/CountryPreview/CountryPreview';
import SearchAndFilterSection from '../../organisms/SearchAndFilterSection/SearchAndFilterSection';
import './AllCountries.css';
const AllCountries = () => {
    const { data, isError, isLoading, error } = useGetCountries();
    //FIX for githubPages ---- start
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCountries());
    }, []);
    //FIX for githubPages ---- end

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
                            <CountryPreview country={country} key={country.ccA2} />
                        ))}
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default AllCountries;
