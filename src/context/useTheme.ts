import { useContext } from "react";
import { Context } from "./Theme";

export function useTheme() {
    const value = useContext(Context);
    if (value === null) {
        throw new Error("useTheme must be used within an ThemeProvider")
    }

    return value;
}
