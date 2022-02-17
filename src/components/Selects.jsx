import React from 'react';
import './SelectsStyles.css';

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';

import SelectsImg from './SelectsImg';

const Selects = () => {
  return (
    <div name='views' className='selects'>
        
        <div className="container">
            <SelectsImg bgImg={BoraBora} text={"Bora Bora"} />
            <SelectsImg bgImg={BoraBora2} text={"Bora Bora 2"} />
            <SelectsImg bgImg={Maldives} text={"Maldives"} />
            <SelectsImg bgImg={Maldives2} text={"Maldives 2"} />
            <SelectsImg bgImg={Maldives3} text={"Maldives 3"} />
            <SelectsImg bgImg={KeyWest} text={"Key West"} />
        </div>
        
    </div>
  )
}

export default Selects