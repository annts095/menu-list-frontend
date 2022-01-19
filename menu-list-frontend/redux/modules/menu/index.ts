import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Children } from "react";
import { ThunkApi } from "../../../declarations";
import { ConvertedMenu, Menu } from "../../../declarations/menu"
import * as menuServices from "../../../services/menu";

const convertMenu = (menus: Menu[]): ConvertedMenu[] => {
    return menus.map((menu) => {
        const children = menus.filter((_m) => {
            return menu.childen.some((id) => id === _m.id && _m.is_child);
        })
        return { ...menu, childen: children}
    });
}

export const fetchMenus = createAsyncThunk<{menus: Menu[]}, void, ThunkApi>(
    'menu/fetchMenus',
    async (_, thunkApi) => {
        try {
            const response = await menuServices.fetchMenus();
            return response.data;
          } catch (err: any) {
            return thunkApi.rejectWithValue(err.response.data);
          }
    }
);

type MenuState = {
    menus: ConvertedMenu[]|[]
};

export const initialState: MenuState = {
    menus: []
};

export const slice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMenus.fulfilled, (state, payload: { payload: { menus: Menu[]} }) => {
            state.menus = convertMenu(payload.payload.menus);
        });
        builder.addCase(fetchMenus.rejected, (_, { payload }: { payload: unknown }) => {
            // TODO エラー処理の場合を考える
            console.log(payload);
        });
    },
});

export default slice.reducer;
