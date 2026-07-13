import { createSlice } from '@reduxjs/toolkit'




const adminReducer = createSlice({
    name: "admin",
    initialState: {
        admindata: null,
        isLoading: true,
        adminaccessToken: null
    },
    reducers: {
        setAdmin: (state, action) => {
            state.admindata = action.payload
        },
        setAccesstoken: (state, action) => {
            state.adminaccessToken = action.payload
        },
        setisLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
});


export const { setAdmin, setAccesstoken, setisLoading } = adminReducer.actions;

export default adminReducer.reducer