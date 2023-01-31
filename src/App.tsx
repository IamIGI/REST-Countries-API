import './App.css';
import { useEffect } from 'react';
import { getCountriesData, getGivenCountryData } from './api/countries';

function App() {
    useEffect(() => {
        async function fetchCountries() {
            const response = await getCountriesData();
            console.log(response);

            const response2 = await getGivenCountryData('de');
            console.log(response2);
        }

        fetchCountries();
    });

    return <div className="App">App</div>;
}

export default App;
