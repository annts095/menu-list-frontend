import { createSelector } from 'reselect';
import { MENU_STATUS } from '../../../const/menu';
import { RootState } from '../../rootReducer';

export const menusSelector = createSelector(
    (state: RootState) => state.menu,
    ({ menus }) => {
        return menus.filter((menu) => { return !menu.is_child && menu.status === MENU_STATUS.PUBLISHING });
    }
);
