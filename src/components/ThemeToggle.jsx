import React from 'react';
import { useRecoilState } from 'recoil';
import { themeAtom } from '../atom/ThemeAtom';

function ThemeToggle() {
  const [theme, setTheme] = useRecoilState(themeAtom);

  function handleChange() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <div>
      <p className='muted'>Current theme: <strong>{theme}</strong></p>
      <button onClick={handleChange}>
        Switch to {theme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  )
}

export default ThemeToggle;