import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getCountries, getCountriesData, getGivenCountry, getGivenCountryData } from '../../api/countries';
import { RootState } from '../../app/store';

interface CountriesInitialState {
    data: getCountries[];
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: undefined | string;
    refresh: boolean;
    countryById: getGivenCountry | {};
}

const initialState: CountriesInitialState = {
    data: [],
    status: 'idle',
    error: undefined,
    refresh: false,
    countryById: {},
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(fetchCountries.fulfilled, (state, action: PayloadAction<getCountries[]>) => {
            state.status = 'fulfilled';
            state.data = action.payload;
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

export const selectCountries = (state: RootState) => state.countries.data;
export const countriesStatus = (state: RootState) => state.countries.status;
export const countriesError = (state: RootState) => state.countries.error;

export const selectCountryById = (state: RootState) => state.countries.countryById;

export default countriesSlice.reducer;
