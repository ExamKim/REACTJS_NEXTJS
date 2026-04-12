import { atom } from 'recoil';

export const countAtom = atom({
  key: 'countState',
  default: 0
});