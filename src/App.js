import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {
    const [nameButton, setNameButton] = useState('Click');
    const [textContent, setTextContent] = useState('Hello React');

    function chengeNameButton() {
        setNameButton('Chenge Button')
        setTextContent('Hi Frontend')
    }

  return (
    <div className="App">
       <h1>{textContent}</h1>
        <Button onClick={chengeNameButton} text={nameButton}/>
    </div>
  );
}

export default App;
