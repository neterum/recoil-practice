import { atom } from 'recoil';

export const personState = atom({
  key: 'personState', // Unique ID (with respect to other atoms/selectors)
  default: {
    person: {
      hobbies: {
        hobby1: '',
        hobby2: '',
        hobby3: '',
      },
    },
  },
});