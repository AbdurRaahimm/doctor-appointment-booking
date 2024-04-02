import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import userByIdSlice from './userByIdSlice';


const store = configureStore({
    reducer: {
        user: userSlice,
        userById: userByIdSlice,
    }
})

export default store