import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchApprovedDoctors  = createAsyncThunk("fetchApprovedDoctors", async () => {
    const response = await fetch("https://mocki.io/v1/ac1b7ffc-5f0a-4224-9553-d00bb342bd99" , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Server error');
    }   
    return await response.json();
}
);

export const approvedDoctorsSlice = createSlice({
    name: 'approvedDoctors',
    initialState: {
        doctors: [],
        loading: false,
        error: false,
    },
    reducers: { },
    extraReducers: (builder) => { 
        builder.addCase(fetchApprovedDoctors.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchApprovedDoctors.fulfilled, (state, action) => {
            state.doctors = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchApprovedDoctors.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default approvedDoctorsSlice.reducer;