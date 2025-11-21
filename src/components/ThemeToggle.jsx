import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-orange-700 transition-colors flex items-center justify-center"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun size={20} className="text-yellow-300" />
            ) : (
                <Moon size={20} className="text-white" />
            )}
        </button>
    );
};

export default ThemeToggle;
