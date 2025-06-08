import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";

const ThemeContext = createContext({
    theme: 'lightbub',
    toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved ? saved : 'lightbub';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        theme === 'lightbub' ? setTheme('darkbub') : setTheme('lightbub');
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