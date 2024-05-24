import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            const newValue = state.value + 1;

            return {
                ...state,
                value: newValue,
            };
        },
        decrement: (state) => {
            const newValue = state.value - 1;

            return {
                ...state,
                value: newValue,
            };
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            const newValue = action.payload + state.value;

            return {
                ...state,
                value: newValue,
            };
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
