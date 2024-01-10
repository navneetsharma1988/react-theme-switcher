import { createSlice } from "@reduxjs/toolkit";

export type ThemeState = {
    isDarkMode: boolean;
}

const initialState: ThemeState = {
    isDarkMode: false
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state: Partial<ThemeState>) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
    
});

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer;