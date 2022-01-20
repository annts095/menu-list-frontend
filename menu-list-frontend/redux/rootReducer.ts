import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './modules/category';
import menuReducer from './modules/menu';

const rootReducer = combineReducers({
    category: categoryReducer,
    menu: menuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
