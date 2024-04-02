import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUsers  = createAsyncThunk("fetchUsers", async () => {
    const response = await fetch("http://localhost:3000/api/user/get-users");
    if (!response.ok) {
        throw new Error('Server error');
    }   
    return await response.json();
});


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        loading: false,
        error: false,
    },
    reducers: { },
    extraReducers: (builder) => { 
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default userSlice.reducer;