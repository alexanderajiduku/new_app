import React from "react";
import './ButtonGroup.css';

const ButtonGroup = () => {
    const printColor = (color) => {
        console.log(`You clicked a ${color.toUpperCase()} button`);
    }
    return (
    <div className="buttonGroup">
      <button className="buttonGroup-red" onClick={()=>printColor('Red')}>Red</button>
      <button className="buttonGroup-blue" onClick={()=>printColor('Blue')}>Blue</button>
      <button className="buttonGroup-green" onClick={()=>printColor('Green')}>Green</button>
    </div>
  );
}


export default ButtonGroup;  