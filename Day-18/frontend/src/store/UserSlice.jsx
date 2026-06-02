import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAutheication: false
    },
    reducers: {
        adduser: (state, action) => {
            state.user = action.payload,
                state.isAutheication = true
        },
        removuser: (state) => {
            state.user = null,
                state.isAutheication = false
        }
    }
});

export const { adduser, removuser } = authSlice.actions;

export default authSlice.reducer