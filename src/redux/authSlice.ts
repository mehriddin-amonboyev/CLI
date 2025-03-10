import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { removeState, saveState } from "../config/storage";

export interface AuthState {
    user: null | { token: string };
}

const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem("token") || "null"), // LocalStorage dan tokenni olish
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ token: string }>) => {
            state.user=action.payload;
            localStorage.setItem('token', JSON.stringify(action.payload)); // LocalStorage-ga yozish
        },
        logout: (state) => {
            state.user = null;
            removeState("token"); // LocalStorage-dan o‘chirish
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
