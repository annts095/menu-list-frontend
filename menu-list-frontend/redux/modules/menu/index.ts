import { createSlice } from "@reduxjs/toolkit";
import { Menu } from "../../../declarations/menu"

type MenuState = {
    menus: Menu[]|[]
};

export const initialState: MenuState = {
    menus: []
};

export const slice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
    },
});

export default slice.reducer;
