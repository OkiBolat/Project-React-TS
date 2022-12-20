import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Default {}

const initialState: Default = {};

export const Default = createSlice({
    name: 'default',
    initialState,
    reducers: {},
});

export const {} = Default.actions;

export default Default.reducer;
