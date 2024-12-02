import { useEffect, useState } from 'react';
import { Theme } from '../types/Theme';

const themes: Record<Theme, Theme> = {
  light: 'light',
  dark: 'dark',
  system: 'system',
  // Add more themes here
};

const STORAGE_KEY = 'bulma-theme';
const DEFAULT_THEME: Theme = themes.light;

const UseTheme = () => {
  const [chosenTheme, setChosenTheme] = useState<Theme>(themes.system);
  const [appliedTheme, setAppliedTheme] = useState<Theme>(DEFAULT_THEME);
  const [OSTheme, setOSTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const detectOSTheme = (): Theme => {
      if (!window.matchMedia) {
        return DEFAULT_THEME;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return themes.dark;
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return themes.light;
      }
      return DEFAULT_THEME;
    };

    const localTheme = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const osTheme = detectOSTheme();
    setOSTheme(osTheme);

    if (localTheme) {
      setTheme(localTheme, false);
    } else {
      setTheme(themes.system);
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const theme: Theme = event.matches ? themes.dark : themes.light;
      setOSTheme(theme);
      setTheme(theme);
    });
  }, []);

  const setTheme = (theme: Theme, save = true) => {
    setChosenTheme(theme);
    let applied: Theme = theme;
    if (theme === themes.system) {
      applied = OSTheme || DEFAULT_THEME;
      document.documentElement.removeAttribute('data-theme');
      window.localStorage.removeItem(STORAGE_KEY);
    } else {
      document.documentElement.setAttribute('data-theme', theme);
      if (save) {
        window.localStorage.setItem(STORAGE_KEY, theme);
      }
    }
    setAppliedTheme(applied);
  };

  return { chosenTheme, appliedTheme, setTheme };
};

export default UseTheme;
export { themes };