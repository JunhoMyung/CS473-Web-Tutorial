

function Board(props) {
    return (
      <div>
        <div className="board-row">
            <button className="square" onClick={() => {props.handlePlay(0)}}>{props.value[0]}</button>
            <button className="square" onClick={() => {props.handlePlay(1)}}>{props.value[1]}</button>
            <button className="square" onClick={() => {props.handlePlay(2)}}>{props.value[2]}</button>
        </div>
        <div className="board-row">
            <button className="square" onClick={() => {props.handlePlay(3)}}>{props.value[3]}</button>
            <button className="square" onClick={() => {props.handlePlay(4)}}>{props.value[4]}</button>
            <button className="square" onClick={() => {props.handlePlay(5)}}>{props.value[5]}</button>
        </div>
        <div className="board-row">
            <button className="square" onClick={() => {props.handlePlay(6)}}>{props.value[6]}</button>
            <button className="square" onClick={() => {props.handlePlay(7)}}>{props.value[7]}</button>
            <button className="square" onClick={() => {props.handlePlay(8)}}>{props.value[8]}</button>
        </div>
      </div>
    );
  }
  
  export default Board;