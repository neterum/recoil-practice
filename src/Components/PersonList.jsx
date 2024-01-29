import React from 'react';
import { useRecoilState } from 'recoil';
import { personsState } from '../../recoil/recoilAtoms'

function PersonList() {
  const [persons, setPersons] = useRecoilState(personsState);

   // Function to handle changes in a person's hobbies
   const handleHobbyChange = (personIndex, hobbyName, newValue) => {
    setPersons((prevPersons) => {
      const updatedPersons = [...prevPersons];
      const personToUpdate = updatedPersons[personIndex];
      // Create a new person object with updated hobbies
      const updatedPerson = {
        ...personToUpdate,
        person: {
          ...personToUpdate.person,
          hobbies: {
            ...personToUpdate.person.hobbies,
            [hobbyName]: newValue,
          },
        },
      };
      updatedPersons[personIndex] = updatedPerson;
      return updatedPersons;
    });
  };

  // Function to add a new person to the list
  const addPersonEmpty = () => {
    setPersons((prevPersons) => [
      ...prevPersons,
      {
        person: {
          hobbies: {
            hobby1: '',
            hobby2: '',
            hobby3: '',
          },
        },
      },
    ]);
  };

    // Function to remove a person from the list
    const removePerson = (personIndex) => {
        setPersons((prevPersons) =>
          prevPersons.filter((_, index) => index !== personIndex)
        );
      };

      return (
        <div>
          {persons.map((person, index) => (
            <div key={index}>
              <h2>Person {index + 1}</h2>
              <input
                type="text"
                value={person.person.hobbies.hobby1}
                onChange={(e) => handleHobbyChange(index, 'hobby1', e.target.value)}
              />
              {/* Add inputs for other hobbies */}
              <button onClick={() => removePerson(index)}>Remove Person</button>
            </div>
          ))}
          <button onClick={addPersonEmpty}>Add Person</button>
        </div>
      );
    }


export default PersonList;
