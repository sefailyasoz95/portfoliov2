import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import reducer from "../reducers/reducers";

const store = configureStore({
	reducer: {
		global: reducer,
	},
});
export default store;

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
