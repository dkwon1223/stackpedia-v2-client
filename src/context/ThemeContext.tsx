import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    theme: 'silk',
    toggleTheme: () => {},
});

import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        if(saved) return saved;

        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'luxury'
            : 'silk';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        theme === 'silk' ? setTheme('luxury') : setTheme('silk');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};