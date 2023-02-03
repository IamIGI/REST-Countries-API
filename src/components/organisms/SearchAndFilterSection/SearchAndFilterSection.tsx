import FilterRegion from '../../molecules/FilterRegion/FilterRegion';
import SearchCountry from '../../molecules/SearchCountry/SearchCountry';
import './SearchAndFilterSection.css';

const SearchAndFilterSection = () => {
    return (
        <div className="searchAndFilters">
            <SearchCountry />
            <FilterRegion />
        </div>
    );
};

export default SearchAndFilterSection;
