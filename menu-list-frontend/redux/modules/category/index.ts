import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Category } from '../../../declarations/category';

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
},);

export default slice.reducer;
