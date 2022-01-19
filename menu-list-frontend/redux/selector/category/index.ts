import { createSelector } from 'reselect';
import { Category } from '../../../declarations/category';
import { RootState } from '../../rootReducer';

export const categoriesSelector = createSelector(
    (state: RootState) => state.category,
    ({ categories }) => {
        return [...categories].sort((a, b) => a.sort_number - b.sort_number)
    }
);
