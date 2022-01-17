import { Nullable, ValueOf } from './utils';
import { MENU_STATUS } from '../const/menu';

export type Product = {
    id: number,
    title: string,
    image_url: Nullable<string>,
    description: Nullable<string>,
    price: number,
    status: ValueOf<typeof MENU_STATUS>,
    is_child: boolean,
    is_recommend: boolean,
    topping: Topping[],
    childen: number[],
    category: number,
    sort_number: number,
};

export type Topping = {
    title: string,
    price: number,
};
