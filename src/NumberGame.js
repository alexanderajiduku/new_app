import React, {useState} from "react";
import "./NumberGame.css";



const NumberGame = () => {
const genRandom = () => Math.floor(Math.random() * 10) + 1;
const [guess, setGuess] = useState(genRandom());
const [target, setTarget] = useState(genRandom());
const isWinner = guess === target;
return(
<div className="NumberGame">
<h1 className="NumberGame">Target number {target}</h1>
<h1 className={isWinner ? 'winner': 'loser'}>Guess a number {guess}</h1>
<button className="NumberGame" onClick={() => setGuess(genRandom())}>New Number</button>
</div>
)}

export default NumberGame;

