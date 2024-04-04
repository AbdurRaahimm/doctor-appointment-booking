import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import userByIdSlice from './userByIdSlice';
import doctorSlice from './doctorSlice';
import approvedDoctorsSlice from './approvedDoctorsSlice';


const store = configureStore({
    reducer: {
        user: userSlice,
        userById: userByIdSlice,
        doctor: doctorSlice,
        approvedDoctors: approvedDoctorsSlice,
    }
})

export default store