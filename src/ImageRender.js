import React from 'react';
import './ImageRender.css';

function ImageRender(props) {
  return (
    <div className='container'>
      <img className='img' src={props.src} alt={props.alt} />
    </div>
  );
}

export default ImageRender;
