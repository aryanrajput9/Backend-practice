import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "auth",
    initialState: {
        user: null,
        accessToken: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setUser, setToken, setLoading, setError } = authReducer.actions;

export default authReducer.reducer;