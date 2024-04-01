import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
    users: []
};
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        reset: (state) => {
            state.users = [];
            
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload
                state.message = 'Usuarios obtenidos correctamente';
                state.isSuccess = true
            })
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUsers.rejected, (state) => {
                state.isError = true;
            })
    },
});
export const getUsers = createAsyncThunk("user/getUsers ",
    async (thunkAPI) => {
        try {
            return await userService.getUsers();
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(message);
        }
    }

);

export const { reset } = userSlice.actions;
export default userSlice.reducer;