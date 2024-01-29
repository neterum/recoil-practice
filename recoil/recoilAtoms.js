import { atom } from 'recoil';

export const personsState = atom({
  key: 'personsState', // Unique ID (with respect to other atoms/selectors)
  default: [
    {
      person: {
        hobbies: {
          hobby1: '',
          hobby2: '',
          hobby3: '',
        },
      },
    },
    // Add more person objects here if needed
  ],
});

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

// Define a function to add the personState to personsState
export const addPersonState = selectorFamily({
  key: 'addPersonState',
  get: (personIndex) => ({ get }) => {
    // Get the current value of personsState
    const currentPersons = get(personsState);
    
    // Get the personState from the personState atom
    const newPerson = get(personState);

    // Add the new personState to the array
    const updatedPersons = [...currentPersons, newPerson];

    // Return the updated array as the new value for personsState
    return updatedPersons;
  },
});

// Define a function to replace a person at a specific index in personsState with personState
export const replacePersonStateAtIndex = selectorFamily({
  key: 'replacePersonStateAtIndex',
  get: (personIndex) => ({ get }) => {
    // Get the current value of personsState
    const currentPersons = get(personsState);

    // Get the personState from the personState atom
    const newPerson = get(personState);

    // Clone the currentPersons array to avoid mutating it directly
    const updatedPersons = [...currentPersons];

    // Replace the person at the specified index with the newPerson
    updatedPersons[personIndex] = newPerson;

    // Return the updated array as the new value for personsState
    return updatedPersons;
  },
});

/*
function parseMultiLineInput(inputText) {
  // Split the input text by line breaks
  const lines = inputText.split('\n');

  // Trim each line and parse it as a number
  const numbers = lines
    .map((line) => line.trim())
    .filter((line) => line !== '') // Remove empty lines
    .map((line) => parseFloat(line)); // Parse as numbers

  // Create a JSON array from the extracted numbers
  const jsonArray = JSON.stringify(numbers);

  return jsonArray;
}

const multiLineInput = `
50,
60,
70,
80,
90
`;

const jsonArray = parseMultiLineInput(multiLineInput);
console.log(jsonArray); // Output: "[50,60,70,80,90]"

*/

/*import { atom } from 'recoil';

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
}); */