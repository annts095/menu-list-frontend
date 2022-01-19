import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './modules/category';

const rootReducer = combineReducers({
    category: categoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
