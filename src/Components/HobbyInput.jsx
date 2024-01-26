import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { personState } from '../../recoil/recoilAtoms'

function HobbyInput() {
  const [person, setPerson] = useRecoilState(personState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      person: {
        ...prevPerson.person,
        hobbies: {
          ...prevPerson.person.hobbies,
          [name]: value,
        },
      },
    }));
  };

  const updatePersonState = () => {
    // Update the person's hobbies in the Recoil state
    setPerson(person);
  };

  return (
    <div>
      <input
        type="text"
        name="hobby1"
        value={person.person.hobbies.hobby1}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="hobby2"
        value={person.person.hobbies.hobby2}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="hobby3"
        value={person.person.hobbies.hobby3}
        onChange={handleInputChange}
      />
      
      
      <button onClick={updatePersonState}>Update Hobbies</button>
      <label>{person.person.hobbies.hobby1}</label>
      <label>{person.person.hobbies.hobby2}</label>
      <label>{person.person.hobbies.hobby3}</label>
    </div>
  );
}

export default HobbyInput;
