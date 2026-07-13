import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/state/authState'
import adminReducer from '../features/admin/state/adminState'


const store = configureStore({
    reducer: {
        auth: authReducer,
        admin: adminReducer

    }
});

export default store