import './App.css';
import {useState} from 'react';
import Button from "./components/Button";

function App() {
    const [nameButton, setNameButton] = useState('Click');
    const [textContent, setTextContent] = useState('Hello React');

    function changeNameButton() {
        setNameButton('Change Button')
        setTextContent(textContent === 'Hello React' ? 'Hi Frontend' : 'Hello React')
    }

    return (
        <div className="App">
            <h1>{textContent}</h1>
            <Button onClick={changeNameButton} text={nameButton}/>
            <h2 className='content'>Возедение 2 в степень 3 : <span className='value'>{Math.pow(2, 3)}</span></h2>
            <h2 className='content'>Рандомное число от 0 до 1 уноженное на 100 : <span
                className='value'>{Math.random() * 100}</span></h2>
            <h2 className='content'>Рандомное число от 0 до 1 уноженное на 100 с округлением : <span
                className='value'>{Math.round(Math.random() * 100)}</span></h2>
        </div>
    );
}

export default App;