"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState('light')

    const toggle = () => {
        setDarkMode((prev) => (prev === "dark" ? "light" : "dark"));
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggle }}>
            <div className={`theme ${darkMode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}