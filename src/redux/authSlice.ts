import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: null | { token: string };
}

const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem("user") || "null"), // LocalStorage dan tokenni olish
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ token: string }>) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload)); // LocalStorage-ga yozish
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("user"); // LocalStorage-dan o‘chirish
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
