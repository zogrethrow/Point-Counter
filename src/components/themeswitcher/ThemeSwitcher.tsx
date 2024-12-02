import React from 'react';
import {Theme} from '../../types/Theme';
import useTheme, {themes} from '../../hooks/UseTheme';

const ThemeSwitcher: React.FC = () => {
  const {appliedTheme, setTheme} = useTheme();

  return (
    <div className={`field`}>
      <div className={`control is-expanded`}>
        <div className={`select is-fullwidth`}>
          <select className={``} onChange={e => setTheme(themes[e.target.value as Theme])}>
            {Object.keys(themes).map((themeKey) => (
              <option key={themeKey} value={themes[themeKey as Theme]} selected={themeKey === appliedTheme}>
                {themeKey.charAt(0).toUpperCase() + themeKey.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;