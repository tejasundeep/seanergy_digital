import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Default theme
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            document.body.setAttribute('data-bs-theme', theme === 'light' ? '' : 'dark');
            localStorage.setItem('theme', theme);
        }
    }, [theme, isMounted]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    if (!isMounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
