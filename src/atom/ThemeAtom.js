import { atom } from "recoil";

const THEME_KEY = 'app-theme';

export const themeAtom = atom({
    key: 'themeState',
    default: 'light',
    effects_UNSTABLE: [
        ({ setSelf, onSet }) => {
            const savedTheme = localStorage.getItem(THEME_KEY);
            if (savedTheme === 'light' || savedTheme === 'dark') {
                setSelf(savedTheme);
            }

            onSet((newTheme) => {
                localStorage.setItem(THEME_KEY, newTheme);
            });
        },
    ],
});