import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem('user')) || [];
// console.log(user.Token)
const token = user.Token;

export const fetchUserById  = createAsyncThunk("fetchUserById", async (id) => {
    const response = await fetch(`http://localhost:3000/api/user/get-user/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) {
        throw new Error('Server error');
    }   
    return await response.json();
});


const userByIdSlice = createSlice({
    name: 'userById',
    initialState: {
        userById: [],
        loading: false,
        error: false,
    },
    reducers: { },
    extraReducers: (builder) => { 
        builder.addCase(fetchUserById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.userById = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchUserById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default userByIdSlice.reducer;