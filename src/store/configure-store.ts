import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { pokemonApi } from "./services/pokemon";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
