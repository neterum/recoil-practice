import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import HobbyInput from './Components/HobbyInput';

function App() {

  const textState = atom({
    key: 'textState',
    default:' ',
  });

  const personState = atom({
    key: 'personState',
    default: 
    {
      person : {
        hobbies: {
          hobby1: '', // define empty
          hobby2: '',
          hobby3: ''
        }
      }
    }
  });

  function CharacterCounter() {
    return (
      <div>
        <TextInput />
        <CharacterCount />
      </div>
    );
  }

  function TextInput() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
      setText(event.target.value);
    }

    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
      </div>
    )
  }

  const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(textState);

      return text.length;
    }
  });

  function CharacterCount() {
    const count = useRecoilValue(charCountState);

    return <>Character Count: {count}</>
  }

  return (
    <RecoilRoot>
    <CharacterCounter/>
    <h1>Update Hobbies</h1>
    <HobbyInput/>
    </RecoilRoot>
  )
}

export default App
