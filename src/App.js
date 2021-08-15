import { useState } from "react";
import Board from "./Board";
import Button from "./Button";
import './App.css';
import logo from "./assets/logo.png";


function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtherHistory] = useState([]);

    const handleRollClick = () => {
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
    };

    const handClearClick = () => {
        setMyHistory([]);
        setOtherHistory([]);
    };

    return (
        <div className="App">
            <div>
                <img className="App-logo" src={logo} alt="주사위게임 로고" />
                <h1 className="App-title">주사위게임</h1>
            </div>         
            <div>
                <Button className= "App-button" color="playButton" onClick={handleRollClick} >던지기</Button>
                <Button className= "App-button" color="resetButton" onClick={handClearClick} >리셋</Button>
            </div>
            <div className="App-boards">            
                <Board className="App-board" name="나" color="blue" history={myHistory} />
                <Board className="App-board" name="상대" color="red" history={otherHistory} /> 
            </div>       
        </div>
    );
}

export default App; 