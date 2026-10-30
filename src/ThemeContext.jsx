import { useEffect, useState } from 'react';
import { ThemeContext } from './theme';

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', !isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
