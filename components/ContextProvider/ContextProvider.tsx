'use client';
import { Theme, ThemeContext } from '@store/theme';
import { ReactNode, useState, useEffect } from 'react';

interface ContextProviderProps {
  children: ReactNode
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    } else {
      localStorage.setItem('theme', theme);
    }
    // added to body because of overscroll-behavior
    document.body.classList.add(theme + 'Theme');
    return () => {
      document.body.classList.remove(theme + 'Theme');
    };
  }, [theme]);

  const toggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ContextProvider };