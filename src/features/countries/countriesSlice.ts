import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getCountries, getCountriesData, getGivenCountry, getGivenCountryData } from '../../api/countries';
import { RootState } from '../../app/store';

interface CountriesInitialState {
    data: getCountries[];
    filteredData: getCountries[];
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: undefined | string;
    refresh: boolean;
    countryById: getGivenCountry | {};
    region: string;
}

const initialState: CountriesInitialState = {
    data: [],
    filteredData: [],
    status: 'idle',
    error: undefined,
    refresh: false,
    countryById: {},
    region: 'all',
};

export const fetchCountries = createAsyncThunk('countries/get', async (): Promise<getCountries[]> => {
    const response = await getCountriesData();
    if (!response) return [];
    return response;
});

export const fetchCountryById = createAsyncThunk(
    'countries/get/id',
    async (id: string): Promise<getGivenCountry | {}> => {
        const response = await getGivenCountryData(id);

        if (!response) return {};
        return response;
    }
);

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        filterRegion(state, action: PayloadAction<{ region: string }>) {
            if (action.payload.region === 'all') {
                state.filteredData = state.data;
            } else {
                state.filteredData = state.data.filter((country) => country.region === action.payload.region);
            }
            state.region = action.payload.region;
        },
        searchCountry(state, action: PayloadAction<{ searchTerm: string }>) {
            filterRegion({ region: state.region });
            if (action.payload.searchTerm !== '') {
                state.filteredData = state.filteredData.filter((country) =>
                    country.name.toLowerCase().includes(action.payload.searchTerm.toLowerCase())
                );
            } else {
                state.filteredData = state.filteredData;
            }
        },
        refreshStatus(state) {
            state.status = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(fetchCountries.fulfilled, (state, action: PayloadAction<getCountries[]>) => {
            state.status = 'fulfilled';
            state.data = action.payload;
            state.filteredData = state.data;
        });
        builder.addCase(fetchCountries.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        });
        builder.addCase(fetchCountryById.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(fetchCountryById.fulfilled, (state, action: PayloadAction<getGivenCountry | {}>) => {
            state.status = 'fulfilled';
            state.countryById = action.payload;
        });
        builder.addCase(fetchCountryById.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        });
    },
});

export const { filterRegion, searchCountry, refreshStatus } = countriesSlice.actions;

export const selectCountries = (state: RootState) => state.countries.filteredData;
export const countriesStatus = (state: RootState) => state.countries.status;
export const countriesError = (state: RootState) => state.countries.error;

export const selectCountryById = (state: RootState) => state.countries.countryById;

export default countriesSlice.reducer;
