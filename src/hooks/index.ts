import { useEffect, useState } from 'react';
import { themes } from '../assets/themes/themes';

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || themes.dark);

  const setCurrentMode = (theme: string) => {
    const link = document.getElementById("theme-link") as HTMLLinkElement;
    link.href = theme === themes.dark ? themes.darkTheme : themes.lightTheme;
  }

  const switchTheme = () => {
    const inverseMode: string = theme === themes.dark ? themes.light : themes.dark
    localStorage.setItem("theme", inverseMode)
    setCurrentMode(theme)
    setTheme(inverseMode);
    return theme;
  }

  useEffect(() => setCurrentMode(theme), [theme])

  return { switchTheme, theme }
}
export { themes };

