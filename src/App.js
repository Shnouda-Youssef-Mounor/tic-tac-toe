import './App.css';
import { useState,useEffect } from 'react';
import Cell from './components/cell';
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function App() {
  const [cells,setCells]=useState(["", "", "", "", "", "", "", "", ""])
  const [winX,setWinX]=useState(0)
  const [winO,setWinO]=useState(0)
  const [go,setGo]=useState("circle")
  const [winningMessage, setWinningMessage] = useState("");

  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");
    
      if (circleWins) {
        setWinningMessage("O Wins!");
       
      } else if (crossWins) {
        setWinningMessage("X Wins!");
      }
    });
  }, [cells, winningMessage]);

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winningMessage) {
      setWinningMessage("Draw!");
    }
  }, [cells, winningMessage]);
  const playContinue=()=>{
   setWinningMessage('')
    setCells(["", "", "", "", "", "", "", "", ""])
   if(winningMessage==="O Wins!"){
    setWinO(a=>a+1)
    }
    if(winningMessage==="X Wins!"){
      setWinX(a=>a+1)
    }
    
}
  return (
    <div className="App">
      <div className='Result'>
      <label className='titleHead'>
      <label className='typeX'>X</label>
      <label className='resX'>{winX}</label>
     </label>
     <label className='titleHead'>
      <label className='typeY'>O</label>
      <label className='resY'>{winO}</label>
     </label>
      </div>
 
     <div className='gameBoard'>
     {cells.map((cell, index) => (

          <Cell
            id={index}
            go={go}
            setGo={setGo}
            key={index}
            cells={cells}
            setCells={setCells}
            cell={cell}
            winningMessage={winningMessage}
          />
        ))}
     </div>
     <div className='bottom'>
     <button className='btn' onClick={playContinue}>Continue</button>
     <label className='font'>{winningMessage}</label>
     <label className='font'> {!winningMessage && <div>{`now ${go} !`}</div>}</label>
     </div>
     <footer className='footer'>By Shnouda Youssef</footer>
    </div>
  );
}

export default App;
