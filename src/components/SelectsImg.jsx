import React from 'react';
import './SelectsImgStyles.css';
import BoraBora from '../assets/borabora.jpg';

const SelectsImg = ({bgImg, text}) => {
  return (
    <div className='selects-location'>
        <img src={bgImg} alt="/" />
        <div className="overlay">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default SelectsImg