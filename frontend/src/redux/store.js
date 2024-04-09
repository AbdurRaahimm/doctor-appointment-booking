import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import userByIdSlice from './userByIdSlice';
import doctorSlice from './doctorSlice';
import approvedDoctorsSlice from './approvedDoctorsSlice';
import reviewsSlice from './reviewsSlice';
import timeSlotSlice from './timeSlotSlice';
import doctorAppointmentsSlice from './doctorAppointmentsSlice';
import userAppointmentsSlice from './userAppointmentsSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        userById: userByIdSlice,
        doctor: doctorSlice,
        approvedDoctors: approvedDoctorsSlice,
        reviews: reviewsSlice,
        timeSlots: timeSlotSlice,
        doctorAppointments: doctorAppointmentsSlice,
        userAppointments: userAppointmentsSlice
    }
})

export default store