import { RootState } from "../redux/rootReducer";

export type ThunkApi<T = unknown> = {
    state: RootState;
    rejectValue: T;
};
