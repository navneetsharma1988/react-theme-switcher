import { ReactNode, createContext, useEffect, useState } from "react";

type ThemeContext = {
    theme: string
    toggleTheme: () => void
}

type ThemeProviderProps = {
    children: ReactNode
}

export const Context = createContext<ThemeContext | null>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const theme = isDarkMode ? "dark" : "light";

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);


    function toggleTheme() {
        setIsDarkMode(prevMode => !prevMode);
    }

    return (
        <Context.Provider
            value={{ theme, toggleTheme }}>
            {children}
        </Context.Provider>
    )
}