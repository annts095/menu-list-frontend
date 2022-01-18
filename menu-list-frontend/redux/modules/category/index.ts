import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApi } from '../../../declarations';
import { Category } from '../../../declarations/category';
import * as CategoryServices from '../../../services/category';

export const fetchCategories = createAsyncThunk<{categories: Category[]}, void, ThunkApi>(
    'category/fetchCategires',
    async (_, thunkApi) => {
        try {
            const response = await CategoryServices.fetchCategories();
            return response.data;
          } catch (err: any) {
            return thunkApi.rejectWithValue(err.response.data);
          }
    }
);

type CategoryState = {
    categories: Category[]|[]
}

export const initialState: CategoryState = {
    categories: []
};

export const slice = createSlice({
    name: 'category',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, payload: { payload: { categories: Category[]} }) => {
            state.categories = payload.payload.categories;
        });
    }
},);

export default slice.reducer;
