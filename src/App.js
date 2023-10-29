import './App.css';
import Board from './Board';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { db } from './firebase';

function App() {

  const [player, setPlayer] = useState("O")
  const [squares, setSquares] = useState({0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null});
  const [text, setText] = useState("")
  const [leaderboard, setLeaderboard] = useState({})

  useEffect(() => {
    db.ref().get().then((snapshot) => {
      setLeaderboard(snapshot.val())
    })
  }, []);
  

  function handlePlay(num){
    var temp = squares
    temp[num] = player
    setSquares(squares)
    if (player === "O"){
      setPlayer("X")
    }
    else{
      setPlayer("O")
    }
  }

  function handleSubmit(){
    db.ref().get().then((snapshot) => {
      const playerList = snapshot.val()
      if (text in playerList){
        db.ref(text).set(playerList[text] + 1)
      }
      else{
        db.ref(text).set(1)
      }
    })
    console.log(leaderboard)
    setText("")
    setSquares({0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null})
  }

  return (
    <div className='main'>
      <div className='heading'>
        Let's Play Tic-Tac-Toe
      </div>
      <div className='subheading'>
        Current Player: {player}
      </div>
      <Board 
        value = {squares} 
        handlePlay = {handlePlay}
      />
      <br/>
      <br/>
      <div className='subheading'>
        Who is the Winner?
      </div>
      <TextField id="outlined-basic" label="Winner" variant="outlined" size = "small" sx={{ width: "300px", marginRight: "20px" }} value={text} onChange={(e) => {setText(e.target.value)}}/>
      <Button variant="outlined" onClick={handleSubmit} sx = {{ height:"40px" }}>Submit</Button>
      <br/>
      <br/>
      <div className='subheading'>
        Leaderboard
      </div>
      {Object.keys(leaderboard).map((key, i) => (
          <li>
            {key}: {leaderboard[key]}
          </li>
        ))
      }
    </div>
  );
}

export default App;
