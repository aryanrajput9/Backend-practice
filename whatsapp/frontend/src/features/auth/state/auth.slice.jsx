import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        accessToken: null,
        isLoading: null,
        error: null,

    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        },
        addAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
        addLoading: (state, action) => {
            state.isLoading = action.payload
        },
        addError: (state, action) => {
            state.error = action.payload
        }
    }
});

export const { addUser, addAccessToken, addLoading, addError } = authSlice.actions;

export default authSlice.reducer

