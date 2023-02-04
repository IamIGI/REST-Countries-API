import axios from 'axios';
// '@ts-ignore' are hear cuz we do not know what we get from api. Given API does not have interface or strict type

export interface getCountries {
    name: string;
    population: number;
    region: string;
    capital: string[] | undefined;
    flag: string;
    ccA2: string;
}

export interface getGivenCountry {
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string;
    currencies: string;
    languages: string;
    borderCountries: string[];
    flag: string;
}

const countriesApi = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
    headers: { 'Content-Type': 'application/json' },
});

const getCountriesData = async (): Promise<getCountries[] | undefined> => {
    try {
        const response = await countriesApi.get('/all');
        //@ts-ignore
        return response.data.map((country) => {
            return {
                capital: country.capital,
                name: country.name.common,
                population: country.population,
                region: country.region,
                flag: country.flags.png,
                ccA2: country.cca2,
            };
        });
    } catch (err) {
        console.log(err);
    }
};

const getGivenCountryData = async (code: string): Promise<getGivenCountry> => {
    const response = await countriesApi.get(`alpha/${code}`);
    const country = response.data[0];
    return {
        name: country.name.common,
        //@ts-ignore
        nativeName: Object.values(country.name.nativeName)[0].official,
        population: country.population,
        region: country.region,
        subregion: country.subregion,
        capital: country.capital,
        topLevelDomain: country.tld,
        //@ts-ignore
        currencies: Object.values(country.currencies)
            //@ts-ignore
            .map((currency) => currency.name)
            .join(','),
        //@ts-ignore
        languages: Object.values(country.languages).join(', '),
        borderCountries: country.borders ? country.borders : [],
        flag: country.flags.png,
    };
};

export { getCountriesData, getGivenCountryData };
